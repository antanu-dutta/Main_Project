import React from "react";
import "./Slider2.css";
import stars from "../../../assets/stars.png";

function Slider2() {
  return (
    <div className="slider2 w-full h-screen relative bg-center bg-cover">
      <div className="text-center absolute top-[60px] left-[50%] -translate-x-2/4 w-3/5 p-8">
        <h2 className="mb-1 text-base font-semibold text-white uppercase">
          Healthy lIVING STARTS WITH HEALTHY EATING
        </h2>
        <h3 className=" text-6xl text-white font-semibold font-serif mb-5">
          From Farm To{" "}
          <span className="text-[#cbd82d] text-6xl font-serif font-semibold">
            Your Table
          </span>
        </h3>
        <h3 className="wrapper flex gap-2 justify-center mb-9">
          <img src={stars} alt="" />
          <p className="text-white text-base lowercase">
            Over 50 lacs + Products Sold
          </p>
        </h3>
        <a
          href=""
          className=" text-white text-sm font-semibold uppercase px-5 py-4 border rounded-xl hover:bg-white hover:text-primary transition-all"
        >
          Explore Our Products
        </a>
      </div>
    </div>
  );
}

export default Slider2;
