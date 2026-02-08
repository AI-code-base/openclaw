#!/bin/bash
echo "Starting OpenClaw gateway..."
cd ~/copyclaude || exit 1
source .env
nohup pnpm openclaw gateway --bind lan > ~/gateway.log 2>&1 &
sleep 2
if ss -tlnp | grep -q 18789; then
  echo "Gateway started on port 18789."
else
  echo "Gateway may still be starting. Check: tail -f ~/gateway.log"
fi
