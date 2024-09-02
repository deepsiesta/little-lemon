import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <>
            <h2>Reservation successful</h2>
            <Link to={"/"}>Go back</Link>
        </>
    )
}

export default Success;
