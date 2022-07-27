import { Outlet } from "react-router-dom";
import React from "react";
import Navigation from "./Navigation";
import Header from "../Header";
import Themecolon from "../Themecolon";

const NavigationLayaout = () => {
  return (
    <>
      <Navigation />
     
      <Outlet />

    </>
  );
};

export default NavigationLayaout;
