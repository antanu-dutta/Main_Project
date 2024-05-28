import React, { createContext } from "react";
import { Oil } from "../Buy Product/Producs/Oil";
import { Ghee } from "../Buy Product/Producs/Ghee";
import { Honey } from "../Buy Product/Producs/Honey";

export const Product = createContext({ Oil, Ghee, Honey });

function Context({ children }) {
  return (
    <Product.Provider value={{ Oil, Ghee, Honey }}>{children}</Product.Provider>
  );
}

export default Context;
