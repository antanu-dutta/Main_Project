import React from "react";
import "./AmazonReview.css";

function AmazonReview() {
  return (
    <div className="amazon_review-wrap bg-cover bg-no-repeat bg-center py-28">
      <div className="container">
        <div>
          <div className="amazon_review_content">
            <h2 className="text-primary text-center font-jost text-5xl font-medium  leading-normal mb-34">
              Over 30, 000 reviews <br /> on Amazon
            </h2>
            <p className="text-primary text-center font-jost text-base font-normal leading-relaxed mb-8">
              We’ve received a lot of love and are thrilled to <br />
              share some of the experiences of our happy <br />
              customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmazonReview;
