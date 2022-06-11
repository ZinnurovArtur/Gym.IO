import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10">
      <div className="md:col-span-2 row-span-4">
        <Card> Chart </Card>
      </div>
      <div>
        <Card> Overview </Card>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Card> Details </Card>
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
