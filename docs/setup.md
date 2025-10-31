# Setup

This document explains how to set up and run the project locally.

## Requirements

- Node.js >= 20
- pnpm >= 10

The project currently uses **SQLite** by default, so no external database setup is required.
A switch to PostgreSQL may happen later.

## Clone the project

```bash
git clone https://github.com/kiochan/neko-shop.git
cd neko-shop
```

## Install dependencies

```bash
pnpm install
```

If you really need to bypass the pnpm restriction:

```bash
ALLOW_OTHER_PM=true npm install
```

## Environment variables

The default SQLite configuration should work out of the box.
If needed, ensure `.env` contains:

```
DATABASE_URL="file:./dev.db"
```

## Database setup

Generate the Prisma client and apply migrations:

```bash
pnpm db:generate
pnpm db:migrate
```

Reset the database (this deletes all data):

```bash
pnpm db:reset
```

Open Prisma Studio:

```bash
pnpm db:studio
```

## Start the development server

```bash
pnpm dev
```

Visit:

```
http://localhost:3000
```

## Production build (optional)

```bash
pnpm build:prod
pnpm start
```

## Switching to PostgreSQL (future)

When switching to PostgreSQL:

1. Update `DATABASE_URL` in `.env`
2. Run:

   ```bash
   pnpm db:migrate:prod
   ```

No further steps are required at this stage.
