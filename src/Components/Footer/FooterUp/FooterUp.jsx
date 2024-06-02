import React from "react";
import "./FooterUp.css";
import img1 from "../../../assets/Footer Images/Amazon.avif";
import img2 from "../../../assets/Footer Images/Flipkart.avif";
import img3 from "../../../assets/Footer Images/JioMart.avif";
import img4 from "../../../assets/Footer Images/Mesho.avif";
import img5 from "../../../assets/Footer Images/BigBasket.avif";

function FooterUp() {
  return (
    <div id="footer-up">
      <div className="container">
        <h1 className="text-primary text-center text-5xl pt-16 font-medium">
          Also Available On
        </h1>
        <div className="flex gap-7 justify-between mt-7 items-center">
          <img src={img1} alt="" className="w-[150px] h-auto" />
          <img src={img2} alt="" className="w-[150px] h-auto" />
          <img src={img3} alt="" className="w-[150px] h-auto" />
          <img src={img4} alt="" className="w-[150px] h-auto" />
          <img src={img5} alt="" className="w-[150px] h-auto" />
        </div>
      </div>
    </div>
  );
}

export default FooterUp;
