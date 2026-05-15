@echo off
echo Cleaning broken installs and old lock files...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist frontend\node_modules rmdir /s /q frontend\node_modules
if exist frontend\package-lock.json del frontend\package-lock.json
if exist backend\node_modules rmdir /s /q backend\node_modules
if exist backend\package-lock.json del backend\package-lock.json

echo Setting public npm registry...
npm config set registry https://registry.npmjs.org/

echo Installing dependencies...
npm install
npm --prefix frontend install
npm --prefix backend install

echo.
echo Done. Now run: npm run dev
pause
