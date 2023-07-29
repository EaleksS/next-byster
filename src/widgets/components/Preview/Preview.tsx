"use client";

import { FC, useEffect, useRef } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "@/shared";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dictionary } from "../../../../public/content";

interface Props {
  lang: string;
}

export const Preview: FC<Props> = ({ lang }): JSX.Element => {
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
        <div className={styles.name}>
          <Text type="h1" up>
            {dictionary[lang]?.homeTitle}
          </Text>
          <div className={styles.back}>Byster</div>
        </div>
        <Text mt="2rem" fz="18px">
          {dictionary[lang]?.homeText}
        </Text>

        <Button
          mt="3rem"
          type="primary2"
          onClick={() => router.push("/download")}
        >
          {dictionary[lang]?.homeBtn}
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
