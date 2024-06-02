import React, { useState } from "react";
import "./Menubar.css";
import logo from "../../assets/logo.webp";

function Menubar() {
  const [hover, setHover] = useState();
  const ulItems = [
    {
      heading: "Shop by Concern",
      items: [
        "Piles Relief",
        "Healthy Liver",
        "Magic Man Booster",
        "Digestive Fitness",
        "Easing Diabetes",
        "Hangover Shots",
        "Revital Body Shots",
        "Kidney Stone Care",
        "Glowing Women",
        "Stress Buster",
        "Powerful Heart",
        "Pain Relief",
        "Win Weight",
        "Detox Miracle Shot",
      ],
    },
    {
      heading: "Shop by Products",
      items: [
        "Honey",
        "Cooking oil",
        "A2 Desi Cow Ghee",
        "Apple Cidar Vinegar",
        "Herbal Juices",
        "Hill Turmeric",
        "Jaggery Amla candy",
        "Wellness Oils",
        "Chyawanprash",
        "Nuts in Honey",
        "Stevia",
        "Shilajit",
        "Saffron",
        "Mouth Freshner",
        "Condiments",
      ],
    },
    {
      heading: "Business with us",
      items: [
        "Private Label",
        "Bulk purchase (B2B)",
        "Dealership Enquiry",
        "Contact Us",
      ],
    },
    {
      heading: "Consult an Acharya (Doctor)",
      items: null,
    },
    {
      heading: "Gifting",
      items: null,
    },
  ];
  const icons = [
    { class: "fa-regular fa-heart" },
    { class: "fa-solid fa-magnifying-glass" },
    { class: "fa-regular fa-user" },
    { class: "fa-solid fa-cart-shopping" },
  ];
  return (
    <div className="menubar-bg bg-white  relative">
      <div className="container">
        <div className="menubar flex justify-between">
          <div className="menubar-left flex justify-between items-center gap-4">
            <img src={logo} alt="" />
            <ul className="flex ">
              {ulItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`text-black font-bold px-4 flex items-center gap-3 cursor-pointer ${
                      item.items ? "border-r border-[#a8b324]" : ""
                    } `}
                  >
                    {item.heading}
                    {item.items ? (
                      <i class="fa-solid fa-sort-down -mt-2"></i>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="menubar-right">
            <div className="icons">
              <ul className="flex gap-6 items-center justify-center ">
                {icons.map((item, index) => (
                  <li className={`${item.class} text-[19px]  relative`}>
                    {item.class.includes("heart") ||
                    item.class.includes("shopping") ? (
                      <div className="w-4 h-4 bg-primary rounded-full absolute -top-1 left-3 flex items-center justify-center text-[8px] text-white">
                        0
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
