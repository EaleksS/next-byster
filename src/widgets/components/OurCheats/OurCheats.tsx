"use client";

import { Dispatch, FC, SetStateAction, useEffect } from "react";
import styles from "./OurCheats.module.scss";
import { Cheats } from "@/entities";
import { IoClose } from "react-icons/io5";
import { getCheats } from "@/widgets/services/cheats.service";
import { ICheats } from "@/widgets/interface/cheats.interface";
import { Loader } from "@/shared";
import { useQuery } from "@tanstack/react-query";

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const OurCheats: FC<Props> = ({
	isActive,
	setIsActive,
}): JSX.Element => {
	useEffect(() => {
		if (isActive) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isActive]);

	const { data, isLoading } = useQuery({
		queryKey: ["cheats"],
		queryFn: () => getCheats.getCheatsList(),
		keepPreviousData: true,
	});

	let newData: ICheats[] = [];

	if (!isLoading) {
		Object.values(data).forEach((el: any) => newData.push(el));
		// const table: any = {};

		// newData = newData.filter(({ id }) => !table[id] && (table[id] = 1));
	}

	return (
		<div
			className={`${styles.modal} ${isActive && styles.active}`}
			onClick={() => setIsActive(false)}
		>
			<div
				className={` ${styles.our_cheats}`}
				onClick={(e) => e.stopPropagation()}
			>
				<IoClose
					className={styles.close}
					onClick={() => setIsActive(false)}
				></IoClose>
				<div className={styles.items}>
					{newData.length ? (
						newData.map((e: ICheats) => <Cheats key={e.id} {...e} />)
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
		</div>
	);
};
