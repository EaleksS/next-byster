import { FC } from "react";
import styles from "./Logo.module.scss";
import Image from "next/image";

export const Logo: FC = (): JSX.Element => {
	return (
		<div className={styles.logo}>
			<Image src="/logo.png" alt="logo" width={200} height={55} priority />
		</div>
	);
};
