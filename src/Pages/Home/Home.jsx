import React from "react";
import Lottie from "lottie-react";
import cooking from "../../assets/cooking.json";
import FoodCategories from "./FoodCategories";

const Home = () => {
  return (
    <div className="my-container">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="banner-text">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Are you <br className="hidden md:block" /> Ready{" "}
            <span className="inline-block text-blue-400">for food?</span>
          </h2>
          <p className="text-base text-white md:text-lg mb-4">
            Explore Delicious Recipes and Cooking Tips Find <br /> inspiration
            for your next meal with our collection of mouth-watering recipes.
            From quick and easy dinners to show-stopping desserts, we have
            something for every taste and occasion. Our expert tips and tricks
            will help you become a better cook in no time. Start cooking today!
          </p>
          <button className="btn btn-info">Call to Action</button>
        </div>
        <div className="relative  ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
            <Lottie animationData={cooking} loop={true} />
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className=" grid grid-flow-col">
          <div className=" hidden md:block col-span-3 mr-4 px-2 py-4 bg-slate-600 rounded-lg">
            <p className=" text-center font-bold text-lg">Food Category</p>
            <ul className=" mt-4 pl-8 list-disc">
              <FoodCategories></FoodCategories>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
