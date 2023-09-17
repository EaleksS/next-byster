"use client";

import { FC } from "react";
import styles from "./OurCheats.module.scss";
import { Cheats } from "@/entities";
import { ICheats } from "@/widgets/interface/cheats.interface";
import { Loader } from "@/shared";
import { useCheatsQuery } from "@/widgets/hooks/useCheatsQuery";

interface Props {
	lang: string;
}

export const dataWow: ICheats[] = [
	{
		id: 1,
		name: "WOW",
		description: "WOW",
		logo_img: "/WoW_icon.png",
		bg_img: "/wow.jpg",
		min_price: 199,
		main_updated: "27.02.2023",
		main_hack_status: 0,
		main_status_time: "27.02.2023",
		media: [],
		products: [],
	},
];

export const OurCheats: FC<Props> = ({ lang }): JSX.Element => {
	const { isLoading, newData: data } = useCheatsQuery(
		lang === "ru" ? "RUB" : "USD"
	);

	return (
		<div
			className={` ${styles.our_cheats}`}
			onClick={(e) => e.stopPropagation()}
		>
			<div className={styles.items}>
				<Cheats lang={lang} {...dataWow[0]} />

				{!isLoading ? (
					data.length &&
					data.map((e: ICheats) => <Cheats lang={lang} key={e.id} {...e} />)
				) : (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							position: "absolute",
							left: 0,
							right: 0,
						}}
					>
						<Loader />
					</div>
				)}
			</div>
		</div>
	);
};
