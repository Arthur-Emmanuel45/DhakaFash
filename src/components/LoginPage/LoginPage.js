import React from 'react'
import "../SignUpLoginPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginPage = ({onSignUpClick}) => {

  return (
    <div className='signup_login_containter'>
        <div className='login_left_side'>
            <img className='signupLogin_logo' src={ require('../../Images/logo.png') } alt='logo-img'/>
            <h1>Sign in to DhakaFash</h1>
            <div className='socials'>
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <p>or use your email and password</p>
            <form>
                <FontAwesomeIcon icon={faEnvelope} /><input type='email' placeholder='Email' />
                <FontAwesomeIcon icon={faLock} /><input type='email' placeholder='Password' />
            </form>
            <p className='forget_password'>Forgot your password</p>
            <button>Sign in</button>
        </div>
        <div className='login_right_side'>
            <div className='login_text'>
                <h2>Hello, Friend</h2>
                <p>Enter your credentials and start shopping with us</p>
                <p>---Don't have an account signup below---</p>
                <button onClick={onSignUpClick}>Sign up</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage