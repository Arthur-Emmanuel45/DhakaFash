import React, {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const { uid, token } = useParams();
    const navigate = useNavigate();

    const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/auth/verify-email/${uid}/${token}/`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setStatus("success");
                    setMessage(data.message);

                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                } else {
                    setStatus("error");
                    setMessage(data.error || "Verification failed or expired.");
                }
            
            });
    }, [uid, token, navigate]);

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            {status === "loading" && <p> Verifying your email...</p>}
            {status === "success" && <p style={{ color: "green" }}> {message}</p>}
            {status === "error" && <p style={{ color: "red" }}> {message}</p>}
        </div>
    );
};

export default VerifyEmail;
