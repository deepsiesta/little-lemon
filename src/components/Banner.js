import React from "react";
import BannerPicture from "../assets/footer_logo.png"
import "./Banner.css"
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <header>
            <img src={BannerPicture} />
            <div>
                <p className="banner-info">
                    A family-owned Mediterranean restaurant in Chicago, focused on
                    traditional recipes served with a modern twist.
                </p>
                <Link to="/book" className="banner-button">
                    Reserve a table
                </Link>
            </div>
        </header>
    )
}

export default Banner;
