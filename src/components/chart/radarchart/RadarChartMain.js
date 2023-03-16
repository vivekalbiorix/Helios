import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Fun & Leisure",
    A: 5,
    B: 5,
  },
  {
    subject: "Finances",
    A: 4,
    B: 4,
  },
  {
    subject: "Fear",
    A: 8,
    B: 5,
  },
  {
    subject: "Happy",
    A: 5,
    B: 6,
  },
  {
    subject: "Angry",
    A: 8,
    B: 3,
  },
  {
    subject: "Neutral",
    A: 4,
    B: 4,
  },
  {
    subject: "Disgust",
    A: 4,
    B: 2,
  },
  {
    subject: "Surprise",
    A: 3,
    B: 4,
  },
  {
    subject: "Sad",
    A: 2,
    B: 2,
  },
  {
    subject: "Confident",
    A: 3,
    B: 5,
  },
];

function RadarChartMain() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid gridType="circle"/>
          <PolarAngleAxis textRendering={PolarAngleAxis} dataKey="subject" />
          <PolarRadiusAxis angle={90} domain={[0, 10]} />
          <Radar
        
            dataKey="A"
            stroke="#e9eea4"
            fill="#e9eea4"
            fillOpacity={0.6}
          />
          <Radar
            dataKey="B"
            stroke="#0B1BD2"
            fill="#0B1BD2"
            fillOpacity={0.6}
          />
          
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

export default RadarChartMain;
