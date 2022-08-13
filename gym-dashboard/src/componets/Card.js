import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Card = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full rounded-md  shadow-md relative p-4 border-2 ${
        darkMode ? "bg-gray-800" : "bg-white "
      } dark:border-gray-700`}
    >
      
    
      {children}
    </div>
  );
};

export default Card;
