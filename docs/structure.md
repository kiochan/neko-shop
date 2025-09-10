# Project Structure

This document provides an overview of the frameworks, tools, and folder structure.

---

## Frameworks & Tools Used

- **Next.js** – React framework for server and client rendering
- **TypeScript** – Strongly typed JavaScript
- **Prisma** – Database ORM
- **SQLite** – Local development database
- **Tailwind CSS** – Styling utility framework

---

## Folder Structure

````

.
├── docs/                # Documentation files
├── prisma/              # Database schema & migrations
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/             # Next.js App Router (pages & layouts)
│   │   ├── login/
│   │   ├── dashboard/
│   │   └── layout.tsx
│   ├── const            # constants (inclueds enums)
│   ├── difinitions      # type and interfaces
│   ├── generated/prisma # Generated Prisma client
│   ├── lib/             # Helper libraries (e.g., auth, middleware utils)
│   └── styles/          # Global styles
├── public/              # Static assets
├── .env.example         # Environment variable template
├── package.json
└── tsconfig.json
```
````
