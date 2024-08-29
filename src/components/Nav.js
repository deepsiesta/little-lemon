import React from "react";
import "./Nav.css"
import headerLogo from "../assets/header_logo.png"

const Nav = () => {
    return (
        <nav>
            <img src={headerLogo} />
            <ul>
                <li><a>Home</a></li>
                <li><a>Menu</a></li>
                <li><a>Book</a></li>
                <li><a>About</a></li>
            </ul>
        </nav>
    )
}

export default Nav;
