import React from "react";
import "./ShobbyItem.css";
import { productItem } from "../Shobbyproduct";

function ShobbyItem() {
  return (
    <>
      {productItem.map((item, index) => (
        <a
          href=""
          key={index}
          className=" w-[16%] p-4 transition-all hover:scale-110"
        >
          <img
            src={item.path}
            alt=""
            className="w-100 rounded-[20px] border-[2px] border-solid border-[#006944]"
          />
          <p className="text-[#355d4d] text-center text-[16px] font-semibold leading-6 mt-4">
            {item.title}
          </p>
        </a>
      ))}
    </>
  );
}

export default ShobbyItem;
