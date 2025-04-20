import { LayoutRouteProps, Outlet } from "react-router-dom";
import React, { FC } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const DefaultLayout: FC<LayoutRouteProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen top-0">
      <Header />
      <div className="content w-full flex justify-center mt-16 ">
        <div className=" max-w-7xl px-4 w-4/5">{children || <Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
