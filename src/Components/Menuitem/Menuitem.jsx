import React from "react";
import "./Menuitem.css";

function Menuitem({ items }) {
  return (
    <ul className="menuitem">
      {items.map((item) => (
        <li>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default Menuitem;
