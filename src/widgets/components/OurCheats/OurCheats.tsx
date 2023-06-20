"use client";

import { Dispatch, FC, SetStateAction } from "react";
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
