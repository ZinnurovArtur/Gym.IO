import React from "react";
import Card from "./Card";
const Details = ({ details}) => {
  const detailList = {
    sets: "Sets",
    reps: "Reps",
    calories: "Calories",
    gym_streak: "Gym Streak",
    all_training: "Training days",
    last_training_day: "Last Training Day",
  };
  return (
    <Card>
      Last training details
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailList).map((item) => {
          return (
            <li key={item} className="flex items-center mb-1 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
              <span>{detailList[item]}</span>
              <span>{details[item]}</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
