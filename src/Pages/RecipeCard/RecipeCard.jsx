import React from "react";

const RecipeCard = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;

  return (
    <div className="card w-96 bg-cyan-200 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>Ingredients: {ingredients}</p>
        <p>Cooking Method: {cooking_method}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
