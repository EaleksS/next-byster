"use client";

import { FC, useState } from "react";
import styles from "./Product.module.scss";
import { Button, Text } from "../../../shared";
import { Modal } from "../..";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

export const Product: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className={styles.product} onClick={() => setIsActive(true)}>
        <Image src="/12QOSLDlCH0.jpg" alt="product" width={500} height={500} />
        <div className={styles.content}>
          <Text type="h3" center up>
            PvP
          </Text>
          <Text type="h3" center up>
            399 P
          </Text>
        </div>
      </div>
      <Modal setIsActive={setIsActive} isActive={isActive}>
        <div className={styles.modal}>
          <IoClose
            className={styles.close}
            onClick={() => setIsActive(false)}
          ></IoClose>
          <div className={styles.img}>
            <Image
              src="/12QOSLDlCH0.jpg"
              alt="product"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.content}>
            <Text type="h2">PvP</Text>
            <Text mt="20px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              sapiente suscipit id exercitationem dignissimos fugit magnam a
              impedit. Tempore aut reiciendis repudiandae suscipit tenetur ea
              corrupti culpa quam asperiores, praesentium consequuntur fugiat
              dicta eveniet recusandae explicabo laborum quo quisquam facilis
              eum.
            </Text>
            <div className={styles.price}>
              <Text type="h3">399P</Text>
              <Button type="primary" radius="10px">
                Купить
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
