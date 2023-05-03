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
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Are you <br className="hidden md:block" /> Ready{" "}
            <span className="inline-block text-blue-400">for food?</span>
          </h2>
          <p className="text-base text-white md:text-lg mb-4">
            Explore Delicious Recipes and Cooking Tips Find inspiration for your
            next meal with our collection of mouth-watering recipes. From quick
            and easy dinners to show-stopping desserts, we have something for
            every taste and occasion. Our expert tips and tricks will help you
            become a better cook in no time. Start cooking today!
          </p>
          <button className="btn btn-info">Call to Action</button>
        </div>
        <div className="relative">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
            <Lottie animationData={cooking} loop={true} />
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className=" grid grid-flow-col">
          <div className="px-2 py-4 bg-slate-600 rounded-lg">
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
                  src="https://th.bing.com/th/id/OIP.ZF7BYYIrCTHDnGdFQC3XIwHaEo?pid=ImgDet&rs=1"
                />
              </div>
              <div class="md:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.pinimg.com/originals/cc/bc/ca/ccbcca4711c079d95eef2ef2fb3689ca.jpg"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://th.bing.com/th/id/R.b09dae1d6da8bf6b79d07bcdd79b0a2c?rik=Pl%2bgaDucPKO21w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-1zHcDYt10pI%2fUM1bnKSbaBI%2fAAAAAAAAIcQ%2fNIRixLTvsFs%2fs1600%2ffood.jpg&ehk=oQg7uqh%2fP8eNEzLA60vfLJhFX77%2f46zEwXxfnZkLuW4%3d&risl=&pid=ImgRaw&r=0"
                />
              </div>
            </div>
            <div class="md:flex md:w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://cdn.healthnwell.com/healthnwell/wp-content/uploads/2018/04/8bef1965-2404-4929-ab29-1fdb1eb3b69f.jpg"
                />
              </div>
              <div class="md:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.verywellfit.com/thmb/WY_NtJB9XE1wZTaKbk2syDPITUc=/3865x2576/filters:fill(FFDB5D,1)/different-types-of-food-on-rustic-wooden-table-861188910-5bd1d6f846e0fb00519d99f9.jpg"
                />
              </div>
              <div class="md:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/gallery_promo_image/Top%2010%20August%20Recipes_Dessert%20Recipes.jpg"
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
