"use client";

import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Nav.module.scss";
import { Text } from "../../../shared";
import { FaYoutube } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { dictionary } from "@/dictionaries/content";
import { FaDiscord } from "react-icons/fa";

interface Props {
	// setIsActive: Dispatch<SetStateAction<boolean>>;
	lang: string;
}

export const Nav: FC<Props> = ({ lang }): JSX.Element => {
	const router = useRouter();

	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li>
					<Link href={"/"}>
						<Text type="h3" fw="600" up>
							{dictionary[lang]?.main}
						</Text>
					</Link>
				</li>
				<li
					onClick={() =>
						window.open(`https://bysterv2.vercel.app/${lang}/games`, "_blank")
					}
				>
					<Text type="h3" fw="600" up>
						{dictionary[lang]?.ourCheats}
					</Text>
				</li>
				<li>
					<LinkScroll
						to="about"
						smooth={true}
						onClick={() => router.push("/#about")}
					>
						<Text type="h3" fw="600" up>
							{dictionary[lang]?.about}
						</Text>
					</LinkScroll>
				</li>
				<li>
					<LinkScroll
						to="reviews"
						smooth={true}
						onClick={() => router.push("/#reviews")}
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
				</li>
			</ul>
		</nav>
	);
};
