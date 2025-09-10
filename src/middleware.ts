import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ECookie } from "./api/http-instance";

const publicRoutes = [
  "/signin",
  "/signup",
  "/forgot-password",
  "/reset-password",
];

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ECookie.ACCESS_TOKEN)?.value;
  const refreshToken = cookieStore.get(ECookie.REFRESH_TOKEN)?.value;
  const currentPath = request.nextUrl.pathname;

  /** Check this cases:
   * all routes exclude public route are private routes
   * So we need to check, if there is no token and refresh token and in public route -> keep this url
   * if has token and in private routes , keep this routes
   * if has token and in public routes -> redirect to login
   * if no token and in private routes -> redirect to login
   */

  const isPublicRoute = publicRoutes.includes(currentPath);
  const hasToken = !!token;
  const hasRefreshToken = !!refreshToken;

  // Case 1: No token and refresh token and in public route -> keep this url
  if (!hasToken && !hasRefreshToken && isPublicRoute) {
    return NextResponse.next();
  }

  // Case 2: Has token and in private routes -> keep this routes
  if (hasToken && !isPublicRoute) {
    return NextResponse.next();
  }

  // Case 3: Has token and in public routes -> redirect to dashboard
  if (hasToken && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Case 4: No token and in private routes -> redirect to signin
  if (!hasToken && !isPublicRoute) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Default case: redirect to signin
  return NextResponse.redirect(new URL("/signin", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
