import React from "react";
import footerLogo from "../assets/footer_logo.png"

const Footer = () => {
    return (
        <footer>
            <img src={footerLogo} />
            <div>
                © Little Lemon 2024
            </div>
        </footer>
    )
}

export default Footer;
