import React from "react";
import { detailsBody } from "../../constants/temData";
import Model, { IExerciseData, IMuscleStats } from "react-body-highlighter";
import Card from "../Card";

const BodyHighliter = () => {
  const data = detailsBody;
  return (
    <div className="flex items-center ">
      <Model data={data}  style={{width:"15rem"}}/>
      <Model type="posterior"  data={data} style={{width:"15rem"}} />
    </div>
  );
};

export default BodyHighliter;
