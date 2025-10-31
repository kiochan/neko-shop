# Project Structure

The project follows a **feature-based** structure.  
API is implemented using **tRPC**, and **Zod** is used to ensure consistent shared types.

## Structure Overview

```
./
├── prisma/              # Database schema and migrations
├── scripts/             # Utility scripts (e.g., pnpm enforcement)
├── src/
│   ├── app/             # Next.js App Router (routes, layouts, pages)
│   ├── features/        # Feature modules (grouped by domain)
│   ├── settings/        # Global configuration
│   └── shared/          # Reusable code across features
│       ├── hooks/
│       ├── layout/
│       ├── lib/
│       ├── safe-result/
│       ├── trpc/        # tRPC router and client setup
│       └── ui/          # Common UI components
└── uploads/             # Local upload storage (development use)
```

## Feature-Based Layout

Each feature under `src/features/` contains only what belongs to that feature.

```
feature-name/
├── components/        # UI components for this feature
├── hooks/             # Hooks specific to this feature
├── lib/               # Helpers if needed
├── dto/               # Zod schemas (input/output typing)
├── server/            # Server logic (tRPC procedures, database queries)
│   └── index.ts       # Export server logic (must include `import "server-only"`)
├── client/            # Client-only helpers (optional)
│   └── index.ts       # Export client-only code (prepend `"use client"` if needed)
└── index.ts           # Public exports (safe to import on both client & server)
```

## Export Rules

| File              | Purpose                                              | Notes                                              |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `index.ts`        | Export anything usable on **both server and client** | UI components / hooks / shared utils               |
| `dto/*`           | **Only contains Zod schemas and type helpers**       | Used by both server and client                     |
| `server/index.ts` | Export server-only logic                             | Must contain `import "server-only"`                |
| `client/index.ts` | Export client-only logic                             | Should include `"use client"` at the top if needed |

Example:

```

src/features/product-viewer/
├── components/product-card.tsx
├── dto/product.dto.ts         # Zod schemas like: productIdSchema, productFormSchema
├── server/router.ts           # tRPC router
├── server/index.ts            # import "server-only"; export * from './router'
├── client/index.ts            # "use client"; export UI client helpers if needed
└── index.ts                   # export * from './dto'; export * from './components';

```

## tRPC + Zod

- All input/output validation lives in `dto/` using **Zod**
- tRPC procedures import Zod schemas directly
- The client automatically inherits the same types

No manual type duplication. The server is the source of truth.

## Notes on Routing & Structure Flexibility

You may place the tRPC router for a feature in whichever location is most convenient:

```

feature-name/
└── server/trpc/router.ts     # (recommended if organized)

```

and then re-export it from:

```

feature-name/
└── server/index.ts           # import "server-only"; export * from './trpc/router';

```

Or, if the feature is small, you can simply define and export the router directly in `server/index.ts`.

There are **no hard rules** beyond the server/client boundaries.  
Use whatever layout keeps the feature **easy to read and maintain**.

If a feature grows too large, you can split it into smaller sub-features or introduce internal folders.  
The structure exists to support development clarity — not to restrict it.
