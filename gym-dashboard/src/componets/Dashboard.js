import React, { useContext } from "react";
import Card from "./Card";
import Details from "./Details";
import Navigation from "./Navigation/Navigation";
import { detailsData } from "../constants/temData";
import Overview from "./Overview";
import Themecolon from "./Themecolon";
import Header from "./Header";
import ThemeContext from "../contexts/ThemeContext";
import Chart from "./Chart";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-midnight " : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart />
      </div>

      <div>
        <Overview date={"12/12/2012"} trainings={3}></Overview>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={detailsData} />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Card> StatsCustom back </Card>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Card> StatsCustom arms</Card>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Card> StatsCustom legs</Card>
      </div>
    </div>
  );
};

export default Dashboard;
