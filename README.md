# Enterprise Next.js 16 SaaS Boilerplate

A cutting-edge, maximally strictly typed, production-ready foundation designed for building modern scalable SaaS products without the clutter. This boilerplate is precisely engineered for AI agent compatibility (Antigravity/Cursor/Windsurf) and developer velocity.

## 🚀 The Core Stack

- **Framework:** [Next.js 16.2](https://nextjs.org) (App Router, Turbopack)
- **UI & React:** [React 19.2](https://react.dev) + [Tailwind CSS 4.2](https://tailwindcss.com) 
- **Database layer:** PostgreSQL 18 + **Prisma 7.6** (`@prisma/adapter-pg`)
- **API Connectivity:** [tRPC 11.16](https://trpc.io) + Zod validation
- **Authentication:** **NextAuth v4** (Stateless Credentials Strategy via JWT)
- **DevOps Core:** Github Actions automated pipeline (Lint, Type check, Caching)

## 💻 Environment & Setup

### 1. Variables & Infrastructure
Clone `.env.example` into `.env`.
To run the database locally:
```bash
docker compose up -d
```

### 2. Bootstrapping
You must be running Node.js **24.x LTS**.
```bash
npm install
npm run db:push
npm run db:generate
```

### 3. Start Development
```bash
npm run dev
```

## 🛠️ Built-in Scripts
- `npm run check` - Validates strict TS and ESLint rules. Fails instantly on ANY infraction. Used as a hard-gate in `main.yml` CI/CD.
- `npm run build` - Validates the Next cache and builds highly optimized Turbopack bundles.

## 🌱 Architecture & Enterprise Considerations

1. **Authentication (Stateless Edge):** NextAuth uses the JWT strategy natively alongside Prisma's raw Client. This avoids bloated Session DB lookups on every request, delivering top-tier Serverless/Edge performance while generating robust `HttpOnly` security.
2. **AI-Ready Agents Layer (`.agents/`):** Custom workflows and checklists designed specifically so that LLMs integrated in your IDE never guess your deployment structures or DB nuances.
3. **Immaculate Boundaries:** We strictly decouple Client Components from Server-Side context. Bundler boundaries strictly prohibit `pg` and DB context from leaking into the React tree.
4. **CI/CD Pipeline Cache Automation:** The `.github/workflows/main.yml` automatically preserves `.next/cache` between commits while enforcing Node 24.x latest requirements, minimizing Cloud bill usage for CI.
