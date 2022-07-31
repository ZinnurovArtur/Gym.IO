import React from "react";
import Card from "../Card";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";

const User = () => {
  const { darkMode } = useContext(ThemeContext);
  const { currentUser } = useAuth();
  
  return (
    <div
      className={`h-screen w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr relative gap-6 p-10 font-quicksand ${
        darkMode ? "bg-midnight " : "bg-neutral-100"
      }`}
    >
      <div className="md:col-span-2 row-span-4">
      {currentUser?.email}
        <Card />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Card />
      </div>
    </div>
  );
};

export default User;
