"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { LoginPayload } from "@/definitions/payload/auth.model";

const prisma = new PrismaClient();

export async function login(data: LoginPayload) {
  const email = data.email;
  const password = data.password;

  if (!email || !password) {
    return { error: "Missing email or password" };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return { error: "Invalid email or password" };
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return { error: "Invalid email or password" };
  }

  const sessionId = randomUUID();
  const SevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
  const expiresAt = new Date(Date.now() + SevenDaysInMs);

  await prisma.session.create({
    data: {
      id: sessionId,
      userId: user.id,
      expiresAt,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set("sessionId", sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });

  redirect("/dashboard");
}
