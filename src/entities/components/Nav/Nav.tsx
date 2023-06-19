import { FC } from "react";
import styles from "./Nav.module.scss";
import { Text } from "../../../shared";
import { FaVk, FaYoutube } from "react-icons/fa";

export const Nav: FC = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Text type="h3">Главная</Text>
        </li>
        <li>
          <Text type="h3">Наши читы</Text>
        </li>
        <li>
          <Text type="h3">О нас</Text>
        </li>
        <li>
          <Text type="h3">Отзывы</Text>
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
