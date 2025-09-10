import type { NextRequest } from "next/server";
import { auth } from "@/lib/middleware/auth.middleware";

export function middleware(req: NextRequest) {
  return auth.middleware(req);
}

export const config = {
  matcher: [...auth.matcher],
} as const;
