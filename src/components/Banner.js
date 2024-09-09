import React from "react";
import BannerPicture from "../assets/restaurant.jpg"
import "./Banner.css"
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <header>
            <img src={BannerPicture} alt="The Little Lemon restaurant" />
            <div>
                <h2 className="banner-info">
                    A family-owned Mediterranean restaurant in Chicago, focused on
                    traditional recipes served with a modern twist.
                </h2>
                <Link to="/book" className="banner-button">
                    Reserve a table
                </Link>
            </div>
        </header>
    )
}

export default Banner;
