import { FC } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "@/shared";
import Image from "next/image";

export const Preview: FC = (): JSX.Element => {
  return (
    <div className={`${styles.preview} container`}>
      <div className={styles.title}>
        <Text type="h1" color="#fbb531">
          Byster - Авто PvE и PvP
        </Text>
        <Text type="h3" mt="3rem" fw="400">
          Byster - это многофункциональный бот, который имеет большое количество
          функций. Бустер хилит, танчит, наносит урон. Отслеживает ваши проки,
          прожимает тринькеты, профессии, дефается, меняет ротацию в зависимости
          от приоритета и фазы босса, для большей полезности в рейде.
          Присутствуют функции автобафа, аое и соло режима, прожимок и дефов,
          авто-снятие оружие на леди, диспел и многое другое, заинтересовался?
          Жми на кнопку ниже!
        </Text>

        <Button mt="3rem" type="primary" radius="10px">
          Попробовать бесплатно
        </Button>
      </div>
      <div>
        <Image priority src="/pre.png" alt="img" width={600} height={600} />
      </div>
    </div>
  );
};
