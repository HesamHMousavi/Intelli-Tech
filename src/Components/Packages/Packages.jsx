import React from "react";
import "../../Components/util/colors.css";
import "../../Components/util/core.css";
import "./Packages.css";

import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
const size = 18;

const Packages = () => {
  return (
    <div className="packs-con">
      <div className="max-wid2 text-con">
        <h2>Website packages</h2>
        <p>
          Our starter website packages suit most small to medium size businesses
          or organisations and include everything you need to get your business
          online. They are custom designed, work great across different devices
          and browsers and include a Content Management System (CMS), allowing
          you to update your website at any time.
        </p>
      </div>
      <div className="packs max-wid">
        <div className="pack soft-shadow">
          <header>
            <h3>Basic</h3>
            <p>
              Ideal for small business or start ups. contains basic
              functionality and limited features
            </p>
          </header>
          <main>
            <h1>£299</h1>
            <ul>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Up to 5 Pages</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>5 design revisions</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>7-10 day delivery</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>6 Months Free Domain</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>6 Moths Free Hosting</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Mobile friendly design</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Social Media links</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Contact form</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Google Maps</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Server/Database</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Authentication System</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Custom design</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Payment System</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Source Code</p>
              </li>
            </ul>
            {/* <a href="/" className="link-con">
              <BiPlus size={20} color="#386ca0" />
              <p>more</p>
            </a> */}
          </main>
          <footer>
            <button className="btn">Select Package</button>
          </footer>
        </div>

        <div className="pack soft-shadow">
          <header>
            <h3>Standard</h3>
            <p>
              Ideal for small business or start ups. contains basic
              functionality and limited features
            </p>
          </header>
          <main>
            <h1>£599</h1>
            <ul>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Up to 10 Pages</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>2 Design Revisions Per Page</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>14 day delivery</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>12 Months Free Domain</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>6 Moths Free Hosting</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Mobile friendly design</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Social Media links</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Contact form</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Google Maps</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Server/Database</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Authentication System</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Custom design</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Payment System</p>
              </li>
              <li>
                <FaRegCircleXmark size={size} className="no" />
                <p>Source Code</p>
              </li>
            </ul>
            {/* <a href="/" className="link-con">
              <BiPlus size={20} color="#386ca0" />
              <p>more</p>
            </a> */}
          </main>
          <footer>
            <button className="btn">Select Package</button>
          </footer>
        </div>

        <div className="pack soft-shadow">
          <header>
            <h3>Professional</h3>
            <p>
              Ideal for small business or start ups. contains basic
              functionality and limited features
            </p>
          </header>

          <main>
            <h1>£1299</h1>
            <ul>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Up to 15 Pages</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>10 Design Revisions</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>4-6 weeks delivery</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>12 Months Free Domain</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>12 Moths Free Hosting</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Mobile friendly design</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Social Media links</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Contact form</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Google Maps</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Server/Database</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Authentication System</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Custom design</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Payment System</p>
              </li>
              <li>
                <FaRegCircleCheck size={size} color="#386ca0" />
                <p>Source Code</p>
              </li>
            </ul>
            {/* <a href="/" className="link-con">
              <BiPlus size={20} color="#386ca0" />
              <p>more</p>
            </a> */}
          </main>
          <footer>
            <button className="btn">Select Package</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Packages;
