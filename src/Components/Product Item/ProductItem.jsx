import React, { useContext } from "react";
import "./ProductItem.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heart_icon from "../../assets/SVG/heart.svg";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function ProductItem({ products }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-1/3 p-5 rounded-lg group shadow-md bg-white cursor-pointer"
            >
              <div className=" relative mb-6">
                <div className="flex justify-between mb-5">
                  <span className="bg-[#df6857] px-2 py-1 text-center leading-snug text-xs text-white rounded-lg">
                    Bestseller
                  </span>
                  <img src={heart_icon} alt="" />
                </div>
                <div className="group relative overflow-hidden">
                  <img src={item.path} alt="" className="product-img" />
                  <img
                    src={item.hoverPath}
                    alt=""
                    className=" group-hover:left-0 absolute top-0 left-[400px] transition-all duration-300 "
                  />
                </div>
              </div>
              <div className="product_details">
                <h3 className="mb-2.5 text-black text-lg font-bold leading-[22.5px] text-left border-b border-gray-300/50 pb-2.5 tracking-[0.54px]">
                  {item.title}
                </h3>
                <div className="flex gap-1.5 items-center">
                  <div className="line-through text-[16px] text-gray-600 font-normal ml-2 leading-[20px] opacity-70">
                    {item.old_price ? `Rs. ${item.old_price}` : ""}
                  </div>
                  <div className="text-black text-[13px] font-bold leading-[20px]">
                    Rs. {item.new_price}
                  </div>
                  <div className="max-w-[120px] border border-solid border-[#006944] inline-block text-white font-jost text-[10px] font-bold uppercase rounded-[5px] bg-[#c62e1a] px-2 py-[5px]">
                    {item.offer ? `Rs. ${item.offer}` : ""}
                  </div>
                </div>
                <button className="text-[#006944] font-jost text-[14px] font-bold leading-[18px] px-9 py-3 bg-white uppercase rounded-[12px] border border-solid border-[#006944] block mt-4 w-full transition duration-200 linear group-hover:bg-primary group-hover:text-white">
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default ProductItem;
