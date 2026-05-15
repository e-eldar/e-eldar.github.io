import { rmSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';

const root = process.cwd();
const targets = [
  'node_modules',
  'package-lock.json',
  'frontend/node_modules',
  'frontend/package-lock.json',
  'backend/node_modules',
  'backend/package-lock.json'
];

for (const target of targets) {
  const fullPath = join(root, target);
  if (existsSync(fullPath)) {
    console.log(`Removing ${target} ...`);
    rmSync(fullPath, { recursive: true, force: true });
  }
}

console.log('Using public npm registry...');
execSync('npm config set registry https://registry.npmjs.org/', { stdio: 'inherit' });

console.log('Installing root dependencies...');
execSync('npm install', { stdio: 'inherit' });
console.log('Installing frontend dependencies...');
execSync('npm --prefix frontend install', { stdio: 'inherit' });
console.log('Installing backend dependencies...');
execSync('npm --prefix backend install', { stdio: 'inherit' });

console.log('\nDone. Start the project with: npm run dev');
