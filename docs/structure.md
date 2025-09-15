# Project Structure

This document provides an overview of the frameworks, tools, and folder structure.

---

## Frameworks & Tools Used

- **Next.js** – React framework for server and client rendering
- **TypeScript** – Strongly typed JavaScript
- **Prisma** – Database ORM
- **SQLite** – Local development database
- **Tailwind CSS** – Styling utility framework
- **shadcn/ui** – Reusable UI components built on Radix and Tailwind

---

## Folder Structure

```
./
├── .github/workflows/   # Github CI
├── docs/                # Documentation files
├── prisma/              # Database schema & migrations
│   ├── schema.prisma    # Main Prisma config file
│   └── seed.ts          # Populate the database with initial data
├── scripts/             # Automation scripts
├── src/
│   ├── app/             # Next.js App Router (pages & layouts)
│   │   ├── actions/     # Global server actions
│   │   ├── api/         # APIs
│   │   ├── login/       # Login page (/login/)
│   │   ├── ... etc.     # ... Some other pages
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout of the app
│   │   ├── globals.css  # Global styles
│   │   └── page.tsx     # Home page (/)
│   ├── const            # Global constants (inclueds enums)
│   ├── components       # Reusable component
│   │   ├── ui           # Single reusable component (e.g. Button, Input, Modal)
│   │   └── view         # Composite component (built from multiple reusable components)
│   ├── difinitions      # Type and interfaces
│   ├── generated
│   │   └── prisma       # Generated Prisma client
│   ├── lib/             # Helper libraries (e.g., auth, middleware utils)
│   └── settings/        # Settings for whole App
├── public/              # Static assets
├── .env.example         # Environment variable template
├── package.json
└── tsconfig.json
```
