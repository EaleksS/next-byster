"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "@/shared";
import { motion } from "framer-motion";
import Image from "next/image";

export const Preview: FC = (): JSX.Element => {
  return (
    <div className={`${styles.preview} container`}>
      <motion.div
        className={styles.title}
        initial={{ y: -200, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
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
      </motion.div>
      <motion.div
        className={styles.img}
        initial={{ y: -200, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image priority src="/pre.png" alt="img" width={600} height={600} />
      </motion.div>
    </div>
  );
};
