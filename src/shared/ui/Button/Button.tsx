import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { Text } from "../..";

interface Props {
  type?: "default" | "primary";
  children?: ReactNode;
  onClick?: () => void;
  mt?: string;
  isActive?: boolean | undefined;
  color?: string;
  bgc?: string;
  radius?: string;
}

export const Button: FC<Props> = ({
  type = "default",
  children = "BUTTON",
  mt = "0",
  onClick,
  isActive = undefined,
  color = "#fff",
  bgc,
  radius = "0",
}): JSX.Element => {
  switch (type) {
    case "primary":
      return (
        <button
          className={`${styles.btn} ${styles.primary} ${
            isActive && styles.active
          } ${isActive === undefined && styles.def}`}
          style={{
            marginTop: mt,
            color: color,
            backgroundColor: bgc,
            borderRadius: radius,
          }}
          onClick={onClick}
        >
          <Text type="h3">{children}</Text>
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.default} ${
            isActive && styles.active
          } ${isActive === undefined && styles.def}`}
          style={{
            marginTop: mt,
            color: color,
            backgroundColor: bgc,
            borderRadius: radius,
          }}
          onClick={onClick}
        >
          <Text type="h3">{children}</Text>
        </button>
      );
  }
};
