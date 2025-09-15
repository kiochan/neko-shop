import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { CheckSessionResponse } from "./model";
import { SESSION_COOKIE_NAME } from "@/app/actions/auth.const";

export async function GET(
  request: Request
): Promise<NextResponse<CheckSessionResponse>> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionId) {
    return NextResponse.json({ valid: false });
  }

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
  });

  const isValid = !!session && session.expiresAt > new Date();

  return NextResponse.json({ valid: isValid });
}
