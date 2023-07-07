import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.scss";

interface Props {
  className?: string;
  h?: number;
  w?: number;
}

export const Loader: FC<Props> = ({
  className,
  h = 80,
  w = 80,
}): JSX.Element => {
  return (
    <div className={`${styles.loader} ${className}`}>
      <ThreeDots
        visible={true}
        height={h}
        width={w}
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="#fff"
      />
    </div>
  );
};
