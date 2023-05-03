import React from "react";

const AdditionalSection = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Recheado Masala Fish",
      description:
        "Recheado masala fish is a Goan classic. It can be prepared easily on your barbecue.",
      imageSrc:
        "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
    },
    {
      id: 2,
      title: "Nutty Chicken Curry",
      description:
        "Nutty Chicken curry from the Indian subcontinent typically features chicken stewed in a tomato-based sauce seasoned with aromatic spices. ",
      imageSrc:
        "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
    },
    {
      id: 3,
      title: "Kidney Bean Curry",
      description:
        "The kidney bean is a variety of the common bean, so named because of its kidney-like shape and its color. The optimum moisture range is 12–14%. The color of kidney beans ranges all the way from very light red to very dark, almost purple.",
      imageSrc:
        "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
    },
    {
      id: 4,
      title: "Smoked Haddock Kedgeree",
      description:
        "Smoked Haddock is fresh, filleted Haddock that has been smoked over oak and beech wood in a special smoker oven. This provides the Haddock fillet with that irresistible smoky flavour and subtle sweetness. Smoked Haddock can be the foundation of many delicious dishes.",
      imageSrc: "https://www.themealdb.com/images/media/meals/1550441275.jpg",
    },
  ];

  return (
    <>
      {featuredRecipes.map((recipe, index) => (
        <div
          className="card card-compact w-full bg-green-200 shadow-2xl p-4"
          key={index}
        >
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
