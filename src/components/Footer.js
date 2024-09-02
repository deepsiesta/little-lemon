import React from "react";
import footerLogo from "../assets/footer_logo.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <img src={footerLogo} />
            <p>© Little Lemon 2024</p>
        </footer>
    )
}

export default Footer;
