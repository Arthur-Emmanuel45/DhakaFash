import React, {useState} from 'react';
import './PasswordReset.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    

    const handleForgetPasswordSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://127.0.0.1:8000/api/auth/password-reset/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        setMessage("If the email exists, a reset link was sent.");
    };

    return (
        <div className='password_container'>
            <div className='password_details_container'>
                <div className='f_p_image'>
                    <h3>Forget Password</h3>
                    <img src={require('../../Images/f_p_image.png')} alt='forget password img' />
                    <p>Please enter your email address to receive a reset password link</p>
                </div>
                <form onSubmit={handleForgetPasswordSubmit}>
                    <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    <button type="submit">Reset Password</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
     
        </div>
       
    );
}

export default ForgotPassword;
