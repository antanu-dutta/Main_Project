import React, { Component } from "react";
import "./GiftItems.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function GiftItems({ GiftItem }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {GiftItem.map((item, index) => {
        return (
          <div className="item" key={index}>
            {" "}
            <img
              src={item.path}
              alt="gift1"
              className="absolute top-0 left-0 w-full h-full -z-10"
            />
            <h2 className="text-white font-jost text-[42px] not-italic font-medium leading-[48px] tracking-[-1px] text-left">
              {item.title}
            </h2>
            <p className="text-white font-jost text-[20px] not-italic font-light leading-[34px] tracking-[-1px]">
              {item.subTitle}
            </p>
            <span className="text-[#f3b515] font-jost text-[24px] not-italic font-normal leading-[34px] tracking-[-1px]">
              {item.price}
            </span>
            <button className=" px-14 py-4 md:px-[55px] bg-white table rounded-[12px] border border-primary text-primary font-jost text-[14px] not-italic font-semibold mt-[114px] leading-[18px] uppercase transition duration-500 hover:bg-primary hover:text-white">
              Buy Now
            </button>{" "}
          </div>
        );
      })}
    </Slider>
  );
}

export default GiftItems;
