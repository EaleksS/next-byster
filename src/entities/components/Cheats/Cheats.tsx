import { FC } from "react";
import styles from "./Cheats.module.scss";
import Image from "next/image";
import { Button, Text } from "@/shared";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ICheats, IProducts } from "@/widgets/interface/cheats.interface";

export const Cheats: FC<ICheats> = (props): JSX.Element => {
  return (
    <div className={styles.cheats}>
      <div className={styles.bg}>
        <Image src={props.bg_img} alt="product" width={500} height={500} />
        <div className={styles.title}>
          <Image src={props.logo_img} alt="logo" width={30} height={30} />
          <Text type="h3" up fw="600">
            {props.name}
          </Text>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.detect}>
          <div className={`${styles.circle} ${props.main_hack_status && styles.detec}`}></div>
          {props.main_hack_status ? (
            <Text type="h3" up fw="600" color="#ff4040">
              В детекте
            </Text>
          ) : (
            <Text type="h3" up fw="600">
              Не в детекте
            </Text>
          )}
        </div>
        <Text>с {props.main_status_time}</Text>
        <Button type="primary" radius="10px">
          ПЕРЕЙТИ <HiArrowNarrowRight className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};
