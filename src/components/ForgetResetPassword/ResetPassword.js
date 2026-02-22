import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PasswordReset.css";

const ResetPassword = () => {
    const { uid, token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");

        const response = await fetch(
            `http://127.0.0.1:8000/api/auth/password-reset-confirm/${uid}/${token}/`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password })
            }
        );

        if (response.ok) {
            setMessage("Password reset successful! Redirecting to login...");

            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } else {
            setError("Invalid or expired reset link.");
        }
    };

    return (
        <div className="password_container">
            <div className='password_details_container'>
                <h3>Reset Password</h3>
                <img src={require('../../Images/f_p_image.png')} alt='forget password img' />
                <p>New password shoud not be the same as the old password</p>
                <form onSubmit={handleReset}>
                    <input type="password" placeholder="New password" onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" placeholder="Confirm new password" onChange={(e) => setConfirmPassword(e.target.value)} required />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Set New Password</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
            
        </div>
        
    );
};

export default ResetPassword;
