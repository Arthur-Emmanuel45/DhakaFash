import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    const navigate = useNavigate();

    // Load auth from localStorage on refresh
    useEffect(() => {
        const token = localStorage.getItem("access");
        const storedUsername = localStorage.getItem("username");

        if (token && storedUsername) {
            setIsAuthenticated(true);
            setUsername(storedUsername);
        }
    }, []);

    const login = ({ access, refresh, username }) => {
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        localStorage.setItem("username", username);

        setIsAuthenticated(true);
        setUsername(username);
    };

    const logout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        setUsername(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider
        value={{
            isAuthenticated,
            username,
            login,
            logout,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);