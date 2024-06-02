import React from "react";
import "./Slider1.css";
import stars from "../../../assets/stars.png";
function Slider1() {
  return (
    <div className="slider1 w-full h-screen bg-cover bg-center relative">
      <div className="slider1-content w-2/4 absolute top-[5%] left-[3%] p-8">
        <span className="text-black text-lg uppercase mb-4 font-bold block text-left">
          the most trusted ayurvedic & organic brand
        </span>
        <h2 className="text-black text-7xl leading-snug font-semibold text-left">
          Say No to Health Issues,Yes to Life
        </h2>
        <h3 className="flex gap-3">
          <img src={stars} alt="" />
          <p className=" text-base font-medium">
            Over 3 lacs + Happy Customers
          </p>
        </h3>
      </div>
    </div>
  );
}

export default Slider1;
