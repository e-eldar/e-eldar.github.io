import path from 'node:path';
import fs from 'node:fs';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = process.env.DATABASE_PATH || path.resolve(__dirname, '../data/portfolio.sqlite');
const absoluteDatabasePath = path.isAbsolute(databasePath) ? databasePath : path.resolve(__dirname, '..', databasePath);
fs.mkdirSync(path.dirname(absoluteDatabasePath), { recursive: true });

sqlite3.verbose();
export const db = new sqlite3.Database(absoluteDatabasePath);

export function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function onRun(error) {
      if (error) reject(error);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

export function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => error ? reject(error) : resolve(row));
  });
}

export function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => error ? reject(error) : resolve(rows));
  });
}

export async function initDb() {
  await run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      source TEXT DEFAULT 'portfolio',
      ip TEXT,
      user_agent TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await run(`CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC)`);

  const count = await get('SELECT COUNT(*) AS total FROM users');
  if (count.total === 0) {
    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'change-me-now';
    const passwordHash = await bcrypt.hash(password, 12);
    await run('INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)', [username, passwordHash, 'admin']);
    console.log(`[db] Created development admin user: ${username}`);
  }
}
