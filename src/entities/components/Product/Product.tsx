"use client";

import { FC, Fragment, useEffect, useState } from "react";
import styles from "./Product.module.scss";
import { Button, Text } from "../../../shared";
import { Modal, Slider } from "../..";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { IProduct } from "@/widgets/interface/products.interface";
import ReactMarkdown from "react-markdown";
import { dictionary } from "../../../../public/content";

export const Product: FC<IProduct & { lang: string }> = (
  props
): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <>
      <div className={styles.product} onClick={() => setIsActive(true)}>
        <Image
          src={props.image_url ? props.image_url : "/icons8-помощь-48.png"}
          className={props.image_url ? "" : styles.iconv}
          alt="product"
          width={500}
          height={500}
        />
        <div className={styles.content}>
          <Text type="h3" center up>
            {props.name.length < 12
              ? props.name
              : `${props.name.slice(0, 12)}...`}
          </Text>
          <Text type="h3" center up>
            {props.price} P
          </Text>
        </div>
      </div>
      {/* Modal */}

      <div
        className={`${styles.modal} ${isActive && styles.active}`}
        onClick={() => setIsActive(false)}
      >
        <IoClose
          className={styles.close}
          onClick={() => setIsActive(false)}
        ></IoClose>
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          <div className={styles.img}>
            <Image
              src={props.image_url ? props.image_url : "/icons8-помощь-48.png"}
              className={props.image_url ? "" : styles.iconv}
              alt="product"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.content}>
            <Text type="h3">{props.name}</Text>
            <Text mt="20px">
              <ReactMarkdown>
                {props.lang === "ru"
                  ? props.rotations[0].description
                  : props.rotations[0].description_en}
              </ReactMarkdown>
            </Text>
            <div className={styles.price}>
              <Button type="primary" radius="10px">
                {dictionary[props.lang]?.rotationBtn} {props.price}P
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.slider} onClick={(e) => e.stopPropagation()}>
          <Slider {...props} />
        </div>
      </div>
    </>
  );
};
