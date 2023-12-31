"use client";

import { FC, useState } from "react";
import styles from "./Products.module.scss";
import { Button, Loader, Text } from "@/shared";
import { Product } from "@/entities";
import { getProducts } from "@/widgets/services/products.service";
import { IProduct } from "@/widgets/interface/products.interface";
import { dictionary } from "../../../dictionaries/content";
import { useQuery } from "@tanstack/react-query";
import { errorToJSON } from "next/dist/server/render";

export const Products: FC<{ lang: string }> = ({ lang }): JSX.Element => {
	const [active, setActive] = useState<string>("pvp");

	const { data, isLoading } = useQuery({
		queryKey: ["products"],
		queryFn: () => getProducts.getList(),
		keepPreviousData: true,
	});

	console.log(data);

	return (
		<div className={`container ${styles.products}`}>
			<div className={styles.name}>
				<Text type="h2" up center>
					{dictionary[lang]?.rotationTitle}
				</Text>
				<div className={styles.back}>rotation</div>
			</div>
			<div className={styles.btns}>
				<Button
					type={"choice"}
					isActive={active === "pvp" ? true : false}
					onClick={() => setActive("pvp")}
				>
					PvP
				</Button>
				<Button
					type="choice"
					isActive={active === "pve" ? true : false}
					onClick={() => setActive("pve")}
				>
					PvE
				</Button>
				<Button
					type={"choice"}
					isActive={active === "utility" ? true : false}
					onClick={() => setActive("utility")}
				>
					Utitlity
				</Button>
			</div>

			<div className={styles.items}>
				{!isLoading ? (
					data
						.filter((filter: IProduct) => {
							if (active === "utility") {
								return (
									filter.name.toLowerCase().includes("utility") ||
									filter.name.toLowerCase().includes("visibility") ||
									filter.name.toLowerCase().includes("enemy") ||
									filter.name.toLowerCase().includes("farm")
								);
							}

							return filter.name.toLowerCase().includes(active.toLowerCase());
						})
						.map((e: IProduct) => <Product key={e.id} {...e} lang={lang} />)
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
