import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { toast } from "react-toastify";

const ChefRecipe = () => {
  const chef = useLoaderData();

  const [favorite, setFavorite] = useState(false);

  const { img, name, biography, likes, no_recipes, experience, recipes } = chef;

  const handleFavorite = () => {
    setFavorite(true);
    toast.success("Recipe successfully added to Favorite");
  };

  return (
    <div className="my-container">
      <div className="px-2 py-4 bg-slate-600 rounded-lg">
        <div className="card card-compact w-full bg-cyan-200 shadow-xl">
          <figure>
            <img className="p-8 h-80 w-80" src={img} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{biography}</p>
            <p>Likes: {likes}</p>
            <p>No of Recipes: {no_recipes}</p>
            <p>Experiences: {experience} Years</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe}></RecipeCard>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleFavorite}
          className="btn btn-warning"
          disabled={favorite}
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default ChefRecipe;
