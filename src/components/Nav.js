import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
import headerLogo from "../assets/header_logo.png"

const Nav = () => {
    return (
        <nav>
            <img src={headerLogo} alt="Little Lemon" />
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>Menu</li></Link>
                <Link to="/book"><li>Book</li></Link>
                <Link to="/"><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;
