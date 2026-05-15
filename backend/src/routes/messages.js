import express from 'express';
import validator from 'validator';
import { all, get, run } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

function clean(value, max = 1000) {
  return String(value || '').trim().slice(0, max);
}

router.post('/', async (req, res, next) => {
  try {
    const name = clean(req.body.name, 120);
    const email = clean(req.body.email, 180);
    const subject = clean(req.body.subject, 180);
    const message = clean(req.body.message, 4000);

    if (name.length < 2) return res.status(400).json({ error: 'Name is too short' });
    if (!validator.isEmail(email)) return res.status(400).json({ error: 'Email is not valid' });
    if (subject.length < 2) return res.status(400).json({ error: 'Subject is too short' });
    if (message.length < 10) return res.status(400).json({ error: 'Message is too short' });

    const result = await run(
      `INSERT INTO contact_messages (name, email, subject, message, source, ip, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, subject, message, 'portfolio', req.ip, req.headers['user-agent'] || 'unknown'],
    );

    res.status(201).json({ ok: true, id: result.id });
  } catch (error) {
    next(error);
  }
});

router.get('/', requireAuth, async (req, res, next) => {
  try {
    const messages = await all('SELECT id, name, email, subject, message, source, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 100');
    res.json({ messages });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', requireAuth, async (req, res, next) => {
  try {
    const message = await get('SELECT * FROM contact_messages WHERE id = ?', [req.params.id]);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json({ message });
  } catch (error) {
    next(error);
  }
});

export default router;
