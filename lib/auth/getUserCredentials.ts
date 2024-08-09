import { NextRequest } from "next/server";
import Localstorage, { get, set } from 'local-storage'

export type UserCredentials = {
    refreshToken: string;
    accessToken: string;
    tokenExpires: number;
    token: string;
    exp: number
};

export function getUserCredentials(req: NextRequest): UserCredentials | null {
    // getting the tookes from the cookie
    let tokens = req.cookies.get('tokens')?.value;
    if (!tokens) return null;
    const credentials = JSON.parse(tokens) as UserCredentials;
    return credentials
}