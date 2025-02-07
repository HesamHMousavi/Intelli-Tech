import React, { useContext } from "react";
import { ContentContext } from "../../Context/Content/ContentState";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import "../../Components/util/colors.css";
import "../../Components/util/core.css";
import "./Packages.css";

const Card = ({ Package }) => {
  const { AddToBasket } = useContext(ContentContext);
  const size = 18;

  const onClick = () => {
    AddToBasket(Package);
  };
  return (
    <div className="pack soft-shadow">
      <header>
        <h3>{Package.Name}</h3>
        <p>{Package.Sub}</p>
      </header>
      <main>
        <h1>£{Package.Price}</h1>
        <ul>
          {Package.Features.map((item, idx) => (
            <li key={idx}>
              {item.isTicked ? (
                <FaRegCircleCheck size={size} color="#386ca0" />
              ) : (
                <FaRegCircleXmark size={size} className="no" />
              )}
              <p>{item.Name}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <button className="btn" onClick={onClick}>
          Select Package
        </button>
      </footer>
    </div>
  );
};

export default Card;
