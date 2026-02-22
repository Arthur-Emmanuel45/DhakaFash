const API_URL = "http://127.0.0.1:8000/api/auth/";
const BASE_URL = "http://127.0.0.1:8000/api";


export const loginApiCall = async (username, password) => {
    const res = await fetch(`${API_URL}login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (!res.ok) {
        throw data;
    }

    return data
};

export const signupApiCall = async (username, email, password) => {
    const res = await fetch(`${API_URL}signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
        throw data;
    }

    return data;
};

export const fetchProducts = async () => {
    const res = await fetch(`${BASE_URL}/products/`);

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
};

