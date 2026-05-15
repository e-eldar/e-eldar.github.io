import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { initDb, run } from './db.js';

await initDb();
const username = process.env.ADMIN_USERNAME || 'admin';
const password = process.env.ADMIN_PASSWORD || 'change-me-now';
const hash = await bcrypt.hash(password, 12);
await run('INSERT OR REPLACE INTO users (id, username, password_hash, role) VALUES ((SELECT id FROM users WHERE username = ?), ?, ?, ?)', [username, username, hash, 'admin']);
console.log(`Admin user ready: ${username}`);
process.exit(0);
