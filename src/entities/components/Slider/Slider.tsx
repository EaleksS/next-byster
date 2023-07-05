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
import { useWindowDimensions } from "@/shared";
import { IProduct } from "@/widgets/interface/products.interface";

export const Slider: FC<IProduct> = (props): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const { width } = useWindowDimensions();
  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(false);

  const isActice = () => {
    setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
    setNextActive(
      Number(swiper?.slides?.length) ===
        Number(swiper && swiper?.activeIndex + 3)
    );
  };

  const gallery: string[] = [];

  props.rotations.forEach((e) => {
    e.media.forEach((e) => {
      if (e.type !== "img") return;

      gallery.push(e.url);
    });
  });

  return (
    <div className="slider-wrapper" id="slider">
      {gallery.length ? (
        <>
          <Swiper
            onSwiper={(s) => setSwiper(s)}
            onSlideChange={() => isActice()}
            slidesPerView={width < 900 ? 2 : 3}
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {gallery.map((e, index) => (
              <SwiperSlide key={index}>
                <div className="img-slider">
                  <Image src={e} alt="product" width={500} height={500} />
                </div>
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};
