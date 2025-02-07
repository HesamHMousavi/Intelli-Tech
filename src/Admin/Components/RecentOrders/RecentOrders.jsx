import React from "react";
import "./RecentOrders.css";

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <header>
        <h3 className="h3-mid">Recent Orders</h3>
      </header>
      <main>
        <div>
          <p className="mgb-2 flag">Product</p>
          <p className="flag">Basic</p>
          <p className="flag">Basic</p>
          <p className="flag">Basic</p>
        </div>
        <div>
          <p className="mgb-2 flag">Customer</p>
          <p className="blue-color">John Doe</p>
          <p className="blue-color">John Doe</p>
          <p className="blue-color">John Doe</p>
        </div>
        <div>
          <p className="mgb-2 flag">Order ID</p>
          <p>#232423</p>
          <p>#232423</p>
          <p>#232423</p>
        </div>
        <div>
          <p className="mgb-2 flag">Date</p>
          <p>#232423</p>
          <p>#232423</p>
          <p>#232423</p>
        </div>
        <div>
          <p className="mgb-2 flag">Status</p>
          <p className="pending">Pending</p>
          <p className="success">Completed</p>
          <p className="error">Cancelled</p>
        </div>
      </main>
    </div>
  );
};

export default RecentOrders;
