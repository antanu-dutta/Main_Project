import React from "react";
import "./InstagramItem.css";

function InstagramItem({ section }) {
  return (
    <>
      <div className=" flex-1 image flex flex-wrap gap-[10px]">
        {section.map((item, index) => {
          return (
            <div key={index} className="group">
              <img
                src={item.path}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:brightness-50"
              />
              <div className=" group-hover:flex hidden content  p-3  h-full  flex-col justify-between items-start">
                <p className="text-white text-sm">{item.text}</p>
                <span>{item.date}</span>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </>
  );
}

export default InstagramItem;
