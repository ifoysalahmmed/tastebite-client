import React from "react";
import { Link } from "react-router-dom";

const InvalidPage = () => {
  return (
    <div className="mx-20 my-10">
      <div className=" flex justify-center">
        <img
          className=" w-2/3 h-80 shadow-lg"
          src="https://www.seekpng.com/png/detail/212-2123989_404-icon-404-not-found-free.png"
          alt=""
        />
      </div>
      <div className="my-10">
        <p className=" text-center text-2xl text-blue-800 font-serif font-extrabold">
          This Page Isn't Available
        </p>
        <p className=" text-center text-sm text-black font-serif font-bold">
          The link may be broken, or the page may have been removed. Check to
          see if the link you're trying to open is correct.
        </p>
        <button className="btn btn-warning">
          <Link to="/">Go back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default InvalidPage;
