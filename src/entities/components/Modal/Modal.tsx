import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";

interface Props {
  isActive: boolean;
  setIsActive: (bool: boolean) => void;
  children: ReactNode;
  zIndex?: number;
  close?: boolean;
}

export const Modal: FC<Props> = ({
  isActive,
  setIsActive,
  children,
  zIndex = 4,
  close = false,
}): JSX.Element => {
  return (
    <div
      className={`${styles.modal} ${isActive && styles.active}`}
      style={{ zIndex: zIndex }}
      onClick={() => !close && setIsActive(false)}
    >
      <div
        className={`${styles.content} ${isActive && styles.active}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
