import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./Graph.css"; // Import CSS for styling

const fullData = [
  { date: "Feb 07", Basic: 3, Standard: 4, Professional: 1 },
  { date: "Feb 08", Basic: 2, Standard: 1, Professional: 0 },
  { date: "Feb 09", Basic: 4, Standard: 3, Professional: 0 },
  { date: "Feb 10", Basic: 3, Standard: 2, Professional: 1 },
  { date: "Feb 11", Basic: 1, Standard: 2, Professional: 1 },
  { date: "Feb 12", Basic: 5, Standard: 3, Professional: 0 },
  { date: "Feb 14", Basic: 4, Standard: 4, Professional: 0 },
  { date: "Feb 15", Basic: 2, Standard: 1, Professional: 0 },
  { date: "Feb 16", Basic: 6, Standard: 1, Professional: 2 },
  { date: "Feb 17", Basic: 1, Standard: 2, Professional: 0 },
  { date: "Feb 18", Basic: 3, Standard: 2, Professional: 2 },
];

const Graph = () => {
  const [selectedRange, setSelectedRange] = useState("7");

  // Filter data based on selected range
  const filterData = () => {
    if (selectedRange === "all") {
      return fullData; // Return all data for "All Time"
    }
    const todayIndex = fullData.length - 1;
    const daysToShow = parseInt(selectedRange, 10);
    return fullData.slice(Math.max(todayIndex - daysToShow + 1, 0));
  };

  return (
    <div className="chart-container">
      <div className="header">
        <h2 className="h3-mid">Summary</h2>
        <select
          className="filter-dropdown"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="7">Last 7 Days</option>
          <option value="14">Last 14 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="all">All Time</option> {/* Added "All Time" option */}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={filterData()}>
          <CartesianGrid strokeDasharray="1 1" opacity={0.3} />
          <XAxis
            dataKey="date"
            stroke="#ccc"
            tick={{ fill: "#999", fontWeight: "200" }}
            strokeWidth={2}
          />
          <YAxis
            stroke="#ccc"
            tick={{ fill: "#999", fontWeight: "200" }}
            strokeWidth={2}
          />
          <Tooltip />
          <Legend />
          <Line
            type="natural"
            dataKey="Basic"
            stroke="#e53484"
            strokeWidth={1.5}
            dot={{ r: 0 }}
          />
          <Line
            type="natural"
            dataKey="Standard"
            stroke="#3b3477"
            strokeWidth={1.5}
            dot={{ r: 0 }}
          />
          <Line
            type="natural"
            dataKey="Professional"
            stroke="#848fe1"
            strokeWidth={1.5}
            dot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
