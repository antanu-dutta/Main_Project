import React from "react";
import logo from "../../../assets/logo.webp";

function FooterDown() {
  const categories = [
    "Cooking Oil",
    "A2 Ghee",
    "Apple Cidar Vinegar",
    "Herbal juice",
    "Hill Turmeric",
    "Amla candy",
    "Wellness Oils",
    "Stevia",
  ];
  const importantLinks = [
    "About Us",
    "Our Farms",
    "Contact Us",
    "Bulk Purchase",
    "Blogs",
    "Privacy Policy",
    "Terms and Conditions",
    "Shipping Policy",
    "Refund Policy",
  ];
  return (
    <div id="foote-down" className="bg-primary text-white py-28">
      <div className="container">
        <div id="footer-wrapper" className="flex gap-8">
          <div className="flex flex-1 flex-col items-start gap-6">
            <img src={logo} alt="" className=" w-20" />
            <p className=" text-white text-sm font-semibold">
              Become a Insider and get 10% off your order today. Plus we'll keep
              you up-to-date with the latest theme news.
            </p>
            <div className="flex  gap-2 rounded-sm px-3 items-center bg-white overflow-hidden">
              <input
                type="text"
                className=" border-none outline-none p-2 text-sm text-black"
                placeholder="Enter you Email Address"
              />
              <i class="fa-solid fa-arrow-right text-black"></i>
            </div>
          </div>
          <ul className="flex flex-1 flex-col gap-6">
            <span className="uppercase font-bold text-normal">categories</span>
            {categories.map((item, index) => {
              return <li className=" text-normal font-semibold">{item}</li>;
            })}
          </ul>
          <ul className="flex flex-1 flex-col gap-6">
            <span className="uppercase font-bold text-normal">
              important links
            </span>
            {importantLinks.map((item, index) => {
              return <li className=" text-normal font-semibold">{item}</li>;
            })}
          </ul>
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-normal font-medium">
              Phone: <br /> <span>9810988725, 8130531333</span>
            </p>
            <p className="text-normal font-medium">
              Email: <br /> <span>hello@farmnaturelle.com</span>
            </p>
            <div className="flex gap-5 text-[30px] p-2">
              <i class="fa-brands fa-facebook cursor-pointer"></i>
              <i class="fa-brands fa-square-instagram cursor-pointer"></i>
              <i class="fa-brands fa-whatsapp cursor-pointer"></i>
              <i class="fa-brands fa-youtube cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterDown;
