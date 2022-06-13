import React from "react";
import Card from "./Card";

const Overview = ({ date, trainings }) => {
  return (
    <Card>
     
      <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
          {date}
        </span>

        <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
        Trainings 
          {trainings}
        
        </span>
      </div>
    </Card>
  );
};

export default Overview;
