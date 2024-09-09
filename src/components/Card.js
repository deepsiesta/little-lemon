import React from "react";

import "./Card.css"

const Card = (props) => {
    const formattedPrice = props.price.toFixed(2);

    return (
        <div className="card-recipe">
            <h3>{props.title}</h3>
            <img src={props.image} alt={props.title} />
            <div className="recipe-desc">{props.description}</div>
            <div className="recipe-price">${formattedPrice}</div>
        </div>
    )
}

export default Card;
