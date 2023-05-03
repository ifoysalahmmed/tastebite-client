import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://tastebite-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <li key={category.id} className=" mt-2">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default FoodCategories;
