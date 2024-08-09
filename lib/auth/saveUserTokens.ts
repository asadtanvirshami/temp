// Import the 'js-cookie' library to handle cookies
import Cookie from 'js-cookie';

export type Tokens = {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

// Define a function named 'saveUserTokens' that takes a 'Tokens' object as a parameter
export default function saveUserTokens(
    credentials: Tokens,
) {
    // Convert the 'credentials' object to a JSON string
    const data = JSON.stringify(credentials);

    // Set a cookie named 'user' with the JSON stringified 'credentials' data
    Cookie.set('user', data);
}