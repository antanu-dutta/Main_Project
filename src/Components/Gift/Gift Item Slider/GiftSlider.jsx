import React from "react";
import { GiftItem } from "./Gift Items/GiftItem";
import GiftItems from "./Gift Items/GiftItems";

function GiftSlider() {
  return <GiftItems GiftItem={GiftItem} />;
}

export default GiftSlider;
