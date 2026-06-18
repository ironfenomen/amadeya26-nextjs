import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 5 старых URL постов /%20/stati/… (пробел/%20) → 301 на главную, как на живом WP/Yoast.
// nextUrl.pathname приходит декодированным ("/ /stati/…"); ловим и пробел, и %20.
export function middleware(request: NextRequest) {
  const p = request.nextUrl.pathname;
  if (/^\/(?:\s|%20)\/stati\//.test(p)) {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }
}

export const config = {
  matcher: ["/:path*"],
};
