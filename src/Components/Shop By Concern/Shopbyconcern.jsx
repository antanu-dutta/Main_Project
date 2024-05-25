import React from "react";
import "./Shopbyconcern.css";
import Quickcategorycard from "./Quickcategorycard/Quickcategorycard";

function Shopbyconcern() {
  return (
    <div className="shopify-section">
      <section className="category_custom_wrap shop_by_concern">
        <div className="container">
          <div className="quick_category_wrapper top_category_wrap">
            <div className="page-width">
              <img
                src="https://farmnaturelle.com/cdn/shop/files/Group_110799_3_1_1.png?v=1713349843"
                alt=""
                className="heading_logo"
              />
              <h2>Shop by Concern</h2>
              <div className="quick_category_wrap custom_category_slider">
                <Quickcategorycard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shopbyconcern;
