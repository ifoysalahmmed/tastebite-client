import React from "react";
import Lottie from "lottie-react";
import cooking from "../../assets/cooking.json";
import Chefs from "./Chefs";
import AdditionalSection from "./AdditionalSection";

const Home = () => {
  return (
    <div className="my-container">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="banner-text">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
            Are you <br className="hidden md:block" /> Ready{" "}
            <span className="inline-block text-blue-400">for food?</span>
          </h2>
          <p className="text-base md:text-lg mb-4">
            Explore Delicious Recipes and Cooking Tips Find inspiration for your
            next meal with our collection of mouth-watering recipes. From quick
            and easy dinners to show-stopping desserts, we have something for
            every taste and occasion. Our expert tips and tricks will help you
            become a better cook in no time. Start cooking today!
          </p>
        </div>
        <div className="mb-8 sm:mb-0">
          <div className="w-full lg:w-4/5 lg:ml-auto">
            <Lottie animationData={cooking} loop={true} />
          </div>
        </div>
      </div>

      <div className="my-8">
        <div className=" grid grid-flow-col">
          <div className="px-2 py-4 bg-teal-600 rounded-lg">
            <Chefs></Chefs>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="uppercase text-center text-3xl text-cyan-400 font-semibold">
          Featured Recipes
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <AdditionalSection></AdditionalSection>
        </div>
      </div>

      <div className="my-8">
        <h2 className="uppercase text-center text-3xl text-cyan-400 font-semibold">
          Gallery
        </h2>
        <div class="mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 md:flex flex-wrap md:-m-2">
            <div class="md:flex md:w-1/2 flex-wrap">
              <div class="md:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f55b6c139249241.622c1daa472b0.jpg"
                />
              </div>
              <div class="md:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1633383718081-22ac93e3db65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80"
                />
              </div>
            </div>
            <div class="md:flex md:w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1625398407796-82650a8c135f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                />
              </div>
              <div class="md:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
              </div>
              <div class="md:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
