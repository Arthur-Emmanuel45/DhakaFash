import React from 'react';
import './VerifyEmailSent.css';

const VerifyEmailSent = () => {
    const email = localStorage.getItem("pending_verification_email");

    const handleResend = async () => {
        if(!email){
            alert("Email not found. Please sign up again")
            return
        }

        const res = await fetch("http://127.0.0.1:8000/api/auth/resend-verification/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        });

        const data = await res.json();
        alert(data.message);
    };

    return (
        <div className="email_sent_container">
            <h2>Verify your email ...</h2>
            <p>
                We've sent a verification link to your address <strong> {email} </strong>.
                <br />
                Please check your inbox and click the link to activate your account.
            </p>
            <p className="check_spam">
                Didn't get the email? Check your spam folder.
                <br />
                or 
            </p>
            <button className="resend_email_button" onClick={handleResend}>Resend verification email</button>
        </div> 
    );
}

export default VerifyEmailSent;
