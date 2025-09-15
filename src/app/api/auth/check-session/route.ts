import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { CheckSessionResponse } from "./model";

export async function GET(
  request: Request
): Promise<NextResponse<CheckSessionResponse>> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("sessionId")?.value;

  if (!sessionId) {
    return NextResponse.json({ valid: false });
  }

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
  });

  const isValid = !!session && session.expiresAt > new Date();

  return NextResponse.json({ valid: isValid });
}
