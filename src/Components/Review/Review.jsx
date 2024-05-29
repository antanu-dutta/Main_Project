import React from "react";
import "./Review.css";
import VideoCard from "./Review Video Card/VideoCard";
import { videos } from "./Review Video Card/VideoItem";

function Review() {
  return (
    <div className="review container">
      <div>
        <h1 className="customer-love"></h1>
      </div>
      <div>
        <div className="review-container flex gap-5">
          <VideoCard videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default Review;
