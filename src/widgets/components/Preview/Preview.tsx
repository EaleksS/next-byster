"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "@/shared";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Preview: FC = (): JSX.Element => {
  const img1 = useRef<HTMLImageElement>(null);

  const router = useRouter();

  const parallax = (e: MouseEvent) => {
    if (!img1.current) return;

    const x1 = e.clientX / 1000;
    const y1 = e.clientY / 500;

    img1.current.style.transform = `translateX(${x1}rem) translateY(${y1}rem)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", parallax);

    return () => document.removeEventListener("mousemove", parallax);
  }, []);

  return (
    <div className={`${styles.preview} container`}>
      <div className={styles.title}>
        <Text type="h1" up fw="600">
          Byster - Авто PvE и PvP
        </Text>
        <Text type="h3" mt="2rem" fw="400" color="#ece8e1">
          Byster - это многофункциональный бот, который имеет большое количество
          функций. Бустер хилит, танчит, наносит урон. Отслеживает ваши проки,
          прожимает тринькеты, профессии, дефается, меняет ротацию в зависимости
          от приоритета и фазы босса, для большей полезности в рейде.
          Присутствуют функции автобафа, аое и соло режима, прожимок и дефов,
          авто-снятие оружие на леди, диспел и многое другое, заинтересовался?
          Жми на кнопку ниже!
        </Text>

        <Button
          mt="3rem"
          type="primary2"
          onClick={() => router.push("/download")}
        >
          Попробовать бесплатно
        </Button>
      </div>
      <div className={styles.img}>
        <Image
          ref={img1}
          priority
          src="/pre.png"
          alt="img"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};
