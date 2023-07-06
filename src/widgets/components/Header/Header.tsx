"use client";

import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import { Burger, Logo, Nav } from "@/entities";
import { OurCheats } from "../OurCheats/OurCheats";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  const [isLang, setIsLang] = useState<string>("ru");

  return (
    <header className={styles.header}>
      <div className={`${styles.cont}`}>
        <Logo />
        <Nav setIsActive={setIsActive} />
        <BurgerMenu
          isActive={isActiveBurger}
          setIsActiveGame={setIsActive}
          setIsActive={setIsActiveBurger}
        />
        <OurCheats isActive={isActive} setIsActive={setIsActive} />
        <div className={styles.burger}>
          <Burger isActive={isActiveBurger} setIsActive={setIsActiveBurger} />
        </div>
        <div className={styles.lang}>
          <span className={isLang === "ru" ? styles.active : ""}>RU</span>/
          <span className={isLang !== "ru" ? styles.active : ""}>EN</span>
        </div>
      </div>
    </header>
  );
};
