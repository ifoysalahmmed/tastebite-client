import React, { useState } from "react";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);

  const { recipe_name, ingredients, cooking_method, rating } = recipe;

  const handleFavorite = () => {
    setFavorite(true);
    toast.success("Recipe successfully added to Favorite");
  };

  return (
    <div className="card w-96 bg-cyan-200 shadow-2xl">
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>Ingredients: {ingredients}</p>
        <p>Cooking Method: {cooking_method}</p>
        <p>Rating: {rating}</p>
        <div className="text-center mt-3">
          <button
            onClick={handleFavorite}
            className="btn btn-warning"
            disabled={favorite}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
