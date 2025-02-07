import React from "react";
import "./ServiceMost.css";

const ServiceMost = () => {
  return (
    <div className="most-services">
      <header className="flex-row-between">
        <h3 className="h4-mid">Most Selling Products</h3>
        <div className="dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
      <main>
        <div className="product">
          <div className="img"></div>
          <div className="name">
            <h5 className="h5-mid mgl-1">Basic Package</h5>
            <p className="mgl-1">ID: 38932</p>
          </div>
          <div className="sales mg-auto-left">
            <p className="outline ">211 Sales</p>
          </div>
        </div>
        <div className="product">
          <div className="img"></div>
          <div className="name">
            <h5 className="h5-mid mgl-1">Standard Package</h5>
            <p className="mgl-1">ID: 12232</p>
          </div>
          <div className="sales mg-auto-left">
            <p className="outline ">125 Sales</p>
          </div>
        </div>
        <div className="product">
          <div className="img"></div>
          <div className="name">
            <h5 className="h5-mid mgl-1">Professional Package</h5>
            <p className="mgl-1">ID: 11242</p>
          </div>
          <div className="sales mg-auto-left">
            <p className="outline ">46 Sales</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceMost;
