const API_BASE = "http://127.0.0.1:8000/api/auth/";

export const authFetch = async (url, options = {}) => {
    let access = localStorage.getItem("access");

    let response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${access}`
        }
    });

  // If token expired
    if (response.status === 401) {
        const refresh = localStorage.getItem("refresh");

        const refreshResponse = await fetch(`${API_BASE}token/refresh/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh })
        });

        const data = await refreshResponse.json();
        localStorage.setItem("access", data.access);

        // Retry original request
        response = await fetch(url, {
            ...options,
            headers: {
            ...options.headers,
            Authorization: `Bearer ${data.access}`
            }
        });
    }

    return response;
};