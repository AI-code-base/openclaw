#!/bin/bash
echo "Stopping OpenClaw gateway..."
pkill -9 -f "openclaw gateway" 2>/dev/null
rm -f /tmp/openclaw/gateway.lock
sleep 1
if pgrep -f "openclaw gateway" > /dev/null; then
  echo "Force killing remaining processes..."
  pkill -9 -f node
  rm -f /tmp/openclaw/gateway.lock
fi
echo "Gateway stopped."
