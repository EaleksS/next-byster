"use client";

import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import { Burger, Logo, Nav } from "@/entities";
import { OurCheats } from "../OurCheats/OurCheats";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useRouter } from "next/navigation";

export const Header: FC<{ lang: string }> = ({ lang }): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`${styles.cont}`}>
        <Logo />
        <Nav setIsActive={setIsActive} lang={lang} />
        <BurgerMenu
          isActive={isActiveBurger}
          setIsActiveGame={setIsActive}
          setIsActive={setIsActiveBurger}
          lang={lang}
        />
        <OurCheats isActive={isActive} setIsActive={setIsActive} />
        <div className={styles.burger}>
          <Burger isActive={isActiveBurger} setIsActive={setIsActiveBurger} />
        </div>
        <div className={styles.lang}>
          <span
            className={lang === "ru" ? styles.active : ""}
            onClick={() => router.push("/ru")}
          >
            RU
          </span>
          /
          <span
            className={lang !== "ru" ? styles.active : ""}
            onClick={() => router.push("/en")}
          >
            EN
          </span>
        </div>
      </div>
    </header>
  );
};
