import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const NavigationLayaout = () => {
  return (
    <>
      <Navigation />
      <Outlet />

    </>
  );
};

export default NavigationLayaout;
