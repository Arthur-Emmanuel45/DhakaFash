import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTiktok, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div>
            <footer>
                <div id="footer-container">
                    <div className="footer-detiles">
                        <div className="footer-title">QUICK LINKS</div>
                        <Link>About</Link>
                        <Link>Contact</Link>
                        <Link>Blogs</Link>
                        <Link>FAQ</Link>
                    </div>
                    <div className="footer-detiles">
                        <div className="footer-title">ACCOUNT</div>
                        <Link>My Account</Link>
                        <Link>Order Tracking</Link>
                        <Link>Checkout</Link>
                        <Link>Wishlist</Link>
                    </div>
                    <div className="footer-detiles socials">
                        <div className="footer-title news-letter">NEWSLETTER</div>
                        <input placeholder="Email" type="Email" />
                        <button id="button">SUBSCRIBE</button>
                        <div id="socials">
                            <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div id="footer-company-detiles">
                        <img src="Images/logo.png" alt="logo"></img>
                        <p>Lerom ispan avac le pronoms dos less insomic lesh ava seed lopinums nodelal anack</p>
                    </div>
                </div>
                <hr></hr>
                <p id="copy-right">Copyright © 2024 All rights reserved | Programe By Dhaka Art</p>
            </footer>
        </div>
    )
}
export default Footer;