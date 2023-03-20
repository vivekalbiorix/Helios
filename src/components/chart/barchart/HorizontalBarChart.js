import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import styles from "./HorizontalBarChart.module.css";

const data = [
  { name: "MSFT", value: 7, barLabel: "8 (40%)" },
  { name: "S&P 500", value: 5, barLabel: "15 (35%)" },
  { name: "Sector Index", value: 5, barLabel: "" },
];

function HorizontalBarChart() {
  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const fireOffset = value.toString().length < 5;
    return (
      <text
        className={styles.barLableText}
        x={x + width + 90}
        y={y + height - 50}
        fill={fireOffset ? "#a0a0a0" : "#a0a0a0"}
        textAnchor="end"
      >
        {value}
      </text>
    );
  };
  return (
    <>
      <div className={styles.barChartVerticle}>
        Security level implied vol against V SI
      </div>

      <ResponsiveContainer>
        <BarChart
          data={data}
          layout="vertical"
          barCategoryGap={35}
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
          <Bar dataKey="value" fill="#0B1BD2">
            <LabelList
              dataKey="barLabel"
              content={renderCustomizedLabel}
              position="insideRight"
              style={{ fill: "white" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className={styles.barChartHorizontal}>
        Security level implied vol against industry
      </div>
    </>
  );
}

export default HorizontalBarChart;
