import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/virtual";

import { Autoplay, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";
const Hero = () => {
  const [img, setImg] = useState([0]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/database/slider.json");
      const res = await data.json();
      setImg(res);
    })();
  }, []);

  return (
    <>
      <Swiper
        pagination={true}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
        }}
        breakpoints={{
          0: {
            // width: 576,
            slidesPerView: 1,
          },
          769: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
        loop={true}
        modules={[Pagination, Autoplay, Virtual]}
        className="mySwiper"
      >
        {img &&
          img.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Hero;
