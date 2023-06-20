import { FC } from "react";
import styles from "./Cheats.module.scss";
import Image from "next/image";
import { Button, Text } from "@/shared";
import { HiArrowNarrowRight } from "react-icons/hi";

export const Cheats: FC = (): JSX.Element => {
  return (
    <div className={styles.cheats}>
      <div className={styles.bg}>
        <Image src="/rustgg.jpg" alt="product" width={500} height={500} />
        <div className={styles.title}>
          <Image src="/rust.png" alt="logo" width={30} height={30}  />
          <Text type="h3" up fw="600">Rust</Text>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.detect}>
          <div className={styles.circle}></div>
          <Text type="h3" up fw="600">
            Не в детекте
          </Text>
        </div>
        <Text>с 17.04.2023</Text>
        <Button type="primary" radius="10px">
          ПЕРЕЙТИ <HiArrowNarrowRight className={styles.icon} />
        </Button>
      </div>
    </div>
  );
};
