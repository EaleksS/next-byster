'use client'

import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import { Logo, Nav } from "@/entities";
import { Button, Text } from "@/shared";
import { OurCheats } from "../OurCheats/OurCheats";

export const Header: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.cont}`}>
        <Logo />
        <Nav setIsActive={setIsActive} />

        <OurCheats isActive={isActive} setIsActive={setIsActive} />
        <div className={styles.lang}>
          <Button radius="5px">RU</Button>
        </div>
      </div>
    </header>
  );
};
