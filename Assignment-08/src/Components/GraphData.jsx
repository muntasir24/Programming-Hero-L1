
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const GraphData = ({ myapp }) => {
  const { ratings } = myapp || {};
  // console.log(ratings);
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart data={ratings} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip></Tooltip>
        <Bar dataKey="count" fill="#09bab4" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphData;
