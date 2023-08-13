"use client";

import { FC, useState } from "react";
import styles from "./About.module.scss";
import { Text } from "@/shared";
import Image from "next/image";
import { dictionary } from "../../../dictionaries/content";

export const About: FC<{ lang: string }> = ({ lang }): JSX.Element => {
  const [active, setActive] = useState<string>("convenience");

  return (
    <div className={styles.img} id="about">
      <div className={styles.name}>
        <Text type="h2" up center>
          {dictionary[lang]?.advantageTitle}
        </Text>
        <div className={styles.back}>Advantages</div>
      </div>
      <div className={styles.lines}></div>
      <div className={`container ${styles.about}`}>
        <div className={styles.icons}>
          {[
            "convenience",
            "choose",
            "anonymity",
            "protection",
            "support",
            "functionality",
          ].map((e) => (
            <Image
              key={e}
              src={`/icon_slider/4-${e}.png`}
              alt="about"
              width={100}
              height={100}
              onMouseEnter={() => setActive(e)}
            />
          ))}
        </div>
        <Text type="h1" center mt="50px" up>
          <span className={active === "convenience" ? styles.active : ""}>
            {dictionary[lang]?.convenience}
          </span>
          <span className={active === "choose" ? styles.active : ""}>
            {dictionary[lang]?.choose}
          </span>
          <span className={active === "anonymity" ? styles.active : ""}>
            {dictionary[lang]?.anonymity}
          </span>
          <span className={active === "protection" ? styles.active : ""}>
            {dictionary[lang]?.protection}
          </span>
          <span className={active === "support" ? styles.active : ""}>
            {dictionary[lang]?.support}
          </span>
          <span className={active === "functionality" ? styles.active : ""}>
            {dictionary[lang]?.functionality}
          </span>
        </Text>
        <Text type="h3" mt="50px" center fw="300">
          <b className={active === "convenience" ? styles.active : ""}>
            {dictionary[lang]?.convenienceText}
          </b>
          <b className={active === "choose" ? styles.active : ""}>
            {dictionary[lang]?.chooseText}
          </b>
          <b className={active === "anonymity" ? styles.active : ""}>
            {dictionary[lang]?.anonymityText}
          </b>
          <b className={active === "protection" ? styles.active : ""}>
            {dictionary[lang]?.protectionText}
          </b>
          <b className={active === "support" ? styles.active : ""}>
            {dictionary[lang]?.supportText}
          </b>
          <b className={active === "functionality" ? styles.active : ""}>
            {dictionary[lang]?.functionalityText}
          </b>
        </Text>
      </div>
    </div>
  );
};
