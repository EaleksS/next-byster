"use client";

import { FC } from "react";
import styles from "./ListCheats.module.scss";
import { useCheatsQuery } from "@/widgets/hooks/useCheatsQuery";
import { ICheats } from "@/widgets/interface/cheats.interface";
import { Card } from "@/entities";
import { Loader } from "@/shared";
import { dataWow } from "../OurCheats/OurCheats";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
	lang: string;
}

export const ListCheats: FC<Props> = ({ lang }) => {
	const { isLoading, newData: data } = useCheatsQuery(
		lang === "ru" ? "RUB" : "USD"
	);

	return (
		<div className={`container ${styles.list}`}>
			{data.length > 1 && (
				<Link href={`/${lang}/games`} className={styles.to}>
					Показать еще <FaArrowRightLong size={16} className={styles.icon} />
				</Link>
			)}
			<div className={styles.items}>
				<Card lang={lang} {...dataWow[0]} />

				{!isLoading ? (
					data.length &&
					data.map((e: ICheats, index) => {
						if (index + 1 > 2) return;

						return <Card lang={lang} key={e.id} {...e} />;
					})
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
