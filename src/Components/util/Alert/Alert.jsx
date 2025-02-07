import React, { useContext } from "react";
import { MdInfo } from "react-icons/md";
import { MdError } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosWarning } from "react-icons/io";
import { ContentContext } from "../../../Context/Content/ContentState";
import { FaTools } from "react-icons/fa";

import "../../util/colors.css";

export default function InfoAlert({ Alert }) {
  const { RemoveAlert } = useContext(ContentContext);
  let color = "";
  let bgcolor = "";
  let Icon = null;
  if (Alert.type === "info") {
    color = "var(--blue-darker)";
    bgcolor = "var(--info-light)";
    Icon = MdInfo;
  } else if (Alert.type === "error") {
    color = "var(--red-dark)";
    bgcolor = "var(--red-light-err)";
    Icon = MdError;
  } else if (Alert.type === "warning") {
    color = "var(--yellow-dark)";
    bgcolor = "var(--yellow-light)";
    Icon = IoIosWarning;
  } else if (Alert.type === "success") {
    color = "var(--green-dark)";
    bgcolor = "var(--green-light)";
    Icon = IoCheckmarkSharp;
  } else if (Alert.type === "default") {
    color = "var(--blue-dark)";
    bgcolor = "var(--gray-color-3)";
    Icon = FaTools;
  } else {
    color = "var(--yellow-dark)";
    bgcolor = "var(--yellow-light)";
    Icon = IoIosWarning;
  }

  const onClose = () => {
    RemoveAlert(Alert.id);
  };
  return (
    <div
      className="alert mid-shadow"
      style={{
        backgroundColor: bgcolor,
        border: "1px solid " + color,
      }}
    >
      {Icon && <Icon size={24} color={color} />}
      <div className="text-con-alert">
        <h3
          style={{
            color: color,
            fontWeight: "500",
          }}
        >
          {Alert.alert}
        </h3>
        {/* <p style={{ color: color }}>{Alert.alert}</p> */}
      </div>
      <RxCross2 size={24} color={color} onClick={onClose} />
    </div>
  );
}
