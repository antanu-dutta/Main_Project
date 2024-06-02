import React from "react";
import "./VideoCard.css";

function VideoCard({ videos }) {
  return (
    <>
      {videos.map((item, index) => {
        return (
          <div
            className="review_card w-1/4 rounded-xl overflow-hidden mt-10"
            key={index}
          >
            <img src={item.path} alt="" className="w-full" />
          </div>
        );
      })}
    </>
  );
}

export default VideoCard;
