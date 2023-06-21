import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./Burger.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const Burger: FC<Props> = ({ isActive, setIsActive }): JSX.Element => {
  return (
    <div
      className={`${styles.burger_menu} ${isActive && styles.active}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className={styles.l1}></div>
      <div className={styles.l2}></div>
      <div className={styles.l3}></div>
    </div>
  );
};
