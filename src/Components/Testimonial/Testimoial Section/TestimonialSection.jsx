import React from "react";
import "./TestimonialSection.css";

import TestimonialCard from "../Testimonial Card/TestimonialCard";

function TestimonialSection() {
  return (
    <div className=" bg-[#f6f5f0]">
      <div className="container">
        <div className="heading-review pt-16">
          <h3 className="text-center text-black mb-4 text-5xl font-normal">
            Happy Customers
          </h3>
          <p className="text-black text-center font-jost mb-18 text-xl font-normal leading-relaxed">
            With million of products delivered, discover why customers trust{" "}
            <br /> us with there daily health
          </p>
        </div>
        <div>
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
