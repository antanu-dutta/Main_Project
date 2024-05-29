import GiftSlider from "./Gift Item Slider/GiftSlider";
import "./Gift.css";

function Gift() {
  return (
    <div className="container gift_container">
      <h2 className="gift-text">
        Gift Your Loved ones Healthy Living <span>starts @ Rs 499 only</span>
      </h2>
      <div className="gift-items-container ">
        <GiftSlider />
      </div>
      <div className="flex items-center justify-center">
        <button className="GD">SHOP THIS</button>
      </div>
    </div>
  );
}

export default Gift;
