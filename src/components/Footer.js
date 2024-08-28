import React from "react";
import footerLogo from "../assets/footer_logo.png"

const Footer = () => {
    return (
        <footer>
            <div><img src={footerLogo} /></div>
            <div>
                <p>© Little Lemon 2024</p>
            </div>
        </footer>
    )
}

export default Footer;
