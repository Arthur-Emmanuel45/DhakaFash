import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header  = () => {
    return(
        <div id="header-container">
            <header>
                <div id="logo">
                    <img src="Images/logo.png" alt="Logo"></img>
                </div>
                <nav>
                    <Link>HOME</Link>
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
                <div id="additional-nav">
                    <Link>Login/Register</Link>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </div>
            </header>       
        </div>
    )
}
export default Header;