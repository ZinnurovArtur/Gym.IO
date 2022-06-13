import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Themecolon = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode);
    };

  return (
    <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ${darkMode ? "shadow-gray-800" : null}`} onClick = {toggleDarkMode}>{darkMode ? <span>White</span>: <span>Dark</span> }</button>
  ); 
};

export default Themecolon;
