import { NextRequest, NextResponse } from "next/server";
import { fetchFromApi } from "@/lib/appClient";

export async function GET(request: NextRequest) {
    const options: RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const apiUrl = `http://localhost:5000/api/drivers/`;

    const driverResponse = await fetchFromApi(apiUrl);

    // console.log(driverResponse)
    if ("error" in driverResponse) {
        // Bad request
        return NextResponse.json(driverResponse, { status: 400 });
    }

    return NextResponse.json(driverResponse, { status: 200 });
}