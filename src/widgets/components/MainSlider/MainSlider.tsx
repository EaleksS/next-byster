"use client";

import { FC, useState } from "react";
import styles from "./MainSlider.module.scss";
import { Pagination, Navigation } from "swiper";
import { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { WhyUs, Accommodation, About, Socials, Up } from "@/entities";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperType } from "@/entities/types/Swiper";
import Image from "next/image";
import { useWindowDimensions } from "@/shared";

interface Props {
	lang: string;
}

export const MainSlider: FC<Props> = ({ lang }): JSX.Element => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const { width } = useWindowDimensions();

	return (
		<>
			<div className={styles.main_slider}>
				<Swiper
					onSwiper={(s) => setSwiper(s)}
					spaceBetween={16}
					pagination={true}
					autoplay={true}
					modules={[Pagination, Autoplay, Navigation]}
					loop={true}
					className={styles.my_swiper}
				>
					<SwiperSlide>
						<Accommodation lang={lang} />
					</SwiperSlide>
					<SwiperSlide>
						<WhyUs lang={lang} />
					</SwiperSlide>
					<SwiperSlide>
						<About lang={lang} />
					</SwiperSlide>
					<SwiperSlide>
						<Socials lang={lang} />
					</SwiperSlide>
				</Swiper>
				<button
					className="slide_prev__button"
					onClick={() => swiper?.slidePrev()}
				>
					<Image src="/prev_button.png" alt="prev" width="30" height="30" />
				</button>
				<button
					className="slide_next__button"
					onClick={() => swiper?.slideNext()}
				>
					<Image src="/next_button.png" alt="next" width="30" height="30" />
				</button>
			</div>
			<Up />
		</>
	);
};
