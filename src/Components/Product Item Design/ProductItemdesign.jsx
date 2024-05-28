import React from "react";
import "./ProductItemdesign.css";
import { honeyProduct } from "../Honey Section/Honey Section Products/HoneySectionProduct";
import heart_icon from "../../assets/SVG/heart.svg";

function ProductItemdesign() {
  return (
    <>
      {honeyProduct.map((item) => {
        return (
          <div className="product">
            <div className="product_photo mb-6">
              <div className="fav flex justify-between mb-5">
                <span>Bestseller</span>
                <img src={heart_icon} alt="" />
              </div>
              <div className="product-images">
                <img src={item.path} alt="" className="product-img" />
                <img
                  src={item.hoverPath}
                  alt=""
                  className="product_hover_img"
                />
              </div>
            </div>
            <div className="product_details">
              <h3>{item.title}</h3>
              <div className="price">
                <div className="old_price">Rs {item.old_price}</div>
                <div className="new_price">Rs. {item.new_price}</div>
                <div className="discount">{item.offer}</div>
              </div>
              <button className="cart-btn">add to cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductItemdesign;
