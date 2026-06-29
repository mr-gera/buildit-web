#!/usr/bin/env bash

set -e

PROJECT_DIR="/opt/buildit/buildit-web"
DIST_DIR="$PROJECT_DIR/dist"
TARGET_DIR="/opt/buildit/ebud-landing"
BRANCH="main"

echo "===================================="
echo " eBud landing deploy started"
echo "===================================="

echo ""
echo "1. Moving to project directory..."
cd "$PROJECT_DIR"

echo ""
echo "2. Pulling latest changes from Git..."
git checkout "$BRANCH"
git pull origin "$BRANCH"

echo ""
echo "3. Installing dependencies..."
npm install

echo ""
echo "4. Running typecheck..."
npm run typecheck

echo ""
echo "5. Running lint..."
npm run lint

echo ""
echo "6. Building production bundle..."
npm run build

echo ""
echo "7. Checking build output..."
if [ ! -f "$DIST_DIR/index.html" ]; then
  echo "ERROR: dist/index.html not found. Build failed or output directory is wrong."
  exit 1
fi

echo ""
echo "8. Deploying files to $TARGET_DIR..."
rsync -av --delete "$DIST_DIR/" "$TARGET_DIR/"

echo ""
echo "9. Verifying deployed files..."
if [ ! -f "$TARGET_DIR/index.html" ]; then
  echo "ERROR: deployed index.html not found."
  exit 1
fi

echo ""
echo "10. Checking nginx container can see landing files..."
cd /opt/buildit
docker compose -f compose.full.yaml exec nginx test -f /var/www/landing/index.html

echo ""
echo "11. Checking public HTTPS response..."
curl -I https://build-it-app.uk | head -n 5

echo ""
echo "===================================="
echo " eBud landing deploy finished"
echo "===================================="
