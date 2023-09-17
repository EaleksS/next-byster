"use client";

import Image from "next/image";
import classes from "./Download.module.css";
import Link from "next/link";
import { dictionary } from "@/dictionaries/content";
import { Locale } from "@/i18-config";
import { useCookies } from "next-client-cookies";
import { useWindowDimensions } from "@/shared";

const Download = ({ params: { lang } }: { params: { lang: Locale } }) => {
	const cookies = useCookies();
	const ref = cookies.get("ref");
	const { width } = useWindowDimensions();

	return (
		<div className={`container ${classes.mt}`}>
			<div className={classes.title}>
				<Link href="/" className={classes.imgLink}>
					<Image
						className={classes.imgLogo}
						src="/logo.png"
						alt="logo"
						width={350}
						height={100}
					/>
				</Link>
				{width < 1000 ? (
					lang === "ru" ? (
						"МОЖНО СКАЧАТЬ ТОЛЬКО С ПК"
					) : (
						"CAN ONLY BE DOWNLOADED FROM A PC"
					)
				) : (	
					<a
						className={classes.link}
						href={`https://byster.one/download${
							ref ? `${ref !== "null" ? `?ref=${ref}` : ""}` : ""
						}`}
						download
						rel="noopener"
					>
						{dictionary[lang]?.download}
					</a>
				)}
			</div>

			{width < 1000 ? (
				<></>
			) : (
				<div className={classes.content}>
					<h1>{dictionary[lang]?.instruction}</h1>
					<div className={classes.instruction}>
						<h3>
							{dictionary[lang]?.loading} <br />
							<b style={{ fontSize: "20px" }}>
								{dictionary[lang]?.loadingText}
							</b>
						</h3>
						<div>
							<h2>1</h2>

							<p>{dictionary[lang]?.loadingText2}</p>
							<Image
								src="/first_image.png"
								alt="first_image"
								width={939}
								height={522}
							/>
						</div>
					</div>
					<div className={classes.instruction}>
						<h3>{dictionary[lang]?.register}</h3>
						<div>
							<Image
								src="/second_image.png"
								alt="second_image"
								width={340}
								height={470}
							/>
							<p>{dictionary[lang]?.registerText}</p>
							<h2>2</h2>
						</div>
					</div>
					<div className={classes.instruction}>
						<h3>{dictionary[lang]?.freeTest}</h3>
						<div>
							<h2>3</h2>
							<p>{dictionary[lang]?.freeTestText}</p>
							<Image
								src="/third_image.png"
								alt="third_image"
								width={340}
								height={470}
							/>
						</div>
					</div>
					<div className={classes.instruction}>
						<h3>{dictionary[lang]?.start}</h3>
						<div>
							<Image
								src="/fourth_image.png"
								alt="fourth_image"
								width={971}
								height={582}
							/>
							<p>{dictionary[lang]?.startText}</p>
							<h2>4</h2>
						</div>
					</div>
					<div className={classes.instruction}>
						<h3>{dictionary[lang]?.settings}</h3>
						<div>
							<h2>5</h2>
							<p>{dictionary[lang]?.settingsText}</p>
							<Image
								src="/fifth_image.png"
								alt="fifth_image"
								width={973}
								height={580}
							/>
						</div>
					</div>
					{/* <div data-aos="fade-up" className={classes.instruction}>
			<h3>Видеоинструкция</h3>
			<div className={classes.iframe}>...</div>
		</div> */}
				</div>
			)}
		</div>
	);
};

export default Download;
