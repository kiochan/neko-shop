#!/usr/bin/env bash

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$PROJECT_DIR"

echo "[deploy-dev] project dir: $PROJECT_DIR"

echo "[deploy-dev] building..."
pnpm build

if pm2 list --silent | grep -q "neko-shop"; then
  echo "[deploy-dev] reloading existing pm2 process..."
  pm2 reload neko-shop --update-env
else
  echo "[deploy-dev] starting pm2 process..."
  pm2 start ecosystem.config.js
fi

pm2 save

echo "[deploy-dev] done"