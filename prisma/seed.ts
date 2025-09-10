import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const DefaultPassword = "admin";
const DefaultSaltLength = 10;

async function main() {
  const passwordHash = await bcrypt.hash(DefaultPassword, DefaultSaltLength);

  const admin = await prisma.user.upsert({
    where: { email: "admin@kiochan.one" },
    update: {},
    create: {
      email: "admin@kiochan.one",
      name: "Admin",
      passwordHash,
    },
  });

  console.log("Admin user created:", admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
