import React from 'react'
import '../SignUpLoginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faLock, faUserCircle  } from '@fortawesome/free-solid-svg-icons'

const SignUpPage = ({onSignInClick}) => {
  return (
    <div className='signup_login_containter'>
        <div className='left_side'>
            <div  className='background_overlay'>
                <img className='signupLogin_logo' src={ require('../../Images/logo.png') } alt='logo-img'/>
                <div className='signup_text'>
                    <h1>Welcome Back!</h1>
                    <p>To keep connection with us please login with your credentials</p>
                    <p> ---Don't haved an account sign in below---</p>
                    <button onClick={onSignInClick}>Sign In</button>
                </div>
            </div>
        </div>
        <div className='right_side'>
            <h2>Create Account</h2>
            <div className='socials'>
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <p>or register with your email</p>
            <form>
                <FontAwesomeIcon icon={faUserCircle} /><input type='text' placeholder='Name'></input>
                <FontAwesomeIcon icon={faEnvelope} /><input type='email' placeholder='Email'></input>
                <FontAwesomeIcon icon={faLock} /><input type='password' placeholder='Password'></input>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage