import React from "react";
import "./Slider4.css";

function Slider4() {
  const card = [
    {
      link: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Vector_10.svg?v=1698902843",
      text: "ayurvedic products",
    },
    {
      link: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_16.svg?v=1698902843",
      text: "lifestyle recommendation",
    },
    {
      link: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_17.svg?v=1698902842",
      text: "custom diet plan",
    },
    {
      link: "https://cdn.shopify.com/s/files/1/0781/6711/4011/files/Group_18.svg?v=1698902843",
      text: "expertn connect",
    },
  ];
  return (
    <div className="slider4 w-full h-screen bg-cover bg-center relative">
      <div className="slider4-content absolute top-[12%] left-[3%] w-2/4 flex flex-col">
        <span className=" font-serif mb-7 font-bold uppercase text-white text-left">
          the most trusted ayurvedic
        </span>
        <h2 className="mb-4 font-serif text-6xl font-semibold uppercase text-left  text-white ">
          <span className=" text-[#cbd82d] font-serif text-6xl font-semibold">
            dont't delay
          </span>{" "}
          your health concerns!
        </h2>
        <span className="text-white text-left text-base mb-4">
          consult with our acharyas (doctors) and get
        </span>
        <div className="small-cards flex justify-between flex-wrap gap-3 w-full mb-4">
          {card.map((item, index) => {
            return (
              <div className=" bg-white rounded-lg p-3 text-black text-lg font-bold w-[49%] flex items-center gap-[4%] capitalize">
                <img src={item.link} alt="" />
                <span className="text-black text-lg font-semibold">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        <button className="w-full rounded-xl text-center p-4 text-white font-bold uppercase border-2 hover:border-primary hover:text-primary hover:bg-white transition-all">
          book consultation @ rs 99
        </button>
      </div>
    </div>
  );
}

export default Slider4;
