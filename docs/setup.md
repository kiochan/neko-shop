# Project Setup

Follow these steps to set up the project locally.

---

## 1. Install Dependencies

Make sure you have **Node.js (>=18)** installed.  
Then install dependencies:

```bash
npm ci
```

`ci` is for `clean install`

---

## 2. Run post-install script.

This script will ini prisma and copy dotenv file.

```bash
npm run post-install
```

---

## 3. Database reset (optional)

If it's your first time. You should reset your database.

```bash
npm run db:reset
```

---

## 4. Run the Project Locally

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).
