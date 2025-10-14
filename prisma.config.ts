import path from 'path'

import dotenv from 'dotenv'
import { defineConfig } from 'prisma/config'

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
