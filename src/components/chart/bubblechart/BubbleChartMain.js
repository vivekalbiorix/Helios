import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
} from "recharts";
const data = [
  { x: -100, y: -200, z: 200 },
  { x: -100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 120, y: -100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: -140, y: -250, z: 280 },
  { x: -140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  { x: 110, y: -280, z: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

function BubbleChartMain() {
  return (
    <>
      <ScatterChart
        width={500}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" />
        <YAxis type="number" dataKey="y" name="weight" />
        <Scatter name="A school" data={data} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
        <ReferenceLine y={0} stroke="#000000" />
        <ReferenceLine x={0} stroke="#000000" />
        <ReferenceLine
          segment={[
            {
              x: 0,
              y: 0,
            },
            {
              x: 0,
              y: 0,
            },
          ]}
          label={{
            value: "(0 ,0)",
            position: "bottom",
          }}
        />
      </ScatterChart>
    </>
  );
}

export default BubbleChartMain;
