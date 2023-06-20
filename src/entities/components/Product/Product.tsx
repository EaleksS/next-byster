"use client";

import { FC, useState } from "react";
import styles from "./Product.module.scss";
import { Button, Text } from "../../../shared";
import { Modal, Slider } from "../..";
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
      {/* Modal */}
      <Modal setIsActive={setIsActive} isActive={isActive}>
        <div className={styles.modal}>
          <IoClose
            className={styles.close}
            onClick={() => setIsActive(false)}
          ></IoClose>
          <div className={styles.container}>
            <div className={styles.img}>
              <Image
                src="/12QOSLDlCH0.jpg"
                alt="product"
                width={500}
                height={500}
              />
            </div>
            <div className={styles.content}>
              <Text type="h3">
                <span>Discipline Priest PvP</span> - это полностью
                автоматизированная ротация, которая умеет следующие:
              </Text>
              <Text mt="20px">
                - Исцелять вас и игроков, находящихся в вашей группе или рейде
                <br />
                - Автоматический баффать и ребаффать при возможности
                <br />
                - Ассистить своим тимейтам уроном
                <br />
                - Автоматический используются Божественный гимн и Гимн надежды
                (для арены)
                <br />- Автофейк каста для того, чтобы избежать эффекта {'"'}
                Немоты{'"'}
                <br />
                - Автоматический диспел союзников и врагов.
                <br />
                - Масс диспел, который находит сам нужную точку если
                цельнаходится вне зоны
                <br />
                видимости - Масс диспел для того, чтобы войти в бой против
                разбойника
                <br />
                - Автоматическое разбития тотема заземления и трепета.
                <br />
              </Text>
              <div className={styles.price}>
                <Button type="primary" radius="10px">
                  Купить за 399P
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.slider}><Slider /></div>
        </div>
      </Modal>
    </>
  );
};
