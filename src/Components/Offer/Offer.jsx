import React from "react";
import "./Offer.css";

function Offer() {
  const coupon = "NFARM100";
  return (
    <div className="bg-primary flex items-center justify-center gap-3 py-2 px-12">
      <div className=" flex flex-row gap-1 justify-start w-auto">
        <span>
          Get an extra 5% discount on orders over ₹1000, up to ₹100 - Use coupon
        </span>
        <span>{coupon}</span>
      </div>
      <a href="#">
        <img
          src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/ph_copy.svg?v=1695374232"
          alt=""
        />
      </a>
    </div>
  );
}

export default Offer;
