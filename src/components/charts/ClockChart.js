import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./ClockChart.css";
import { icon } from "../../assets";

const data = [
  { name: "progress", value: 40 },
  { name: "remaining", value: 35 },
  { name: "progress", value: 40 },
  { name: "remaining", value: 5 },
];

const COLORS = ["#EFEFEF", "#cc84d9", "#EFEFEF", "#cc84d9"];

const ClockChart = () => {
  return (
    <div className="home">
      <div className="inner_section">
        <div className="inner-header">
          <h2>Flow Peaks</h2>
          <img src={icon} alt="icon" />
        </div>
        <div className="inner-main">
          <h4>Evening</h4>
          <div className="inner-main-graph">
            <h4>Night</h4>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <h4>Afternoon</h4>
          </div>
          <h4>Morning</h4>
        </div>
        <div className="inner-body">
          <button>April</button>
        </div>
      </div>
    </div>
  );
};

export default ClockChart;
