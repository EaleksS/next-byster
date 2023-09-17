import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { Modal, Nav } from "../../../entities";
import { Link as LinkScroll } from "react-scroll";
import { Text } from "@/shared";
import { FaYoutube } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { dictionary } from "@/dictionaries/content";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { SiTelegram, SiVk } from "react-icons/si";

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
	// setIsActiveGame: Dispatch<SetStateAction<boolean>>;
	lang: string;
}

export const BurgerMenu: FC<Props> = ({
	isActive,
	setIsActive,
	// setIsActiveGame,
	lang,
}): JSX.Element => {
	useEffect(() => {
		if (isActive) {
			document.body.style.overflowY = "hidden";
			document.body.addEventListener(
				"touchmove",
				function (event) {
					event.preventDefault();
				},
				false
			);
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isActive]);

	const router = useRouter();
	const pathname = usePathname();

	return (
		<Modal isActive={isActive} setIsActive={setIsActive} zIndex={2}>
			<div className={styles.burger_menu} onClick={() => setIsActive(false)}>
				<nav className={styles.nav} onClick={(e) => e.stopPropagation()}>
					<ul className={styles.ul}>
						<li>
							<Link href={`/${lang}/`} onClick={() => setIsActive(false)}>
								<Text type="h3" center fz="18px" fw="600" up>
									{dictionary[lang]?.main}
								</Text>
							</Link>
						</li>
						<li>
							<Link href={`/${lang}/games`} onClick={() => setIsActive(false)}>
								<Text type="h3" center fz="18px" fw="600" up>
									{dictionary[lang]?.ourCheats}
								</Text>
							</Link>
						</li>
						<li>
							<Link
								href={
									pathname.includes("wow")
										? `/${lang}/wow/download`
										: `/${lang}/download`
								}
								onClick={() => setIsActive(false)}
							>
								<Text type="h3" center fz="18px" up>
									{dictionary[lang]?.download}
								</Text>
							</Link>
						</li>
						<li>
							<LinkScroll
								to="reviews"
								smooth={true}
								onClick={() => {
									setIsActive(false);
									if (pathname === `/${lang}/wow`)
										return router.push(`/${lang}/wow/#reviews`);

									return router.push(`/${lang}/#reviews`);
								}}
							>
								<Text type="h3" center fz="18px" fw="600" up>
									{dictionary[lang]?.reviewsTitle}
								</Text>
							</LinkScroll>
						</li>
						<li className={styles.icons} onClick={() => setIsActive(false)}>
							<FaDiscord
								className={`${styles.icon} ${styles.vk}`}
								onClick={() =>
									window.open("https://discord.gg/byster", "_blank")
								}
							/>
							<FaYoutube
								className={`${styles.icon} ${styles.yt}`}
								onClick={() =>
									window.open(
										"https://www.youtube.com/@bysterwow5133",
										"_blank"
									)
								}
							/>
							<SiTelegram
								className={`${styles.icon} ${styles.tg}`}
								onClick={() =>
									window.open("https://t.me/+uNS9GmL5vWc3MzEy", "_blank")
								}
							/>
							{pathname.includes("wow") && (
								<SiVk
									className={`${styles.icon} ${styles.tg}`}
									onClick={() =>
										window.open("https://vk.com/byster_wow", "_blank")
									}
								/>
							)}
						</li>
						<li>
							<div className={styles.lang}>
								<span
									onClick={() =>
										router.push(
											`/ru${window.location.pathname
												.replace("/en", "")
												.replace("/ru", "")}`
										)
									}
									className={lang === "ru" ? styles.active : ""}
								>
									RU
								</span>
								/
								<span
									onClick={() =>
										router.push(
											`/en${window.location.pathname
												.replace("/en", "")
												.replace("/ru", "")}`
										)
									}
									className={lang !== "ru" ? styles.active : ""}
								>
									EN
								</span>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</Modal>
	);
};
