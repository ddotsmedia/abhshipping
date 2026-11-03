# ABH Shipping — Full-Stack Web Platform

A modern freight & logistics website built with Next.js 15, tRPC, Prisma, and PostgreSQL.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15.1 (App Router, PPR, React Compiler) |
| Language | TypeScript 5.7 (strict) |
| Styling | Tailwind CSS v4 (CSS-first @theme) |
| API | tRPC v11.1 + React Query v5 |
| Database | Prisma 6 + PostgreSQL 17 |
| Auth | Auth.js v5 (Phase 3) |
| Email | Resend 4.0 |
| Monorepo | Turborepo 2.x + pnpm 9.14 |
| CI/CD | GitHub Actions → ghcr.io → VPS |

## Quick Start

```bash
# Install dependencies
pnpm install

# Set up environment
cp apps/web/.env.example apps/web/.env
# Edit .env with your values

# Start database
docker compose up postgres -d

# Push schema to DB
pnpm db:push

# Start dev server
pnpm dev
```

## Project Structure

```
abhshipping/
├── apps/
│   └── web/              # Next.js 15 app
│       ├── prisma/       # Schema + migrations
│       ├── src/
│       │   ├── app/      # App Router pages
│       │   ├── components/
│       │   ├── server/   # tRPC routers + DB
│       │   └── lib/
│       └── ...
├── packages/
│   └── ui/               # Shared component library
├── .github/workflows/    # CI/CD pipelines
├── Dockerfile
└── docker-compose.yml
```

## GitHub Secrets Required

Set these in **Settings → Secrets → Actions** before deploying:

| Secret | Description |
|---|---|
| `VPS_HOST` | VPS IP or hostname |
| `VPS_USER` | SSH user (e.g. `deploy`) |
| `VPS_SSH_KEY` | Private SSH key |
| `AUTH_SECRET` | Random 32+ char string |
| `RESEND_API_KEY` | From resend.com |
| `QUOTE_RECIPIENT_EMAIL` | Email for quote notifications |
| `POSTGRES_PASSWORD` | Strong DB password |
| `AUTH_URL` | Production URL (https://...) |

## Deployment

Push to `main` → GitHub Actions automatically:
1. Lints and typechecks
2. Builds Docker image → pushes to `ghcr.io/ddotsmedia/abhshipping`
3. SSH deploys to VPS with zero-downtime swap
