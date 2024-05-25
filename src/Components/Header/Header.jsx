import React from "react";
import "./Header.css";
import Offer from "../Offer/Offer";
import Menubar from "../Menubar/Menubar";

function Header({ children }) {
  return (
    <header>
      <Offer />
      <Menubar />
    </header>
  );
}

export default Header;
