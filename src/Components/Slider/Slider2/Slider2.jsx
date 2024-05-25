import React from "react";
import "./Slider2.css";
import stars from "../../../assets/stars.png";

function Slider2() {
  return (
    <div className="slider2">
      <div className="slider2-content">
        <h2>Healthy lIVING STARTS WITH HEALTHY EATING</h2>
        <h3>
          From Farm To <span>Your Table</span>
        </h3>
        <h3 className="wrapper">
          <img src={stars} alt="" />
          <p>Over 50 lacs + Products Sold</p>
        </h3>
        <a href="" className="btn">
          Explore Our Products
        </a>
      </div>
    </div>
  );
}

export default Slider2;
