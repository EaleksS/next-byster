"use client";

import { Dispatch, FC, SetStateAction, useEffect } from "react";
import styles from "./OurCheats.module.scss";
import { Cheats, Modal } from "@/entities";
import { IoClose } from "react-icons/io5";

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
          {[1, 2, 3, 4].map((e) => (
            <Cheats key={e} />
          ))}
        </div>
      </div>
    </div>
  );
};
