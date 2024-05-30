import React from "react";
import "./TestimonialSection.css";

import TestimonialCard from "../Testimonial Card/TestimonialCard";

function TestimonialSection() {
  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="heading-review">
          <h3>Happy Customers</h3>
          <p>
            With million of products delivered, discover why customers trust{" "}
            <br /> us with there daily health
          </p>
        </div>
        <div className="customer-review-wrap">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
