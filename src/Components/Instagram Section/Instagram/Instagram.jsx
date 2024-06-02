import React from "react";
import "./Instagram.css";
import img5 from "../../../assets/InstagramSection/5.jpg";
import InstagramItem from "../Instagram Section Item/InstagramItem";
import {
  firstSection,
  secondSection,
} from "../Instagram Images/InstagramImages";

function Instagram() {
  return (
    <div className=" mt-14">
      <div>
        <h2 className=" text-center text-[#006944] text-[34px]">
          Farm Naturelle on Instagram
        </h2>
      </div>
      <div className=" flex gap-[10px] h-[600px]">
        <InstagramItem section={firstSection} />
        <div className=" flex-1 cursor-pointer group relative flex border-solid border-red-900">
          <img
            src={img5}
            alt=""
            className=" group-hover:brightness-50 object-cover  absolute top-0 left-0 h-full w-full z-[-10]"
          />
          <div className=" group-hover:flex hidden">
            <p className="text-white ">
              Rise and Shine: Kick Hangovers to the Curb with Our Revitalizing
              Drink!
            </p>
            <span>May 20, 2024</span>
          </div>
        </div>
        <InstagramItem section={secondSection} />
      </div>
    </div>
  );
}

export default Instagram;
