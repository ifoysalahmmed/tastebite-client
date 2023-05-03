import React, { useEffect, useState } from "react";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://tastebite-server-side.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="md:grid grid-cols-3 gap-4 p-4">
      {chefs.map((chef) => (
        <p>{chef.name}</p>
      ))}
    </div>
  );
};

export default Chefs;
