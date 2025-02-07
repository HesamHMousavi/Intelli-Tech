import React from "react";
import Dash from "../Dash/Dash";
import { BsMoon, BsPerson } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import Search from "../Search/Search";
import Stat from "../Stat/Stat";
import Graph from "../Graph/Graph";
import ServiceMost from "../ServiceMost/ServiceMost";
import "../core/core.css";
import "./Data.css";
import RecentOrders from "../RecentOrders/RecentOrders";

const Data = () => {
  return (
    <div className="flex">
      <Dash />
      <div className="data">
        <header>
          <Search />
          <div>
            <BsMoon size={40} className="border-circle" />
            <GrNotification size={40} className="border-circle" />
            <BsPerson size={40} className="border-circle" />
          </div>
        </header>
        <div className="max-width">
          <main>
            <h3 className="h3-mid mgt-2">Welcome back, Hesam!</h3>
            <p>Here is whats happening with your website</p>
            <div className="stats flex-row-between gap-1">
              <Stat
                name="Ecommerce Revenue"
                number={24234}
                rate={2.3}
                isPositive={false}
                percentage={23.4}
                color="var(--red-light-2)"
              />
              <Stat
                name="Ecommerce Revenue"
                number={24234}
                rate={2.3}
                isPositive={false}
                percentage={23.4}
                color="var(--light-green)"
              />
              <Stat
                name="Ecommerce Revenue"
                number={24234}
                rate={2.3}
                isPositive={false}
                percentage={23.4}
                color="var(--light-blue)"
              />
              <Stat
                name="Ecommerce Revenue"
                number={24234}
                rate={2.3}
                isPositive={true}
                percentage={23.4}
                color="var(--light-gray)"
              />
              <Stat
                name="Ecommerce Revenue"
                number={24234}
                rate={2.3}
                isPositive={true}
                percentage={23.4}
                color="var(--light-yellow)"
              />
            </div>
            <div className="flex width-100">
              <Graph />
              <ServiceMost />
            </div>
          </main>
          <footer>
            <div className="flex width-100">
              <RecentOrders />
              {/* <RecentCustomers /> */}
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Data;
