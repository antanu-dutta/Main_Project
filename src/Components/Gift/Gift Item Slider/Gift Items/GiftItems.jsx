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
          <div className="item">
            {" "}
            <img src={item.path} alt="gift1" />
            <h2>{item.title}</h2>
            <p>{item.subTitle}</p>
            <span>{item.price}</span>
            <button>Buy Now</button>{" "}
          </div>
        );
      })}
    </Slider>
  );
}

export default GiftItems;
