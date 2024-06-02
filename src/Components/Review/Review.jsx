import React from "react";
import "./Review.css";
import VideoCard from "./Review Video Card/VideoCard";
import { videos } from "./Review Video Card/VideoItem";

function Review() {
  return (
    <div className="container">
      <div className="pt-10">
        <h1 className="text-primary text-4xl font-medium text-center">
          Customers Love our products
        </h1>
      </div>
      <div>
        <div className=" flex gap-5">
          <VideoCard videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default Review;
