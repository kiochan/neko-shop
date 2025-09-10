import { NextRequest, NextResponse } from "next/server";

export const auth = {
  middleware(req: NextRequest) {
    const sessionId = req.cookies.get("sessionId")?.value;
    const { pathname } = req.nextUrl;

    if (!sessionId && pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (sessionId && pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  matcher: ["/login", "/dashboard/:path*"],
} as const;
