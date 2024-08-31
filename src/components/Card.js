import React from "react";

import "./Card.css"

const Card = (props) => {
    return (
        <div className="card-recipe">
            <h3>{props.title}</h3>
            <div className="recipe-desc">{props.description}</div>
            <div className="recipe-price">{props.price}</div>
        </div>
    )
}

export default Card;
