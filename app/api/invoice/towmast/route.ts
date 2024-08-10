// import { NextRequest, NextResponse } from "next/server";

// import { fetchFromApi } from "@/lib/appClient";

// export async function POST(request: NextRequest) {

//     const page = await request.json()

//     const apiUrl = `http://localhost:5000/api/towmast?limit=1&&page=${Number(page)}&sort=-dispnum`;

//     const invoiceResponse = await fetchFromApi(apiUrl);

//     if ("error" in invoiceResponse) {
//         return NextResponse.json(invoiceResponse, { status: 400 });
//     }

//     return NextResponse.json(invoiceResponse.data, { status: invoiceResponse.status });
// }