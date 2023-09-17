"use client";

import { FC, useState } from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from "./viewPhoto.module.scss";
import { MdPlayArrow } from "react-icons/md";

import { SwiperType } from "../../types/Swiper";
import Image from "next/image";
import { Loader, useWindowDimensions } from "@/shared";
import FilePlayer from "react-player/file";
import { IMedia } from "@/widgets/interface/cheats.interface";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoClose } from "react-icons/io5";

interface Props {
	media: IMedia[];
}

export const Slider: FC<Props> = ({ media }): JSX.Element => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const [prevActive, setPrevActive] = useState(true);
	const [nextActive, setNextActive] = useState(false);
	const [swiperGallery, setSwiperGallery] = useState<SwiperType>();
	const [prevActiveGallery, setPrevActiveGallery] = useState(true);
	const [nextActiveGallery, setNextActiveGallery] = useState(false);

	const [openGallery, setOpenGallery] = useState<boolean>(false);
	const [galleryActive, setGalleryActive] = useState<number>();
	const [activeVideoIndex, setActiveVideoIndex] = useState<number>();

	const { width } = useWindowDimensions();

	const isActice = () => {
		setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
		setNextActive(
			Number(swiper?.slides?.length) ===
				Number(swiper && swiper?.activeIndex + 3)
		);
	};

	const isActiceGallery = () => {
		setPrevActiveGallery(
			1 === Number(swiperGallery && swiperGallery?.activeIndex + 1)
		);
		setNextActiveGallery(
			Number(swiperGallery?.slides?.length) ===
				Number(swiperGallery && swiperGallery?.activeIndex + 1)
		);
		setActiveVideoIndex(-1);
	};

	return (
		<>
			<div className="slider-wrapper" id="slider">
				{media.length ? (
					<>
						<Swiper
							onSwiper={(s) => setSwiper(s)}
							onSlideChange={() => isActice()}
							slidesPerView={width < 900 ? 1 : 2}
							spaceBetween={16}
							pagination={true}
							// onActiveIndexChange={(i) => setGalleryActive(i.activeIndex)}
							modules={[Pagination, Autoplay]}
							className="mySwiper"
						>
							{media.map((e, index) => (
								<SwiperSlide
									key={index}
									onClick={() => {
										setGalleryActive(index);
										setOpenGallery(true);
									}}
								>
									<div
										className={`img-slider ${e.type === "video" && "video"}`}
									>
										{e.type === "img" ? (
											<Image
												src={e.url}
												alt="product"
												width={1920}
												height={1080}
											/>
										) : (
											<Image
												src={e.thumbnail ? e.thumbnail : "/image.webp"}
												alt="thumbnail"
												width={1920}
												height={1080}
												className="video"
											/>
										)}
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						{media.length > 2 && (
							<>
								<div
									className="prev"
									onClick={() => swiper && swiper.slidePrev()}
								>
									<MdPlayArrow
										style={prevActive ? { opacity: 0.2 } : {}}
										className="arrow_prev"
									/>
								</div>
								<div
									className="next"
									onClick={() => swiper && swiper.slideNext()}
								>
									<MdPlayArrow
										style={nextActive ? { opacity: 0.2 } : {}}
										className="arrow_next"
									/>
								</div>
							</>
						)}
					</>
				) : (
					"Фоток нету"
				)}
			</div>
			{openGallery && (
				<div
					className={styles.view_photo}
					onClick={() => setOpenGallery(false)}
				>
					<IoClose
						className={styles.close}
						onClick={() => setOpenGallery(false)}
					></IoClose>
					<div onClick={(e) => e.stopPropagation()}>
						<Swiper
							onSwiper={(s) => setSwiperGallery(s)}
							onSlideChange={() => isActiceGallery()}
							slidesPerView={1}
							pagination={false}
							modules={[Pagination, Autoplay]}
							className={styles.view_slider}
							initialSlide={galleryActive}
						>
							{media.map((e, index) => (
								<SwiperSlide key={index}>
									<div className={`img-slider ${styles.img_slider}`}>
										{e.type === "img" ? (
											<Image
												src={e.url}
												alt="product"
												width={1920}
												height={1080}
											/>
										) : (
											<FilePlayer
												className="iframe"
												width="100%"
												style={{ borderRadius: 10 }}
												height="100%"
												onPlay={() => setActiveVideoIndex(index)}
												playing={activeVideoIndex === index}
												controls={true}
												fallback={
													<div className="loaderPlayer">
														<Loader />
													</div>
												}
												url={e.url}
											/>
										)}
									</div>
								</SwiperSlide>
							))}
							{media.length > 2 && (
								<>
									<div
										className={styles.prev}
										onClick={() => swiperGallery && swiperGallery.slidePrev()}
									>
										<MdPlayArrow
											style={prevActiveGallery ? { opacity: 0.2 } : {}}
											className={styles.arrow_prev}
										/>
									</div>
									<div
										className={styles.next}
										onClick={() => swiperGallery && swiperGallery.slideNext()}
									>
										<MdPlayArrow
											style={nextActiveGallery ? { opacity: 0.2 } : {}}
											className={styles.arrow_next}
										/>
									</div>
								</>
							)}
						</Swiper>
					</div>
				</div>
			)}
		</>
	);
};
