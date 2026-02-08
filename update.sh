#!/bin/bash
echo "Updating OpenClaw..."
cd ~/copyclaude || exit 1
git pull || { echo "Git pull failed"; exit 1; }
pnpm install || { echo "pnpm install failed"; exit 1; }
pnpm build || { echo "Build failed"; exit 1; }
pnpm ui:build || { echo "UI build failed"; exit 1; }
echo "Update complete. Run ./start.sh to start the gateway."
