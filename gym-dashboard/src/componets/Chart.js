import React, { useContext, useEffect, useState } from "react";
import { Tooltip, Area, ResponsiveContainer, AreaChart } from "recharts";
import { chartConfig } from "../constants/chartConfig";
import ThemeContext from "../contexts/ThemeContext";
import {
  convertToUnixTime,
  converUnixTime,
  createDate,
} from "../helpers/data-helpers";
import Card from "./Card";
import ChartFilter from "./ChartFilter";

export const Chart = ({ filtered, chartData }) => {
  const [data, setData] = useState(chartData);
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);

  const formatData = (data) => {
    return data.weight.map((item, index) => {
      return {
        weight: item.toFixed(2),
        date: convertToUnixTime(data.date[index]),
      };
    });
  };

  useEffect(() => {
    const getDataRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimeStampUnix = convertToUnixTime(startDate);
      const endTimestampUnix = converUnixTime(endDate);

      return { startTimeStampUnix, endTimestampUnix };
    };
    /*
    const updateChartData = async () => {
      try {
        const { startTimeStampUnix, endTimestampUnix } = getDataRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          darkMode,
          resolution,
          startTimeStampUnix,
          endTimestampUnix
        );

        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };
    updateChartData()
    */
  });

  return (
    <Card>
      {filtered === "chartfilters" ? (
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
      ) : null}

      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#121063" : "#3f3cbb"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#121063" : "#3f3cbb"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="weight"
            stroke="bg-purple"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;
