import React from "react";
import "./Iconstrip.css";

function Iconstrip({ strips }) {
  return (
    <>
      <div className="py-3 px-0 bg-primary">
        <div className="icon-strip_container w-[1350px]  mx-auto flex flex-wrap px-4">
          {strips.map((item, index) => (
            <div
              className="icon-strip_item flex gap-3 items-center flex-1 text-center"
              key={index}
            >
              <img src={item.path} alt="" className="w-[38px] mw-100 m-0" />
              <h4 className=" text-sm m-0 font-semibold text-white">
                {item.content}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Iconstrip;
