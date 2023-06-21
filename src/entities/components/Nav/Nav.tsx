"use client";

import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Nav.module.scss";
import { Text } from "../../../shared";
import { FaVk, FaYoutube } from "react-icons/fa";
import { Link } from "react-scroll";

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const Nav: FC<Props> = ({ setIsActive }): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link to="main" smooth={true}>
            <Text type="h3" up>Главная</Text>
          </Link>
        </li>
        <li onClick={() => setIsActive((prev) => !prev)}>
          <Text type="h3" up>Наши читы</Text>
        </li>
        <li>
          <Link to="about" smooth={true}>
            <Text type="h3" up>О нас</Text>
          </Link>
        </li>
        <li>
          <Link to="reviews" smooth={true}>
            <Text type="h3" up>Отзывы</Text>
          </Link>
        </li>
        <li className={styles.icons}>
          <FaVk className={`${styles.icon} ${styles.vk}`} />
        </li>
        <li className={styles.icons}>
          <FaYoutube className={`${styles.icon} ${styles.yt}`} />
        </li>
      </ul>
    </nav>
  );
};
