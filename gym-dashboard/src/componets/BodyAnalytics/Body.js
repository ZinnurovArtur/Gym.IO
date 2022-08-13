import React from "react";
import Card from "../Card";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import BodyHighliter from "./BodyHighliter";
import BodyDescription from "./BodyDescription";
import ChartsOverall from "./ChartsOverall";
const Body = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr grid-flow-row-dense relative gap-6 p-10 font-quicksand ${
        darkMode ? "bg-midnight " : "bg-neutral-100"
      }`}
    >
      <div className="row-span-3 xss:row-span-4 xs:row-span-6 sm:row-span-5 md:row-span-3 lg:row-span-4  xl:row-span-3">
        <div className="h-full rounded-md relative p-4 border-2 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
          <BodyHighliter />
        </div>
      </div>

      <div className="row-span-2 xs:row-span-2 xl:row-span-3">
        <BodyDescription />
      </div>
      <div className="row-span-2 xs:row-span-2 xl:row-span-3">
        <Card>
          <ChartsOverall />
        </Card>
      </div>
    </div>
  );
};

export default Body;
