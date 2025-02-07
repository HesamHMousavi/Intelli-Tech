import React, { useContext } from "react";
import { ContentContext } from "../../../Context/Content/ContentState";
import "./MoreExamples.css";

const MoreExamples = () => {
  const { Projects, SetContent } = useContext(ContentContext);
  const onClick = (con) => {
    SetContent(con);
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <div className="max-wid">
      <div className="more-examples">
        {Projects.map((item, idx) => (
          <div key={idx} className="item" onClick={() => onClick(item)}>
            <div class="image-container">
              <img src={item.Imgs[0]} alt="" />
            </div>
            <h2 className="">{item.Title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreExamples;
