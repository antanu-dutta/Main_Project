import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider4 from "./Slider4/Slider4";
import Slider1 from "./Slider1/Slider1";
import Slider2 from "./Slider2/Slider2";
import Slider3 from "./Slider3/Slider3";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="slider">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slider1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider3 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
