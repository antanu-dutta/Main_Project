import React from "react";
import "./Welcome.css";
import creativeBanner from "../../assets/creative_banner.avif";
import creativeImg1 from "../../assets/creative_img-1.avif";
import creativeImg2 from "../../assets/creative_img-2.avif";

function CreatetiveBanner() {
  return (
    <div className="creative_banner mt-5">
      <img src={creativeBanner} alt="" />
      <div className="creative_banner_container">
        <div className="creative-banner__item">
          <a href="" className="creative-banner__item_image-wrapper">
            <img src={creativeImg1} alt="" />
          </a>
          <div className="banner_content">
            <h4 className="creative-banner__item-title">
              Welcome to Farm Naturelle
            </h4>
            <p className="creative-banner__item-description">
              Here Nature's Purest Treasures are nurtured and harvested for your
              well-being.
            </p>
          </div>
        </div>
        <div className="creative-banner__item">
          <a href="" className="creative-banner__item_image-wrapper">
            <img src={creativeImg2} alt="" />
          </a>
          <div className="banner_content">
            <p className="creative-banner__item-description">
              At Farm Naturelle, we believe that the path to true wellness
              begins with embracing the gifts of nature. Through our organic
              farming methods and sustainable approach, we deliver a diverse
              range of products that are not only good for you but also good for
              the planet. Join us as we cultivate a healthier future, one
              harvest at a time, and savor the authentic flavors of Farm
              Naturelle that nourish both body and soul.
            </p>
            <a href="" className="creative-banner__item-link custom_btnn">
              KNOW MORE
            </a>
            <a href="" className="creative-banner__item-link failed_btn">
              BOOK A FARM VISIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatetiveBanner;
