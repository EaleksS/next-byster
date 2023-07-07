"use client";

import { FC, useState } from "react";
import styles from "./Products.module.scss";
import { Button, Loader, Text } from "@/shared";
import { Product } from "@/entities";
import { useQuery } from "react-query";
import { getProducts } from "@/widgets/services/products.service";
import { IProduct } from "@/widgets/interface/products.interface";

export const Products: FC = (): JSX.Element => {
  const [active, setActive] = useState<string>("pvp");

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts.getList(),
    keepPreviousData: true,
  });

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
        {!isLoading ? (
          data
            .filter((filter: IProduct) =>
              filter.name.toLowerCase().includes(active.toLowerCase())
            )
            .map((e: IProduct) => <Product key={e.id} {...e} />)
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              left: 0,
              right: 0,
            }}
          >
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};
