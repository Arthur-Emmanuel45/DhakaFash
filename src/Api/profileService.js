import { authFetch } from "./api";

export const getProfile = async () => {
    const response = await authFetch(
        "http://127.0.0.1:8000/api/auth/profile/"
    );

    const data = await response.json();

    if (!res.ok) {
        throw data;
    }

    return data
};
