'use client'

import { NextResponse, type NextRequest } from "next/server";
import { getUserCredentials } from "./lib/auth/getUserCredentials";
import isValidJWT from "./lib/auth/isValidJWT";

// Define the routes that require authentication
const protectedRoutes = ["/invoice"];

// Middleware function to handle authentication and redirection
export async function middleware(request: NextRequest) {
  // Extract the pathname from the request URL
  // request.cookies.delete("tokens");

  const pathname = request.nextUrl.pathname;
  if(pathname === '/') {
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }

  // Get user credentials from the request
  const credentials = getUserCredentials(request);
  // console.log(credentials)

  if(pathname === '/login' && credentials) {
    const response = NextResponse.redirect(new URL("/invoice", request.url));
    return response;
  }
  // Check if the current route is protected and user credentials are missing
  // or the refresh token is not valid
  if (
    (protectedRoutes.includes(pathname) && !credentials) ||
    (await isValidJWT(credentials?.token ?? ""))
  ) {
    // Delete the "user" cookie to log the user out
    request.cookies.delete("user");

    // Create a redirection response to the "/auth" endpoint
    const response = NextResponse.redirect(new URL("/login", request.url));

    // Delete the "user" cookie from the response as well
    response.cookies.delete("user");

    // Return the redirection response
    return response;
  }

  // If the route is not protected or the user has valid credentials, continue to the next middleware
  return NextResponse.next();
}