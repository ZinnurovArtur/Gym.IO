import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Themecolon = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode);
    };

  return (
    <button className={`rounded-lg border-1 border-neutral-200 p-2 absolute right-8 xl:right-32 shadow-lg ${darkMode ? "border-neutral-100" : "border-neutral-400" }`} onClick = {toggleDarkMode}>{darkMode ? <span className="text-white">White</span>: <span className="text-white">Dark</span> }</button>
  ); 
};

export default Themecolon;
