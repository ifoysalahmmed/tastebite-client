import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, img, name, experience, no_recipes, likes } = chef;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl mb-4 md:mb-0">
      <figure>
        <img className="w-full h-80" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experiences: {experience} Years</p>
        <p>No of Recipes: {no_recipes}</p>
        <p>Likes: {likes}</p>
        <div className="card-actions justify-end">
          <Link to={`/chef/${id}`}>
            <button className="btn btn-primary">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
