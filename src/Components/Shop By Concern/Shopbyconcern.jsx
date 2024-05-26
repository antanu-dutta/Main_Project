import React from "react";
import "./Shopbyconcern.css";
import Quickcategorycard from "./Quickcategorycard/Quickcategorycard";
import Shopby from "../Shop By/Shopby";
import shopbyconcern from "../../assets/shopbyconcernlogo.avif";

function Shopbyconcern() {
  return (
    <div className="shopify-section">
      <section className="category_custom_wrap shop_by_concern">
        <div className="container">
          <div className="quick_category_wrapper top_category_wrap">
            <div className="page-width">
              <Shopby img={shopbyconcern} title={"Shob by Concern"} />
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
