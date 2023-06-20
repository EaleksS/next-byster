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
    <Modal isActive={isActive} setIsActive={setIsActive} bg={false}>
      <div className={` ${styles.our_cheats}`}>
        <IoClose
          className={styles.close}
          onClick={() => setIsActive(false)}
        ></IoClose>
        {[1, 2, 3].map((e) => (
          <Cheats key={e} />
        ))}
      </div>
    </Modal>
  );
};
