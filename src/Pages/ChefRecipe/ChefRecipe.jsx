import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCategories from "../Home/FoodCategories";
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
      <div className="grid grid-flow-col">
        <div className="hidden md:block col-span-3 mr-4 px-2 py-4 bg-slate-600 rounded-lg">
          <p className="text-center font-bold text-lg">Course Category</p>
          <ul className="mt-4 pl-8 list-disc">
            <FoodCategories></FoodCategories>
          </ul>
        </div>

        <div className="col-span-9 px-2 py-4 bg-slate-600 rounded-lg">
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img className="p-8 h-80 w-80" src={img} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{name}</h2>
              <p>{biography}</p>
              <p>Likes: {likes}</p>
              <p>No of Recipes: {no_recipes}</p>
              <p>Experiences: {experience} Years</p>
            </div>
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
