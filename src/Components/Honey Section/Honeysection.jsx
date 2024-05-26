import React from "react";
import "./Honeysection";
import ProductItemdesign from "../Product Item Design/ProductItemdesign";

function Honeysection() {
  return (
    <div className="collecion_products">
      <div className="container_custom flex align-items-center py-[100px] bg-[#faf9f4]">
        <div className="flex flex-col items-start gap-9 w-[35%] px-[5%]">
          <h1 className=" text-[#855245] text-[40px] font-medium leading-10 m-0">
            Pure Honey
          </h1>
          <p className="text-[#000] text-sm font-normal w-[70%] leading-[22px] mb-4">
            Be-produced, unprocessed honey from a farm, pure and natural
          </p>
          <div className=" mt-[80px]">
            <a
              href="#"
              className=" py-[12px] px-[70px] text-[#fff] border-[1px] border-solid border-[#855245] text-[14px] inline-block font-semibold rounded-[12px] bg-[#855245] leading-[18px] uppercase"
            >
              View All
            </a>
          </div>
        </div>
        <div className="w-[65%] flex">
          <ProductItemdesign />
        </div>
      </div>
    </div>
  );
}

export default Honeysection;
