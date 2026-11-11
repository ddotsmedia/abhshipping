#!/bin/bash
# Run once on VPS as root to set up abhshipping deployment target
set -euo pipefail

DOMAIN="abhshipping.com"
APP_DIR="/opt/abhshipping"
DEPLOY_USER="deploy"

echo "==> Creating deploy user"
id "$DEPLOY_USER" &>/dev/null || useradd -m -s /bin/bash "$DEPLOY_USER"
usermod -aG docker "$DEPLOY_USER" 2>/dev/null || true

echo "==> Creating app directory"
mkdir -p "$APP_DIR"
chown "$DEPLOY_USER:$DEPLOY_USER" "$APP_DIR"

echo "==> Copying docker-compose + nginx config"
cp "$(dirname "$0")/../docker-compose.yml" "$APP_DIR/"
cp "$(dirname "$0")/nginx/abhshipping.conf" /etc/nginx/sites-available/"$DOMAIN"
ln -sf /etc/nginx/sites-available/"$DOMAIN" /etc/nginx/sites-enabled/"$DOMAIN"

echo "==> Create .env on VPS at $APP_DIR/.env — fill in secrets before continuing"
cat > "$APP_DIR/.env.template" <<'ENV'
POSTGRES_PASSWORD=CHANGE_ME
AUTH_SECRET=CHANGE_ME_32_CHARS
AUTH_URL=https://abhshipping.com
RESEND_API_KEY=re_CHANGE_ME
QUOTE_RECIPIENT_EMAIL=quotes@abhshipping.com
WEB_IMAGE=ghcr.io/ddotsmedia/abhshipping:latest
ENV

echo "==> Testing nginx config"
nginx -t

echo "==> Obtaining SSL cert (requires domain DNS to point here)"
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m admin@"$DOMAIN"

echo "==> Reloading nginx"
systemctl reload nginx

echo ""
echo "DONE. Next steps:"
echo "1. cp $APP_DIR/.env.template $APP_DIR/.env"
echo "2. Edit $APP_DIR/.env with real values"
echo "3. Add GitHub Secrets (see README.md)"
echo "4. Push to main — GitHub Actions deploys automatically"
