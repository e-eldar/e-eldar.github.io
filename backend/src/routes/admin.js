import express from 'express';
import { get } from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();
router.use(requireAuth);

router.get('/stats', async (req, res, next) => {
  try {
    const total = await get('SELECT COUNT(*) AS value FROM contact_messages');
    const today = await get("SELECT COUNT(*) AS value FROM contact_messages WHERE date(created_at) = date('now')");
    const last = await get('SELECT created_at FROM contact_messages ORDER BY created_at DESC LIMIT 1');
    res.json({ totalMessages: total.value, todayMessages: today.value, lastMessageAt: last?.created_at || null });
  } catch (error) {
    next(error);
  }
});

export default router;
