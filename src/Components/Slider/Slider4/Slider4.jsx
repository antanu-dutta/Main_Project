import React from "react";
import "./Slider4.css";

function Slider4() {
  return (
    <div className="slider4">
      <div className="slider4-content">
        <span className="title">the most trusted ayurvedic</span>
        <h2>
          <span>dont't delay</span> your health concerns!
        </h2>
        <span className="subtitle">
          consult with our acharyas (doctors) and get
        </span>
        <div className="small-cards">
          <div className="card">
            <img
              src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_10.svg?v=1698902843"
              alt=""
            />
            <span>ayurvedic products</span>
          </div>
          <div className="card">
            <img
              src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_16.svg?v=1698902843"
              alt=""
            />
            <span>lifestyle recommendation</span>
          </div>
          <div className="card">
            <img
              src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_17.svg?v=1698902842"
              alt=""
            />
            <span>custom diet plan</span>
          </div>
          <div className="card">
            <img
              src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_18.svg?v=1698902843"
              alt=""
            />
            <span>expertn connect</span>
          </div>
        </div>
        <button>book consultation @ rs 99</button>
      </div>
    </div>
  );
}

export default Slider4;
