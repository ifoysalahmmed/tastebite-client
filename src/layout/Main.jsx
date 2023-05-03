import React from "react";
import Header from "../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-lime-200">
      <Header></Header>
      <div className="min-h-[calc(100vh-134px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
