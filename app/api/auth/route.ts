import { NextRequest, NextResponse } from "next/server";
import { fetchFromApi } from "@/lib/appClient";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Make the request to authenticate the user
  const apiUrl = `https://dev-app-api.foxtow.com/api/users/login`;
  const tokensResponse = await fetchFromApi(apiUrl, "POST", {
    email,
    password,
  });

  if ("error" in tokensResponse) {
    return NextResponse.json(tokensResponse.error, { status: tokensResponse.status });
  }

  const response = NextResponse.json(tokensResponse.data, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
  
  // Save the tokens in the cookie
  response.cookies.set({
    name: "tokens",
    path: "/",
    value: JSON.stringify(tokensResponse.data),
  });

  return response;
}