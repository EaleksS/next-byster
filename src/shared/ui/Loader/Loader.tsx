import { FC } from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.scss";

interface Props {
  className?: string;
  w?: number;
}

export const Loader: FC<Props> = ({ className, w = 60 }): JSX.Element => {
  return (
    <div className={`${styles.loader} ${className}`}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width={`${w}`}
        visible={true}
      />
    </div>
  );
};
