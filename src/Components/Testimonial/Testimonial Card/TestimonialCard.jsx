import React from "react";
import "./TestimonialCard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dc from "../../../assets/dc.webp";
import star from "../../../assets/SVG/Star.svg";
import { TestimonialCardDetails } from "./TestimonialCardDetails";
function TestimonialCard() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      {TestimonialCardDetails.map((item, index) => (
        <div className=" rounded-lg p-6 shadow-md w-440 h-390" key={index}>
          <div className="customer_details flex gap-5 mb-5  items-center">
            <img src={item.path} alt="" />
            <span className="text-black font-jost text-lg font-medium capitalize">
              {item.customerName}
            </span>
          </div>
          <hr className="w-[90%] mx-auto" />
          <div className="testimonial-stars mt-5 flex">
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
            <span>
              <img src={star} alt="" />
            </span>
          </div>
          <div className="review-content mt-4 pb-16">
            <p className="text-black font-jost text-lg font-medium leading-7">
              {item.reviewText}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TestimonialCard;
