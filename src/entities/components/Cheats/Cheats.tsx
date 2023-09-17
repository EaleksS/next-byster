import { FC } from "react";
import styles from "./Cheats.module.scss";
import Image from "next/image";
import { Button, Text } from "@/shared";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ICheats } from "@/widgets/interface/cheats.interface";
import { useRouter } from "next/navigation";
import { dictionary } from "@/dictionaries/content";

interface Props extends ICheats {
	lang: string;
}

export const Cheats: FC<Props> = (props): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.cheats}>
			<div className={styles.bg}>
				{props.bg_img && (
					<Image
						src={props.bg_img}
						alt="product"
						width={500}
						height={300}
						priority
					/>
				)}
				<div className={styles.title}>
					{props.logo_img && (
						<Image src={props.logo_img} alt="logo" width={100} height={100} />
					)}
					<Text type="h3" up fw="600">
						{props.name}
					</Text>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.detect}>
					<div
						className={`${styles.circle} ${
							props.main_hack_status && styles.detec
						}`}
					></div>
					{props.main_hack_status ? (
						<Text type="h3" up fw="600" color="#ff4040">
							{dictionary[props.lang]?.detect}
						</Text>
					) : (
						<Text type="h3" up fw="600">
							{dictionary[props.lang]?.unDetect}
						</Text>
					)}
				</div>
				<Text>с {props.main_status_time}</Text>
				<Button
					type="primary"
					radius="10px"
					onClick={() => {
						if (props.name === "WOW") return router.push(`/${props.lang}/wow`);

						router.push(
							`/${props.lang}/games/${props.name.toLowerCase()}-v${
								props.products[0].id
							}`
						);
					}}
				>
					{props.name === "WOW"
						? props.lang === "ru"
							? "перейти"
							: "go"
						: `${dictionary[props.lang]?.from} ${props.min_price} ${
								props.lang === "ru" ? "₽" : "$"
						  }`}
					<HiArrowNarrowRight className={styles.icon} />
				</Button>
			</div>
		</div>
	);
};
