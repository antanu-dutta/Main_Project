import React from "react";
import "./Iconstrip.css";

function Iconstrip() {
  return (
    <div className="icon-strip">
      <div className="icon-strip_container">
        <div className="icon-strip_item">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/shipping_2.svg?v=1697091307"
            alt=""
          />
          <h4 className="icon-strip_item-title">FREE SHIPPING & RETURN</h4>
        </div>
        <div className="icon-strip_item">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/arrow_2.svg?v=1697091308"
            alt=""
          />
          <h4 className="icon-strip_item-title">ORGANIC & NATURAL</h4>
        </div>
        <div className="icon-strip_item">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/checkout_1.png?v=1696393337"
            alt=""
          />
          <h4 className="icon-strip_item-title">SECURED CHECKOUT</h4>
        </div>
        <div className="icon-strip_item">
          <img
            src="https://farmnaturelle.com/cdn/shop/files/warranty_2b1834c6-971c-43f3-b4e0-94b74c220a97.svg?v=1697091308"
            alt=""
          />
          <h4 className="icon-strip_item-title">10 YEARS LEGACY</h4>
        </div>
      </div>
    </div>
  );
}

export default Iconstrip;
