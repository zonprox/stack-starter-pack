---
description: Production Deployment Checklist
---

# Production Deployment Checklist

This project is built around Server Components and API Routes (Vercel-ready).

## Environment Variables

Ensure the following variables are securely set in the production environment:

- `DATABASE_URL`: Must be a strictly valid PostgreSQL connection string (preferably connection pooling, e.g. PgBouncer or Neon/Supabase Pooler).
- `NEXTAUTH_SECRET`: A secure randomly generated hash (e.g. `openssl rand -base64 32`).
- `NEXTAUTH_URL`: The absolute canonical URL of the deployed application (e.g. `https://your-domain.com`).

## Build Phase Check

1. Trigger `npm run check` before merging to main. Any single Type warning will forcibly crash the build pipeline.
2. The Database migration must be handled safely. Use `npx prisma migrate deploy` in CI/CD pipeline, do NOT use `db:push` in production.

## Troubleshooting

- **Bcrypt & Node Versions**: If `bcryptjs` behaves unexpectedly on Edge runtimes, reconsider replacing it with a pure native Crypto API implementation or deploying the Auth API strictly to a Node.js region. (Currently, `bcryptjs` is pure JS, which works around standard `bcrypt` C++ bindings issues).
