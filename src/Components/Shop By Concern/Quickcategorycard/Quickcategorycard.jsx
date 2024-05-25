import React from "react";
import "./Quickcategorycard.css";
import { card } from "../Shop_By_Concern_Card/Shop_By_Concern_Card";

function Quickcategorycard() {
  return (
    <>
      {card.map((item, index) => {
        return (
          <a href="" key={index}>
            <div className="quick_category_card">
              <div className="quick_category_image">
                <img src={item.path} alt="" className="desktop_imgage" />
              </div>
              <div className="quick_category_content">
                <p>{item.title}</p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default Quickcategorycard;
