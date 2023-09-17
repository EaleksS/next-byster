import { FC } from "react";
import styles from "./Card.module.scss";
import Image from "next/image";
import { ICheats } from "@/widgets/interface/cheats.interface";
import { Text } from "@/shared";
import { BsDot } from "react-icons/bs";
import { dictionary } from "@/dictionaries/content";
import { useRouter } from "next/navigation";

interface Props extends ICheats {
	lang: string;
}

const countDetect = (props: Props) => {
	return props.products.reduce(function (acc, e) {
		if (!e.hack_status) return acc + 0;

		return acc + 1;
	}, 0);
};

export const Card: FC<Props> = (props) => {
	const router = useRouter();

	return (
		<div
			className={styles.card}
			onClick={() => {
				if (props.name === "WOW") return router.push(`/${props.lang}/wow`);

				router.push(
					`/${props.lang}/games/${props.name.toLowerCase()}-v${
						props.products[0].id
					}`
				);
			}}
		>
			<Image
				src={props.bg_img ? props.bg_img : ""}
				alt={props.name ? props.name : "img"}
				height={600}
				width={600}
			/>
			<div className={styles.name}>
				<Text>{props.name}</Text>
			</div>
			<div className={styles.title}>
				<div className={styles.top_info}>
					<Text>
						{props.products.length ? props.products.length : 36}{" "}
						{props.products.length === 1
							? props.lang === "ru"
								? "товар"
								: "product"
							: props.lang === "ru"
								? "товаров"
								: "products"}
					</Text>
					<Text type="h3" up fw="600" color="green">
						{/* {countDetect(props)} */}
						{props.lang === "ru" ? "Безопасно" : "Security"}
					</Text>
				</div>
				<div className={styles.main_info}>
					{/* <Text type="h3">{props.main_updated}</Text> */}
					<Text type="h3">
						{dictionary[props.lang]?.from}{" "}
						<b style={{ color: "#F0B81C" }}> {props.min_price}</b>{" "}
						{props.lang === "ru" ? "руб" : "$"}
					</Text>
				</div>
			</div>
		</div>
	);
};
