import { Outlet } from "react-router-dom";
import React from "react";
import Navigation from "./Navigation";
import Header from "../Header";

const NavigationLayaout = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Outlet />
    </>
  );
};

export default NavigationLayaout;
