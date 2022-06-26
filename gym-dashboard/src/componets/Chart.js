import React, { useContext, useState } from "react";
import {
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  LineChart,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import { chartConfig } from "../constants/chartConfig";
import { mockChartData } from "../constants/temData";
import ThemeContext from "../contexts/ThemeContext";
import { convertToUnixTime } from "../helpers/data-helpers";
import Card from "./Card";
import ChartFilter from "./ChartFilter";

export const Chart = () => {
  const [data, setData] = useState(mockChartData);
  const [filter, setFilter] = useState("1W");
  const {darkMode} =useContext(ThemeContext)

  const formatData = (data) => {
    return data.weight.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertToUnixTime(data.date[index]),
      };
    });
  };

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#121063": "#3f3cbb"}
                stopOpacity={0.8}
              />
              <stop offset="95%" stopColor={darkMode ? "#121063": "#3f3cbb"} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="bg-purple"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip 
            contentStyle={darkMode ? {backgroundColor: "#111827"}:null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          
         
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
