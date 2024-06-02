import React from "react";
import "./Shopbyconcern.css";
import Quickcategorycard from "./Quickcategorycard/Quickcategorycard";
import Shopby from "../Shop By/Shopby";
import shopbyconcern from "../../assets/shopbyconcernlogo.avif";

function Shopbyconcern() {
  return (
    <div className="shopify-section">
      <section className="py-20 bg-[#f2f7e3]">
        <div className="container">
          <div className="">
            <div className="page-width">
              <Shopby img={shopbyconcern} title={"Shob by Concern"} />
              <div className="p-4 flex flex-wrap items-start justify-center">
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
