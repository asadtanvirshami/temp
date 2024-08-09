// lib/apiClient.ts
import { NextResponse } from "next/server";

export const fetchFromApi = async (url: string, method: string = "GET", body?: any) => {
    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: method === "POST" || method === "PUT" ? JSON.stringify(body) : undefined,
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return { data, status: response.status };
    } catch (error) {
        return { error: "An error occurred while fetching data.", status: 500 };
    }
};
