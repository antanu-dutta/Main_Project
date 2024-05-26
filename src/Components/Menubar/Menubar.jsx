import React from "react";
import "./Menubar.css";
import logo from "../../assets/logo.webp";
// import Menuitem from "../Menuitem/Menuitem";
// import { menuItem1, menuItem2, menuItem3 } from "../MenuItems/MenuItems";


function Menubar() {
  return (
    <div className="menubar-bg">
      <div className="container">
        <div className="menubar">
          <div className="menubar-left">
            <img src={logo} alt="" />
            <ul>
              <li>
                <a href="#">
                  Shop by Concern <span class="fa fa-angle-down"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  Shop by Products <span class="fa fa-angle-down"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  Business with us <span class="fa fa-angle-down"></span>
                </a>
              </li>
              <li>
                <a href="#">Consult an Acharya (Doctor)</a>
              </li>
              <li>
                <a href="#">Gifting</a>
              </li>
            </ul>
          </div>
          <div className="menubar-right">
            <div className="icons">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/wishlist.svg?v=1695633214"
                      alt=""
                    />
                    <span>0</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/seach.svg?v=1695633116"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0781/6711/4011/files/account.svg?v=1695630427"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://farmnaturelle.com/cdn/shop/t/64/assets/cart-alt_60x.png?v=6375129234202687581713351401"
                      alt=""
                    />
                    <span>0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
