import React, { useContext } from "react";
import "./BuyProduct.css";
import ProductItem from "../Product Item/ProductItem";

function BuyProduct({ title, subTitle, products }) {
  return (
    <div className="collecion_products">
      <div className="container_custom flex align-items-center py-[100px] bg-[#faf9f4]">
        <div className="flex flex-col items-start gap-9 w-[33%] px-[5%]">
          <h1 className=" text-[#855245] text-[40px] font-medium leading-10 m-0">
            {title}
          </h1>
          <p className="text-[#000] text-sm font-normal w-[70%] leading-[22px] mb-4">
            {subTitle}
          </p>
          <div className="  flex flex-col gap-10">
            <div className="navigation-btn flex gap-5">
              <img
                src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Variant3.svg?v=1696408269"
                alt=""
                className="cursor-pointer"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Variant3_d560f112-8f09-48f5-a26b-2f02659577d8.svg?v=1696408283"
                alt=""
                className="cursor-pointer"
              />
            </div>
            <a
              href="#"
              className=" py-[12px] px-[70px] text-[#fff] border-[1px] border-solid border-[#855245] text-[14px] inline-block font-semibold rounded-[12px] bg-[#855245] leading-[18px] uppercase"
            >
              View All
            </a>
          </div>
        </div>
        <div className="product-container w-[65%] relative">
          <ProductItem products={products} />
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
