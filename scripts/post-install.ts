import { existsSync, copyFileSync } from "fs";
import { execSync } from "child_process";
import path from "path";

const envFile = path.resolve(".env");
const envExampleFile = path.resolve(".env.example");

function ensureEnvFile() {
  if (!existsSync(envFile)) {
    if (existsSync(envExampleFile)) {
      console.log("No .env file found. Copying from .env.example...");
      copyFileSync(envExampleFile, envFile);
      console.log(".env file created.");
    } else {
      throw new Error("Neither .env nor .env.example exists. Aborting.");
    }
  } else {
    console.log(".env file already exists.");
  }
}

function generatePrismaClient() {
  console.log("Running prisma migrate...");
  execSync("npx prisma migrate dev", { stdio: "inherit" });
  console.log("Prisma client generated successfully.");
}

function main() {
  try {
    ensureEnvFile();
    generatePrismaClient();
  } catch (err) {
    console.error("Initialization failed:", err);
    process.exit(1);
  }
}

main();
