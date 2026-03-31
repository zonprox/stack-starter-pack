---
description: Start the Local Development Environment
---

# Development Environment Setup

This workflow ensures AI agents or developers start the local environment correctly and reliably.

## Prerequisites

- Docker Desktop is completely up and running.
- Node.js v24+ (LTS) is installed.

## Instructions

1. Check if the database is running: run `docker ps`. If `stack` container is not running, execute `docker compose up -d`.
2. Sync the database: Execute `npx prisma db push` to make sure schema is up to date.
3. Generate typed client: Execute `npx prisma generate` to rebuild Prisma client bindings in `node_modules` and `generated/`.
4. Run Developer Server: Execute `npm run dev` and ensure there are no compilation errors.

**Important For AI Agents:** If you encounter `Attempted to access a server-side environment variable on the client`, ensure that any DB/Auth server-side logic imports are STRICTLY isolated and NEVER imported into Client Components directly. Use `import type` to prevent bundler execution.
