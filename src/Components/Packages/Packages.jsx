import React from "react";
import "../../Components/util/colors.css";
import "../../Components/util/core.css";
import "./Packages.css";

import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
// BiPlus;

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
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>3 Pages</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>5 design revisions</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Custom design</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Search Engine Submission</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Mobile friendly design</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Social Media links</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Contact form</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Google Maps</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Royalty free stock image</p>
              </li>
            </ul>
            <a href="/" className="link-con">
              <BiPlus size={20} color="#386ca0" />
              <p>more</p>
            </a>
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
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>3 Pages</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>5 design revisions</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Custom design</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Search Engine Submission</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Mobile friendly design</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Social Media links</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Contact form</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Google Maps</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Royalty free stock image</p>
              </li>
            </ul>
            <a href="/" className="link-con">
              <BiPlus size={20} color="#386ca0" />
              <p>more</p>
            </a>
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
            <h1>£949</h1>
            <ul>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>3 Pages</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>5 design revisions</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Custom design</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Search Engine Submission</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Mobile friendly design</p>
              </li>
              <li>
                <FaRegCircleCheck size={22} color="#386ca0" />
                <p>Social Media links</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Contact form</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Google Maps</p>
              </li>
              <li>
                <FaRegCircleXmark size={22} className="no" />
                <p>Royalty free stock image</p>
              </li>
            </ul>
            <a href="/" className="link-con">
              <BiPlus size={20} color="#386ca0" />
              <p>more</p>
            </a>
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
