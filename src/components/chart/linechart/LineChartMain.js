import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./LineChartMain.module.css";

const data = [
  {
    name: "5",
    uv: 28,
    pv: 22,
  },
  {
    name: "10",
    uv: 30,
    pv: 24,
  },
  {
    name: "15",
    uv: 25,
    pv: 10,
  },
  {
    name: "20",
    uv: 30,
    pv: 20,
  },
  {
    name: "25",
    uv: 40,
    pv: 60,
  },
  {
    name: "30",
    uv: 30,
    pv: 55,
  },
  {
    name: "35",
    uv: 60,
    pv: 90,
  },
  {
    name: "40",
    uv: 65,
    pv: 95,
  },
  {
    name: "45",
    uv: 55,
    pv: 65,
  },
  {
    name: "50",
    uv: 70,
    pv: 70,
  },
  {
    name: "55",
    uv: 90,
    pv: 80,
  },
  {
    name: "60",
    uv: 92,
    pv: 82,
  },
  {
    name: "65",
    uv: 96,
    pv: 86,
  },
];

function LineChartMain() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis>
            <Label value="Time Since Event Start (seconds)" position="bottom" strokeWidth="1" className={styles.xAxisLabel}/>
          </XAxis>
          <YAxis>
            <Label value="Discordance" position="centerBottom" angle={-90} strokeWidth="1" className={styles.yAxisLabel}/>
          </YAxis>
         
          <Line
            type="basis"
            dataKey="pv"
            stroke="#0b1bd2"
            strokeWidth="2"
            dot={false}
            tick
          />
          <Line
            type="basis"
            dataKey="uv"
            stroke="#8dc73f"
            strokeWidth="2"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineChartMain;
