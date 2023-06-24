"use client";

import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Nav.module.scss";
import { Text } from "../../../shared";
import { FaVk, FaYoutube } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const Nav: FC<Props> = ({ setIsActive }): JSX.Element => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href={"/"}>
            <Text type="h3" up>
              Главная
            </Text>
          </Link>
        </li>
        <li onClick={() => setIsActive((prev) => !prev)}>
          <Text type="h3" up>
            Наши читы
          </Text>
        </li>
        <li>
          <LinkScroll
            to="about"
            smooth={true}
            onClick={() => router.push("/#about")}
          >
            <Text type="h3" up>
              О нас
            </Text>
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="reviews"
            smooth={true}
            onClick={() => router.push("/#reviews")}
          >
            <Text type="h3" up>
              Отзывы
            </Text>
          </LinkScroll>
        </li>
        <li className={styles.icons}>
          <FaVk className={`${styles.icon} ${styles.vk}`} />
          <FaYoutube className={`${styles.icon} ${styles.yt}`} />
        </li>
      </ul>
    </nav>
  );
};
