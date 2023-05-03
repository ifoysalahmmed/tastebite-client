import React from "react";

const AdditionalSection = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Classic Spaghetti Carbonara",
      description:
        "This classic Italian dish is made with bacon, eggs, and Parmesan cheese, and is sure to become a family favorite.",
      imageSrc: "https://bing.com/th?id=OSK.d8dd312ed2e104eba812f12dca8088b8",
    },
    {
      id: 2,
      title: "Lemon Garlic Chicken Skewers",
      description:
        "These tender and flavorful chicken skewers are perfect for summertime grilling and outdoor cookouts.",
      imageSrc: "https://bing.com/th?id=OSK.a8e8c00caab2e53fe6d480b2a69ab836",
    },
    {
      id: 3,
      title: "Watermelon Feta Salad",
      description:
        "This refreshing salad is the perfect accompaniment to any summer meal.",
      imageSrc: "https://bing.com/th?id=OSK.9eaa493178fa1c1edb04afe2e36cffc1",
    },
    {
      id: 4,
      title: "Pumpkin Spice Latte",
      description:
        "This fall favorite is easy to make at home, and can be customized with your choice of milk and sweetener.",
      imageSrc: "https://bing.com/th?id=OSK.3bb265b959fc599d896a5ae755535a06",
    },
  ];

  return (
    <>
      {featuredRecipes.map((recipe, index) => (
        <div className="card card-compact w-full bg-base-100 shadow-2xl p-4" key={index}>
          <figure>
            <img src={recipe.imageSrc} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.title}</h2>
            <p>{recipe.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdditionalSection;
