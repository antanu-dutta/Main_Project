import React from "react";
import "./Welcome.css";
import creativeBanner from "../../assets/creative_banner.avif";
import creativeImg1 from "../../assets/creative_img-1.avif";
import creativeImg2 from "../../assets/creative_img-2.avif";

function CreatetiveBanner() {
  return (
    <div className="creative_banner bg-primary py-[73px] mt-5 relative">
      <img
        src={creativeBanner}
        alt=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
      <div className="max-w-[1180px] mx-auto px-[30px] flex justify-center flex-wrap gap-[10px]">
        <div className=" hover:shadow-md flex flex-col-reverse w-[47%] justify-end p-4 cursor-pointer">
          <a href="" className="relative block pt-[100%]">
            <img
              src={creativeImg1}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </a>
          <div className="text-left">
            <h4 className="w-full static text-[#bac34e] text-left font-jost text-[16px] font-normal leading-[23.054px] mb-[-6px]">
              Welcome to Farm Naturelle
            </h4>
            <p className="creative-banner__item-description text-white mb-27 font-jost text-[36px] font-medium leading-[48px] text-left mt-10">
              Here Nature's Purest Treasures are nurtured and harvested for your
              well-being.
            </p>
          </div>
        </div>
        <div className=" hover:shadow-md creative-banner__item flex flex-col w-[47%] justify-end p-4 cursor-pointer">
          <a
            href=""
            className="creative-banner__item_image-wrapper block relative pt-[100%]"
          >
            <img
              src={creativeImg2}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </a>
          <div className="text-left">
            <p className="creative-banner__item-description font-jost text-base font-normal leading-[23.976px] text-white text-left">
              At Farm Naturelle, we believe that the path to true wellness
              begins with embracing the gifts of nature. Through our organic
              farming methods and sustainable approach, we deliver a diverse
              range of products that are not only good for you but also good for
              the planet. Join us as we cultivate a healthier future, one
              harvest at a time, and savor the authentic flavors of Farm
              Naturelle that nourish both body and soul.
            </p>
            <a
              href=""
              className="rounded-[12px] font-jost mr-4 text-[14px] font-semibold leading-[18px] uppercase transition duration-300 mt-7 py-2 px-[31px] mb-10 inline-block text-base border border-white text-white"
            >
              KNOW MORE
            </a>
            <a
              href=""
              className="creative-banner__item-link rounded-[12px] font-jost mr-4 text-[14px] font-semibold leading-[18px] uppercase transition duration-300 mt-7 py-2 px-[31px] mb-10 inline-block border border-primary text-primary bg-white"
            >
              BOOK A FARM VISIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatetiveBanner;
