import React from "react";
import "./Shopby.css";

function Shopby({ img, title }) {
  return (
    <>
      <img src={img} alt="" className="heading_logo" />
      <h2>{title}</h2>
    </>
  );
}

export default Shopby;
