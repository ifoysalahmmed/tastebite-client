import React from "react";
import FoodCategories from "../Home/FoodCategories";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../Home/ChefCard";

const CategoryFood = () => {
  const categoryFoods = useLoaderData();

  return (
    <div className="my-container">
      <div className=" grid grid-flow-col">
        <div className=" hidden md:block col-span-3 mr-4 px-2 py-4 bg-slate-600 rounded-lg">
          <p className=" text-center font-bold text-lg">Food Category</p>
          <ul className=" mt-4 pl-8 list-disc">
            <FoodCategories></FoodCategories>
          </ul>
        </div>

        <div className="col-span-9 px-2 py-4 bg-slate-600 rounded-lg">
          <div className="md:grid grid-cols-2 gap-4 p-4">
            {categoryFoods.map((chef) => (
              <ChefCard key={chef.id} chef={chef}></ChefCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFood;
