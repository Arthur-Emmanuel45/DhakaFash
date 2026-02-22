import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../SignUpLoginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faUserCircle  } from '@fortawesome/free-solid-svg-icons'
import { signupApiCall } from '../../Api/apiService'
import { GoogleLogin } from '@react-oauth/google';

const SignUpPage = ({onAuthSuccess}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
           await signupApiCall(name, email, password);

            setMessage("Account created successfully!");
            onAuthSuccess?.();
            localStorage.setItem("pending_verification_email", email);
            setTimeout(() => {
                navigate("/verify-email-sent");
            }, 1000)

        } catch (error) {
            console.error("Signup error:", error);

            if (error.username) {
                setMessage(error.username[0]);
            } else if (error.email) {
                setMessage(error.email[0]);
            } else if (error.password) {
                setMessage(error.password[0]);
            } else {
                setMessage("Signup failed. Please try again.");
            }
        }
    };

    const handleGoogleSignup = async (googleToken) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/auth/google/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: googleToken }),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.error || "Google signup failed");
                return;
            }

            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
            localStorage.setItem("username", data.username);

            onAuthSuccess();
            navigate("/");
        } catch {
            setMessage("Google signup failed");
        }
    };


    return (
        <div className='signup_login_containter'>
            <div className='left_side'>
                <div  className='background_overlay'>
                    <img className='signupLogin_logo' src={ require('../../Images/logo.png') } alt='logo-img'/>
                    <div className='signup_text'>
                        <h1>Hello, Friend</h1>
                        <p>Enter your credentials and start shopping with us</p>
                        <p> ---Already have an account sign in below---</p>
                        <Link className='routeLoginSignup' to="/login">Sign In</Link>
                    </div>
                </div>
            </div>
            <div className='right_side'>
                <h2>Create Account</h2>
                <div className='socials'>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            handleGoogleSignup(credentialResponse.credential);
                        }}
                        onError={() => {
                            setMessage("Google signup failed");
                        }}
                    />
                </div>
                <p>or register with your email</p>
                <form onSubmit={handleSignup}>
                    <div className='group_input'>
                        <input type='text' value={name} placeholder='Username' onChange={(e) => setName(e.target.value)} required />
                        <FontAwesomeIcon icon={faUserCircle} className='input_icon' />
                    </div>
                    <div className='group_input'>
                        <input type= "password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                        <FontAwesomeIcon icon={faLock} className='input_icon' />
                    </div>
                    <div className='group_input'>
                        <input type='email' value={email} placeholder='Email' onChange={(e => setEmail(e.target.value))} required />
                        <FontAwesomeIcon icon={faEnvelope} className='input_icon' />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
                {message && <p className='error_prompt'>{message}</p>}
            </div>
        </div>
    )
}

export default SignUpPage