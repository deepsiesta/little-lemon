import React from "react";

import Banner from "./Banner.js";
import Card from "./Card.js";
import "./Home.css"

const Home = () => {
    const dummyRecipes = [
        { "title": "Pizza", "description": "lorem ipsum sic dolor amet", "price": 4.20 },
        { "title": "Salad", "description": "Lorem ipsum sic dolor amet", "price": 6.90 }
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
