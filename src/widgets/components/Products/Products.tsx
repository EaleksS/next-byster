"use client";

import { FC, useState } from "react";
import styles from "./Products.module.scss";
import { Button, Text } from "@/shared";
import { Product } from "@/entities";

export const Products: FC = (): JSX.Element => {
  const [active, setActive] = useState<string>("pvp");

  return (
    <div className={`container ${styles.products}`}>
      <Text type="h2" up center>
        <span>Список наших ротаций</span>
      </Text>
      <div className={styles.btns}>
        <Button
          type={active === "pvp" ? "primary" : "default"}
          onClick={() => setActive("pvp")}
          radius="10px"
        >
          PvP
        </Button>
        <Button
          type={active === "pve" ? "primary" : "default"}
          onClick={() => setActive("pve")}
          radius="10px"
        >
          PvE
        </Button>
        <Button
          type={active === "utility" ? "primary" : "default"}
          onClick={() => setActive("utility")}
          radius="10px"
        >
          Utitlity
        </Button>
      </div>
      <div className={styles.items}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
          <Product key={e} />
        ))}
      </div>
    </div>
  );
};
