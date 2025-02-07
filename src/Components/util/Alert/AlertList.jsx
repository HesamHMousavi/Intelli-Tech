import React, { useContext } from "react";
import InfoAlert from "./Alert";
import { ContentContext } from "../../../Context/Content/ContentState";
import "./Alert.css";

const AlertList = () => {
  const { Alerts } = useContext(ContentContext);
  return (
    <div className="alert-list">
      {Alerts &&
        Alerts.map((item, idx) => <InfoAlert Alert={item} key={idx} />)}
    </div>
  );
};

export default AlertList;
