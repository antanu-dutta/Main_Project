import React from "react";
import "./Header.css";
import Offer from "../Offer/Offer";
import Menubar from "../Menubar/Menubar";

function Header({ children }) {
  return (
    <header className=" fixed top-0 left-0 z-100 w-full">
      <Offer />
      <Menubar />
    </header>
  );
}

export default Header;
