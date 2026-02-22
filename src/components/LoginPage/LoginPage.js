import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../SignUpLoginPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { loginApiCall } from '../../Api/apiService'
import { useAuth } from '../../Context/AuthContext'
import { GoogleLogin } from "@react-oauth/google";


const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  
   

    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginApiCall(username, password);
            login(data); 

            alert("Login successful!");
            navigate("/")

        } catch (err) {
            if (err.detail) {
                setError(err.detail);
            } else {
                setError("Invalid username or password");
            }
        }
    };

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/auth/google/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token: credentialResponse.credential,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Google login failed");
            }

            login(data)

            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
    <div className='signup_login_containter'>
        <div className='login_left_side'>
            <img className='signupLogin_logo' src={ require('../../Images/logo.png') } alt='logo-img'/>
            <h1>Sign in to DhakaFash</h1>
            <div className='socials'>
                <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={() => setError("Google login failed")}
                    width="100%"
                />
            </div>
            <p>or use your username and password</p>
            <form onSubmit={handleLogin}>
                <div className='group_input'>
                    <input type='text' value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                    <FontAwesomeIcon icon={faUserCircle} className='input_icon' />
                </div>
                <div className='group_input'>
                    <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                    <FontAwesomeIcon icon={faLock} className='input_icon' />
                </div>
                {error && <p className='error_promt'>{error}</p>}
                <button type='submit'>Sign in</button>
                <Link to={"/forgot-password"} className='forget_password'>-- Forgot your password --</Link>
            </form>
        </div>
        <div className='login_right_side'>
            <div className='login_text'>
                <h2>Welcome Back!</h2>
                <p>To keep connection with us please login with your credentials</p>
                <p>---Don't have an account signup below---</p>
                <Link className='routeLoginSignup' to="/signup">Sign Up</Link>
            </div>
        </div>
    </div>
    )
    }

export default LoginPage 