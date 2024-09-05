import React from "react";
import { Link } from "react-router-dom";

import './ConfirmedBooking.css'

const ConfirmedBooking = () => {
    return (
        <main>
            <h2>Reservation successful</h2>
            <Link className="return-button" to={"/"}>Go back</Link>
        </main>
    )
}

export default ConfirmedBooking;
