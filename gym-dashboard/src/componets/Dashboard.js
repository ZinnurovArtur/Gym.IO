import { useContext } from "react";
import Details from "./Details";

import { detailsData, partOfbodyBack } from "../constants/temData";

import { mockChartData } from "../constants/temData";
import ThemeContext from "../contexts/ThemeContext";
import Chart from "./Chart";
import Overview from "./Overview";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    
    <div
      className={`h-screen w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr relative gap-6 p-10 font-quicksand ${
        darkMode ? "bg-midnight " : "bg-neutral-100"
      }`}
    >
  
      
      <div className="md:col-span-2 row-span-4">
        <Chart filtered="chartfilters" chartData={mockChartData} />
      </div>

      <div>
        <Overview date={"12/12/2012"} trainings={3}></Overview>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={detailsData} />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Chart chartData={partOfbodyBack}>StatsCustom back </Chart>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Chart chartData={mockChartData}>StatsCustom arms </Chart>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Chart chartData={mockChartData}>StatsCustom legs </Chart>
      </div>
    </div>
  );
};

export default Dashboard;
