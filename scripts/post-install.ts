import { execSync } from 'child_process'
import { existsSync, copyFileSync } from 'fs'
import path from 'path'

const isDev = process.env.NODE_ENV !== 'production'

const envFile = path.resolve('.env')
const envDevExampleFile = path.resolve('.env.example')
const envProdExampleFile = path.resolve('.env.production.example')

function ensureEnvFile() {
  if (!existsSync(envFile)) {
    if (isDev) {
      if (existsSync(envDevExampleFile)) {
        console.warn('No .env file found. Copying from .env.example...')
        copyFileSync(envDevExampleFile, envFile)
        console.log('.env file created.')
      } else {
        throw new Error('Neither .env nor .env.example exists. Aborting.')
      }
    } else {
      if (existsSync(envProdExampleFile)) {
        console.warn('No .env file found. Copying from .env.production.example...')
        copyFileSync(envProdExampleFile, envFile)
        console.log('.env file created.')
      } else {
        throw new Error('Neither .env nor .env.example exists. Aborting.')
      }
    }
  } else {
    console.log('.env file already exists.')
  }
}

function generatePrismaClient() {
  console.log('Running Prisma migration...')

  const migrateCommand = isDev ? 'pnpm prisma migrate dev' : 'pnpm prisma migrate deploy'

  console.log(`> ${migrateCommand}`)
  execSync(migrateCommand, { stdio: 'inherit' })

  console.log('Ensuring Prisma client is generated...')
  execSync('pnpm prisma generate', { stdio: 'inherit' })

  console.log('Prisma client generated successfully.')
}

function main() {
  console.log(isDev ? 'Running in development mode' : 'Running in production mode')
  try {
    ensureEnvFile()
    generatePrismaClient()
  } catch (err) {
    console.error('Initialization failed:', err)
    process.exit(1)
  }
}

main()
