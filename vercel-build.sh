#!/usr/bin/env bash
set -euo pipefail

# Vercel build script for static client output
# - installs dependencies
# - runs the existing build (creates dist/public)

npm ci
npm run build
