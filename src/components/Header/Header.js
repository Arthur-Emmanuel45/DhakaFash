import React, {useState} from "react";
import {Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from '../SignUpPage/SignUpPage'


const Header  = () =>    
{
    const [isSearchClick, setIsSearchClick] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSearch = () => setIsSearchClick(!isSearchClick);
    const handleSearchOff = () => {
        setIsSearchClick(false);
    }
    const handleLogin = () => {
        setLogin(!isLogin);
        setIsSignUp(false)
    }
    const handleSignUp = () => {
        setIsSignUp(!isSignUp);
        setLogin(false)
    }
    return(
        <div id="header-container">
            <header>
                <div id="logo">
                    <img src={ require('../../Images/logo.png') } alt="Logo"></img>
                </div>
                <nav>
                    <Link to="/">HOME</Link>
                    <div id="mobile-nav">
                        <button id="nav-head">
                            SHOP<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                        </button>
                        <div id="mobile-nav-content">
                            <Link>WOMEN'S</Link>
                            <Link>MEN'S</Link>
                            <Link>KID'S</Link>
                        </div>
                    </div>
                    <Link>WOMEN'S</Link>
                    <Link>MEN'S</Link>
                    <Link>KID'S</Link>
                    <Link>PAGES</Link>
                    <Link>CONTACT</Link>
                    <FontAwesomeIcon id="heart-mobile" icon={faHeart}></FontAwesomeIcon>
                </nav>
                <div id="additional-nav">
                    <button className="login_button" onClick={handleLogin}>Login/Register</button>
                    <button id="search_button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </div>
                <div id="mobile-additional-menu">
                    <div id="bars-nav-head">
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </div>
                    <div id="mobile-additional-nav-content">
                        <Link>LOGIN/REGISTER</Link>
                        <Link>CONTACT</Link>
                        <div id="search-bar">SEARCH <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>
                    </div>
                </div>
            </header>
            <div className="login-container-wrapper">
                <div className={`search_dropdown ${isSearchClick ? 'show' : ''}`}>
                    <SearchBar onSearchOff={handleSearchOff}/>
                </div>
                <div className={`signup_login_dropdown ${isLogin ? 'show' : ''}`}>
                    <LoginPage onSignUpClick={handleSignUp} />
                </div>
                <div className={`signup_login_dropdown ${isSignUp ? 'show' : ''}`}>
                    <SignUpPage onSignInClick={handleLogin} />
                </div>
            </div>
        </div>
    )
}
export default Header;