import { dictionary } from "@/dictionaries/content";
import { FC, useState } from "react";
import styles from "./WhyUs.module.scss";
import Image from "next/image";
import { Text } from "@/shared";

interface Props {
	lang: string;
}

export const WhyUs: FC<Props> = ({ lang }): JSX.Element => {
	const [active, setActive] = useState<string>("convenience");

	return (
		<div className={`container ${styles.why_us}`}>
			<div className={styles.icons}>
				{[
					"convenience",
					"choose",
					"anonymity",
					"protection",
					"support",
					"functionality",
				].map((e) => (
					<Image
						key={e}
						src={`/icon_slider/4-${e}.png`}
						alt="about"
						width={100}
						height={100}
						onMouseEnter={() => setActive(e)}
					/>
				))}
			</div>
			<Text type="h1" center mt="50px" up fw="600">
				<span className={active === "convenience" ? styles.active : ""}>
					{dictionary[lang]?.convenience}
				</span>
				<span className={active === "choose" ? styles.active : ""}>
					{dictionary[lang]?.choose}
				</span>
				<span className={active === "anonymity" ? styles.active : ""}>
					{dictionary[lang]?.anonymity}
				</span>
				<span className={active === "protection" ? styles.active : ""}>
					{dictionary[lang]?.protection}
				</span>
				<span className={active === "support" ? styles.active : ""}>
					{dictionary[lang]?.support}
				</span>
				<span className={active === "functionality" ? styles.active : ""}>
					{dictionary[lang]?.functionality}
				</span>
			</Text>
			<Text type="h3" mt="50px" center fw="300">
				<b className={active === "convenience" ? styles.active : ""}>
					{dictionary[lang]?.convenienceText}
				</b>
				<b className={active === "choose" ? styles.active : ""}>
					{dictionary[lang]?.chooseText}
				</b>
				<b className={active === "anonymity" ? styles.active : ""}>
					{dictionary[lang]?.anonymityText}
				</b>
				<b className={active === "protection" ? styles.active : ""}>
					{dictionary[lang]?.protectionText}
				</b>
				<b className={active === "support" ? styles.active : ""}>
					{dictionary[lang]?.supportText}
				</b>
				<b className={active === "functionality" ? styles.active : ""}>
					{dictionary[lang]?.functionalityText}
				</b>
			</Text>
		</div>
	);
};
