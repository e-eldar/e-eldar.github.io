# Windows install fix

If npm tries to download packages from `packages.applied-caas-gateway1.internal.api.openai.org`, delete old lock files and reinstall from the public npm registry.

## Option A: automatic

Double-click:

```txt
repair-install-windows.bat
```

Then run:

```bash
npm run dev
```

## Option B: terminal commands

From the project root:

```powershell
npm config set registry https://registry.npmjs.org/
rmdir /s /q node_modules
rmdir /s /q frontend\node_modules
rmdir /s /q backend\node_modules
del package-lock.json
del frontend\package-lock.json
del backend\package-lock.json
npm install
npm --prefix frontend install
npm --prefix backend install
npm run dev
```

If Windows says `EPERM`, close VS Code terminals, browser preview, Node processes, and run the commands again.
