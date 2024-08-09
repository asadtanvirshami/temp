import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const options: RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const trucksResponse = await fetch(
        `http://localhost:5000/api/trucks/`,
        options,
    ).then((res) => res.json());

    // console.log(driverResponse)
    if ("error" in trucksResponse) {
        // Bad request
        return NextResponse.json(trucksResponse, { status: 400 });
    }

    return NextResponse.json(trucksResponse, { status: 200 });
}