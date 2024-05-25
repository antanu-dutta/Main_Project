import React from "react";
import "./Slider1.css";
import stars from "../../../assets/stars.png";
function Slider1() {
  return (
    <div className="slider1">
      <div className="slider1-content">
        <span>the most trusted ayurvedic & organic brand</span>
        <h2>Say No to Health Issues,Yes to Life</h2>
        <h3>
          <img src={stars} alt="" />
          <p>Over 3 lacs + Happy Customers</p>
        </h3>
      </div>
    </div>
  );
}

export default Slider1;
