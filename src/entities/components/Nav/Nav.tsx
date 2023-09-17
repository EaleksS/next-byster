"use client";

import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Nav.module.scss";
import { Text } from "../../../shared";
import { FaYoutube } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { dictionary } from "@/dictionaries/content";
import { FaDiscord } from "react-icons/fa";
import { SiTelegram, SiVk } from "react-icons/si";

interface Props {
	// setIsActive: Dispatch<SetStateAction<boolean>>;
	lang: string;
}

export const Nav: FC<Props> = ({ lang }): JSX.Element => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li>
					<Link href={`/${lang}/`}>
						<Text type="h3" fw="600" up>
							{dictionary[lang]?.main}
						</Text>
					</Link>
				</li>
				<li>
					<Link href={`/${lang}/games`}>
						<Text type="h3" fw="600" up>
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
					>
						<Text type="h3" fw="600" up>
							{dictionary[lang]?.download}
						</Text>
					</Link>
				</li>
				<li>
					<LinkScroll
						to="reviews"
						smooth={true}
						onClick={() => {
							if (pathname === `/${lang}/wow`)
								return router.push(`/${lang}/wow/#reviews`);

							return router.push(`/${lang}/#reviews`);
						}}
					>
						<Text type="h3" fw="600" up>
							{dictionary[lang]?.reviewsTitle}
						</Text>
					</LinkScroll>
				</li>
				<li className={styles.icons}>
					<FaDiscord
						className={`${styles.icon} ${styles.vk}`}
						onClick={() => window.open("https://discord.gg/byster", "_blank")}
					/>
					<FaYoutube
						className={`${styles.icon} ${styles.yt}`}
						onClick={() =>
							window.open("https://www.youtube.com/@bysterwow5133", "_blank")
						}
					/>
					<SiTelegram
						className={`${styles.icon} ${styles.tg}`}
						onClick={() =>
							window.open("https://t.me/+_Mq5a1vthp85ZmQy", "_blank")
						}
					/>
					{pathname.includes("wow") && (
						<SiVk
							className={`${styles.icon} ${styles.tg}`}
							onClick={() => window.open("https://vk.com/byster_wow", "_blank")}
						/>
					)}
				</li>
			</ul>
		</nav>
	);
};
