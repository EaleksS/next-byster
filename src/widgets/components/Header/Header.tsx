import React, { FC } from "react";
import styles from "./Header.module.scss";
import { Logo, Nav } from "@/entities";
import { Button, Text } from "@/shared";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.cont}`}>
        <Logo />
        <Nav />
        <div className={styles.lang}>
          <Button radius="5px">RU</Button>
        </div>
      </div>
    </header>
  );
};
