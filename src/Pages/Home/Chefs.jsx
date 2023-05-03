import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://tastebite-server-side.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="md:grid grid-cols-2 gap-4 p-4">
      {chefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef}></ChefCard>
      ))}
    </div>
  );
};

export default Chefs;
