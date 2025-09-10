# Project Setup

Follow these steps to set up the project locally.

---

## 1. Install Dependencies

Make sure you have **Node.js (>=18)** installed.  
Then install dependencies:

```bash
npm install
```

---

## 2. Environment Variables

Copy the example `.env` file and update values as needed:

```bash
cp .env.example .env
```

---

## 3. Database Setup

If using Prisma + SQLite:

```bash
npx prisma migrate dev
npx prisma db seed
```

---

## 4. Run the Project Locally

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).
