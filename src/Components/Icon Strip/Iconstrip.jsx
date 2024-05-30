import React from "react";
import "./Iconstrip.css";

function Iconstrip({ strips }) {
  return (
    <>
      <div className="icon-strip">
        <div className="icon-strip_container">
          {strips.map((item, index) => (
            <div className="icon-strip_item">
              <img src={item.path} alt="" />
              <h4 className="icon-strip_item-title">{item.content}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Iconstrip;
