import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "MSFT", value: 7 },
  { name: "S&P 500", value: 5 },
  { name: "Sector Index", value: 10 },
];

function HorizontalBarChart() {
  return (
    <>
      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          barCategoryGap={25}
          margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            width={150}
            padding={{ left: 20 }}
            dataKey="name"
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#0B1BD2" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default HorizontalBarChart;
