import React from "react";
import "./Quickcategorycard.css";
import { card } from "../Shop_By_Concern_Card/Shop_By_Concern_Card";

function Quickcategorycard() {
  return (
    <>
      {card.map((item, index) => {
        return (
          <a href="" key={index} className="w-[12%] p-4">
            <div>
              <div className="quick_category_image">
                <img
                  src={item.path}
                  alt=""
                  className="rounded-[100px] border-2 border-[#bcd871] bg-gradient"
                />
              </div>
              <div>
                <p className="text-[#355d4d] text-center text-base font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}

export default Quickcategorycard;
