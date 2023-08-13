import { CSSProperties, FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { Text } from "../..";

interface Props {
  type?: "default" | "primary" | "primary2" | "new" | "choice";
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
  const styleComp: CSSProperties = {
    marginTop: mt,
    color: color,
    backgroundColor: bgc,
    borderRadius: radius,
  };

  switch (type) {
    case "primary":
      return (
        <button
          className={`${styles.btn} ${styles.primary} ${
            isActive && styles.active
          } ${isActive === undefined && styles.def}`}
          style={styleComp}
          onClick={onClick}
        >
          <Text type="h3">{children}</Text>
        </button>
      );

    case "new":
      return (
        <button
          className={`${styles.btn} ${styles.new} ${
            isActive && styles.active
          } ${isActive === undefined && styles.def}`}
          style={styleComp}
          onClick={onClick}
        >
          <span className={styles.content}>
            <Text type="h3">{children}</Text>
          </span>
        </button>
      );

    case "primary2":
      return (
        <button
          className={`${styles.btn} ${styles.active} ${styles.primary2}`}
          style={styleComp}
          onClick={onClick}
        >
          <span className={styles.content}>
            <h2>{children}</h2>
          </span>
        </button>
      );

    case "choice":
      return (
        <button
          className={`${styles.btn} ${isActive && styles.active} ${
            styles.choice
          }`}
          style={styleComp}
          onClick={onClick}
        >
          <span className={styles.content}>
            <h2>{children}</h2>
          </span>
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.default} ${
            isActive && styles.active
          } ${isActive === undefined && styles.def}`}
          style={styleComp}
          onClick={onClick}
        >
          <Text type="h3">{children}</Text>
        </button>
      );
  }
};
