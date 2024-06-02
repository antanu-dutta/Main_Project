import React from "react";
import "./CopyRight.css";
import visa from "../../../assets/Footer Images/visa.webp";
import mastercard from "../../../assets/Footer Images/mastercard.webp";
import amex from "../../../assets/Footer Images/amex.png";
import gpay from "../../../assets/Footer Images/gpay.webp";
import applepay from "../../../assets/Footer Images/applepay.webp";
import shopify from "../../../assets/Footer Images/shopify.webp";
import discover from "../../../assets/Footer Images/discover.png";

function CopyRight() {
  const payments = [visa, mastercard, amex, gpay, applepay, shopify, discover];
  return (
    <div
      id="copyright-section"
      className="py-5 bg-primary border-t border-white"
    >
      <div className="container">
        <div
          id="copyright-container"
          className="flex justify-between items-center"
        >
          <p className="text-white font-medium text-lg">
            {" "}
            &#169; 2024 Farm Naturelle. All rights reserved
          </p>
          <div className="flex gap-4">
            {payments.map((item, index) => (
              <img src={item} key={index} alt="" className="w-[40px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
