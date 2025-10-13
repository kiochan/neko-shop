import { defineConfig } from 'prisma/config'
import dotenv from 'dotenv'
import path from 'path'

// Determine if we are in development mode
const isDev = process.env.NODE_ENV !== 'production'

// Load .env or .env.production dynamically
const envFile = isDev ? path.resolve('.env') : path.resolve('.env.production')

dotenv.config({ path: envFile })

export default defineConfig({
  schema: 'prisma/schema',
  migrations: {
    seed: 'tsx prisma/seed.ts',
  },
})
