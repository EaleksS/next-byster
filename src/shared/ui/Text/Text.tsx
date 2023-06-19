import { CSSProperties, FC, ReactNode } from "react";
import styles from "./Text.module.scss";

interface Props {
  type?: "p" | "h1" | "h2" | "h3";
  children: ReactNode;

  mt?: string;
  fz?: string | number;
  fw?: string;
  lh?: string | number;
  color?: string;
  up?: boolean;
  center?: boolean;
}

export const Text: FC<Props> = ({
  children,
  type,
  mt = "0",
  fz,
  fw,
  lh,
  color,
  center = false,
  up = false,
}): JSX.Element => {
  const styleComp: CSSProperties = {
    marginTop: mt,
    fontSize: fz,
    fontWeight: fw,
    lineHeight: lh,
    color: color,
    textAlign: center ? "center" : "start",
    textTransform: up ? "uppercase" : "none",
  };

  switch (type) {
    case "h1":
      return (
        <h1 className={styles.h1} style={styleComp}>
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={styles.h2} style={styleComp}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={styles.h3} style={styleComp}>
          {children}
        </h3>
      );

    default:
      return (
        <p className={styles.p} style={styleComp}>
          {children}
        </p>
      );
  }
};
