import React from "react";
import "./VideoCard.css";

function VideoCard({ videos }) {
  return (
    <>
      {videos.map((item, index) => {
        return (
          <div className="review_card">
            <img src={item.path} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default VideoCard;
