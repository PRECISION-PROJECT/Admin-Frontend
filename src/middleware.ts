import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ECookie } from "./apis/http-instance";
import { ROUTES } from "./utils/routes";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL! +
  process.env.NEXT_PUBLIC_API_PREFIX! +
  process.env.NEXT_PUBLIC_API_VERSION!;

const publicRoutes = ["/sign-in", "/forgot-password", "/reset-password"];

type TRefreshTokenResponse = {
  token?: string;
  refreshToken?: string;
  tokenExpires?: number;
};

async function requestRefreshToken(
  refreshToken: string
): Promise<TRefreshTokenResponse> {
  const response = await fetch(`${baseURL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    throw new Error(`Refresh token failed: ${response.status}`);
  }

  return await response.json();
}

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ECookie.ACCESS_TOKEN)?.value;
  const refreshToken = cookieStore.get(ECookie.REFRESH_TOKEN)?.value;
  const currentPath = request.nextUrl.pathname;

  /** Check this cases:
   * all routes exclude public route are private routes
   * So we need to check, if there is no token and refresh token and in public route -> keep this url
   * if no token and has refreshToken -> get refresh token and call /refresh then add access token to cookie again
   * if has token and in private routes , keep this routes
   * if has token and in public routes -> redirect to dashboard
   * if no token and in private routes -> redirect to login
   */

  const isPublicRoute = publicRoutes.includes(currentPath);
  let hasToken = !!token;
  const hasRefreshToken = !!refreshToken;

  // Case 1: No token and refresh token and in public route -> keep this url
  if (!hasToken && !hasRefreshToken && isPublicRoute) {
    return NextResponse.next();
  }

  // Case 2: No token but has refresh token
  if (!token && hasRefreshToken) {
    try {
      const result = await requestRefreshToken(refreshToken);

      if (result.token && result.refreshToken) {
        hasToken = true;
        const response = NextResponse.next();

        response.cookies.set(ECookie.ACCESS_TOKEN, result.token, {
          path: "/",
          expires: result.tokenExpires
            ? new Date(result.tokenExpires)
            : undefined,
        });

        response.cookies.set(ECookie.REFRESH_TOKEN, result.refreshToken, {
          path: "/",
          expires: result.tokenExpires
            ? new Date(result.tokenExpires)
            : undefined,
        });

        return response;
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      hasToken = false;
      const response = NextResponse.redirect(
        new URL(ROUTES.SIGN_IN, request.url)
      );
      response.cookies.delete(ECookie.REFRESH_TOKEN);
      return response;
    }
  }

  // Case 3: Has token and in private routes -> keep this routes
  if (hasToken && !isPublicRoute) {
    return NextResponse.next();
  }

  // Case 4: Has token and in public routes -> redirect to dashboard
  if (hasToken && isPublicRoute) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  // Case 5: No token and in private routes -> redirect to signin
  if (!hasToken && !isPublicRoute) {
    return NextResponse.redirect(new URL(ROUTES.SIGN_IN, request.url));
  }

  // Case 6: Default case: redirect to signin
  return NextResponse.redirect(new URL(ROUTES.SIGN_IN, request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
