"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Burger, Logo, Nav } from "@/entities";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCookies } from "next-client-cookies";

export const Header: FC<{ lang: string }> = ({ lang }): JSX.Element => {
	const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

	const router = useRouter();
	const ref = useSearchParams();
	const cookies = useCookies();
	const pathname = usePathname();

	useEffect(() => {
		if (cookies.get("ref") === "null" || !cookies.get("ref")) {
			cookies.set("ref", String(ref.get("ref")));
		}
	}, []);

	return (
		<header
			className={`${styles.header} ${
				pathname.includes("funpay") && styles.dsnone
			}`}
		>
			<div className={`${styles.cont}`}>
				<Logo />
				<Nav lang={lang} />
				<BurgerMenu
					isActive={isActiveBurger}
					setIsActive={setIsActiveBurger}
					lang={lang}
				/>
				<div className={styles.burger}>
					<Burger isActive={isActiveBurger} setIsActive={setIsActiveBurger} />
				</div>
				<div className={styles.lang}>
					<span
						className={lang === "ru" ? styles.active : ""}
						onClick={() =>
							router.push(
								`/ru${window.location.pathname
									.replace("/en", "")
									.replace("/ru", "")}`
							)
						}
					>
						RU
					</span>
					/
					<span
						className={lang !== "ru" ? styles.active : ""}
						onClick={() =>
							router.push(
								`/en${window.location.pathname
									.replace("/en", "")
									.replace("/ru", "")}`
							)
						}
					>
						EN
					</span>
				</div>
			</div>
		</header>
	);
};
