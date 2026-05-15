# VPS deployment guide

## 1. Build locally or on server

```bash
npm run install:all
npm run build
```

## 2. Backend env

Create:

```bash
backend/.env
```

Example:

```env
NODE_ENV=production
PORT=3001
JWT_SECRET=replace_this_with_a_long_random_secret
ADMIN_USERNAME=eldar
ADMIN_PASSWORD=replace_with_strong_password
CORS_ORIGIN=https://your-domain.com
DATABASE_PATH=./data/portfolio.sqlite
```

## 3. Start with PM2

```bash
cd /var/www/eldar-portfolio-premium
pm2 start backend/src/server.js --name eldar_portfolio
pm2 save
```

## 4. Nginx reverse proxy

```nginx
server {
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 5. SSL

```bash
certbot --nginx -d your-domain.com -d www.your-domain.com
```
