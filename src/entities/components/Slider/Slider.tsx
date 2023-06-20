"use client";

import { FC, useState } from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { MdPlayArrow } from "react-icons/md";

import { SwiperType } from "../../types/Swiper";
import Image from "next/image";

export const Slider: FC = (): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperType>();

  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(false);

  const isActice = () => {
    setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
    setNextActive(
      Number(swiper?.slides?.length) ===
        Number(swiper && swiper?.activeIndex + 3)
    );
  };

  return (
    <div className="slider-wrapper" id="slider">
      <Swiper
        onSwiper={(s) => setSwiper(s)}
        onSlideChange={() => isActice()}
        slidesPerView={3}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {[1, 2, 3, 4].map((e) => (
          <SwiperSlide key={e}>
            <Image
              src="/12QOSLDlCH0.jpg"
              alt="product"
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev" onClick={() => swiper && swiper.slidePrev()}>
        <MdPlayArrow
          style={prevActive ? { opacity: 0.2 } : {}}
          className="arrow_prev"
        />
      </div>
      <div className="next" onClick={() => swiper && swiper.slideNext()}>
        <MdPlayArrow
          style={nextActive ? { opacity: 0.2 } : {}}
          className="arrow_next"
        />
      </div>
    </div>
  );
};
