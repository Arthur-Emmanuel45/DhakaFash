import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar";
import { useAuth } from "../../Context/AuthContext";
import { useCart } from "../../Context/CartContext";

const Header  = () =>    
{
    const [isSearchClick, setIsSearchClick] = useState(false);

    const handleSearch = () => setIsSearchClick(!isSearchClick);
    const handleSearchOff = () => setIsSearchClick(false);

    const { isAuthenticated, username, logout } = useAuth();
    const initials = username ? username.charAt(0).toUpperCase() : "";

    const [showMenu, setShowMenu] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const { cartCount } = useCart()

    return(
        <div className="header-container">
            <header>
                {mobileOpen && (
                    <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)}>
                        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
                            <Link to="/women">Women</Link>
                            <Link to="/men">Men</Link>
                            <Link to="/kids">Kids</Link>
                            <Link to="/contact">Contact</Link>

                            <hr />

                            {!isAuthenticated ? (
                                <Link to="/login" onClick={() => setMobileOpen(false)}>
                                    Login / Register
                                </Link>
                            ) : (
                                <>
                                    <p className="mobile-username">{username}</p>
                                    <Link to="/profile">Profile</Link>
                                    <button onClick={logout}>Logout</button>
                                </>
                            )}
                        </div>
                    </div>
                )}

                <div className="logo">
                    <Link to="/"><img src={ require('../../Images/logo.png') } alt="Logo"></img></Link>
                </div>

                <nav>
                    <Link to="/">HOME</Link>
                    <Link>WOMEN'S</Link>
                    <Link>MEN'S</Link>
                    <Link>KID'S</Link>
                    <Link>PAGES</Link>
                    <Link>CONTACT</Link>
                </nav>
                <div className="additional-nav">
                    {!isAuthenticated ? (
                        <Link to="/login" className="login_button">Login/Register</Link>
                    ) : (
                        <div className="user-menu">
                            <div className="avatar" onClick={() => setShowMenu(!showMenu)}>
                                {initials}
                            </div>

                            {showMenu && (
                                <div className="dropdown">
                                    <div className="dropdown-display">
                                        <p className="username">{username}</p>
                                        <Link to="/profile">Profile</Link>
                                        <button onClick={logout}>Logout</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <button className="search_button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                    <Link to="/cart" className="cart_icon">
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        {cartCount > 0 && <span className="badge">{cartCount}</span>}
                    </Link>
                </div>

                <div className="mobile-additional-menu">
                    <button
                        className="bars-nav-head"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <button className="search_button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                    <Link to="/cart" className="cart_icon">
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        {cartCount > 0 && <span className="badge">{cartCount}</span>}
                    </Link>
                </div>

            </header>
            <div className="login-container-wrapper">
                <div className={`search_dropdown ${isSearchClick ? 'show' : ''}`}>
                    <SearchBar onSearchOff={handleSearchOff}/>
                </div>
            </div>
        </div>
    )
}
export default Header;