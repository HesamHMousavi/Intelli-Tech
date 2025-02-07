import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import "../core/colors.css";
import "../core/core.css";
import "./Stat.css";

const Stat = ({ name, number, rate, percentage, color, isPositive }) => {
  return (
    <div
      className="stat flex-column"
      style={{
        backgroundColor: color,
      }}
    >
      <p>{name}</p>
      <h1 className="h1-large mgt-1-5">${number}</h1>
      <div className="flex-row-between mg-auto-top">
        <div>
          <div className="bg-white flex">
            <TiArrowSortedUp
              color={isPositive ? "var(--green-success)" : "var(--red-dark)"}
            />
            <p>{rate}%</p>
          </div>
        </div>
        <p className="p-small">(+{percentage}%)</p>
      </div>
    </div>
  );
};

export default Stat;
