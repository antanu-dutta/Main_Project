import GiftSlider from "./Gift Item Slider/GiftSlider";
import "./Gift.css";

function Gift() {
  return (
    <div className="container gift_container flex flex-col justify-center">
      <h2 className="mb-5 text-black text-center font-jost text-4xl not-italic font-medium leading-[48px]">
        Gift Your Loved ones Healthy Living{" "}
        <span className="text-[primary] text-4xl font-medium">
          starts @ Rs 499 only
        </span>
      </h2>
      <div className="">
        <GiftSlider />
      </div>
      <div className="flex items-center justify-center">
        <button className="py-4 px-14 bg-transparent border border-[#006944] rounded-lg text-[#006944] font-jost text-sm not-italic font-semibold mt-[114px] leading-[18px] uppercase transition duration-500 hover:bg-primary hover:text-white">
          SHOP THIS
        </button>
      </div>
    </div>
  );
}

export default Gift;
