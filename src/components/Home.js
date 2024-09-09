import React from "react";

import Banner from "./Banner.js";
import Card from "./Card.js";
import "./Home.css"
import Pizza from "../assets/pizza.jpg"
import Salad from "../assets/salad.jpg"

const Home = () => {
    const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    const dummyRecipes = [
        { "title": "Pizza", "image": Pizza, "description": desc, "price": 4.20 },
        { "title": "Salad", "image": Salad, "description": desc, "price": 6.90 }
    ]
    let recipeCards = dummyRecipes.map(recipe => <Card key={recipe.name} {...recipe} />);
    return (
        <main>
            <Banner />
            <h2>Popular recipes</h2>
            <div className="recipe-list">{recipeCards}</div>
        </main>
    )
}

export default Home;
