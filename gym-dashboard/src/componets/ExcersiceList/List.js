import React, { useState } from "react";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import MainContent from "./MainContent";
import SearchBar from "./SearchBar";
const List = () => {
  const { darkMode } = useContext(ThemeContext);
  const [excersozes,setExcsercises] = useState(0);
  
  return (
    <div className="container mx-auto px-4">
      <div className="my-14 h-auto w-96 rounded-lg bg-[#f2f9fb] p-4 transition-all md:w-full">
        <SearchBar />
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#545968]">Showing {excersozes} excersices</p>
          <div>
            <div className="flex items-center gap-1">
              <p className="mt-1 text-xs">Sort by</p>
              <select className="h-6 w-20 cursor-pointer text-sm font-semibold outline-none">
                <option className="hidden">Size</option>
                <option>Date</option>
                <option>Time</option>
                <option>Length</option>
                <option>None</option>
              </select>
            </div>
          </div>
        </div>
        <MainContent setExcsercises = {setExcsercises}/>
      </div>
    </div>
  );
};

export default List;
