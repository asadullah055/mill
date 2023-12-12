import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper border"
      >
        <SwiperSlide>
          <img src="/image/02.png" className="img-fluid" height={450} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image/02.png" className="img-fluid" height={450} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
