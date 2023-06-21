"use client";

import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import { Burger, Logo, Nav } from "@/entities";
import { Button, Text, useWindowDimensions } from "@/shared";
import { OurCheats } from "../OurCheats/OurCheats";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);
  const { width } = useWindowDimensions();

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

        {width < 1200 ? (
          <div className={styles.lang}>
            <Burger isActive={isActiveBurger} setIsActive={setIsActiveBurger} />
          </div>
        ) : (
          <div className={styles.lang}>
            <Button radius="5px">RU</Button>
          </div>
        )}
      </div>
    </header>
  );
};
