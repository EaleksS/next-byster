"use client";

import { FC } from "react";
import styles from "./CheatInfo.module.scss";
import { useCheatsQuery } from "@/widgets/hooks/useCheatsQuery";
import { ICheats, IProducts } from "@/widgets/interface/cheats.interface";
import Image from "next/image";
import { Button, Loader, Text } from "@/shared";
import { Slider } from "@/entities";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useRouter } from "next/navigation";
import { dictionary } from "@/dictionaries/content";

interface Props {
	id: string;
	lang: string;
}

const findDay = (duration: number, lang: string = "ru"): string => {
	if (duration === 1) return lang === "ru" ? "1 день" : "1 day";
	if (duration === 7) return lang === "ru" ? "7 дней" : "7 days";
	if (duration === 14) return lang === "ru" ? "2 недели" : "2 weeks";
	if (duration === 31) return lang === "ru" ? "1 месяц" : "1 month ";

	return String(duration);
};

export const CheatInfo: FC<Props> = ({ id, lang }): JSX.Element => {
	const router = useRouter();

	const { isLoading, newData: data } = useCheatsQuery(
		lang === "ru" ? "RUB" : "USD"
	);

	const game: ICheats | undefined = !isLoading
		? [...data].filter((f) => id.includes(f.name.toLowerCase()))[0]
		: undefined;

	const productData: IProducts | undefined = game
		? [...game.products].find((item) => {
				return (
					Number(item.id) ===
					Number(id.replace(`${item.name.toLowerCase()}-v`, ""))
				);
		  })
		: undefined;

	if (!productData)
		return (
			<div
				style={{
					position: "fixed",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Loader />
			</div>
		);

	return (
		<div className={styles.cheat}>
			<div className={styles.prev}>
				<Image
					src={productData.image_url}
					alt="product"
					width={300}
					height={300}
					className={styles.prev_img}
				/>

				<div className={styles.prev_title}>
					<Text type="h1" up color="#808080">
						{productData.name}
					</Text>
					<div className={styles.detect}>
						<div
							className={`${styles.circle} ${
								productData.hack_status && styles.detec
							}`}
						></div>
						{productData.hack_status ? (
							<Text type="h3" up fw="600" color="#ff4040">
								{dictionary[lang].detect}
							</Text>
						) : (
							<Text type="h3" up fw="600">
								{dictionary[lang].unDetect}
							</Text>
						)}
					</div>
					<Text>
						{dictionary[lang].update} {productData.updated}
					</Text>
					<Text type="p" className={styles.descp}>
						{productData.additional_description}
					</Text>
					<div className={styles.prices}>
						{productData.prices
							.sort((a, b) => (a.amount > b.amount ? 1 : -1))
							.map((price, i) => (
								<Button
									key={i}
									type="primary"
									radius="10px"
									onClick={() => router.push("/download")}
								>
									{dictionary[lang].rotationBtn} {price.amount}
									{lang === "ru" ? " ₽" : " $"} -{" "}
									{findDay(price.duration, lang)}
								</Button>
							))}
					</div>
				</div>
			</div>
			<div className={styles.slider}>
				<Slider media={productData.media} />
			</div>

			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				className={styles.ReactMarkdown}
				components={{
					code({ node, inline, className, children, style, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						return !inline && match ? (
							<SyntaxHighlighter
								language={match[1]}
								PreTag="div"
								style={dracula}
								{...props}
							>
								{String(children).replace(/\n$/, "")}
							</SyntaxHighlighter>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
			>
				{productData.description}
			</ReactMarkdown>
		</div>
	);
};
