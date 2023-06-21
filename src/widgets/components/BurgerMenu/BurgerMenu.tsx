import { Dispatch, FC, SetStateAction, useEffect } from "react";
import styles from "./BurgerMenu.module.scss";
import { Modal, Nav } from "../../../entities";
import { Link } from "react-scroll";
import { Text } from "@/shared";
import { FaVk, FaYoutube } from "react-icons/fa";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setIsActiveGame: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<Props> = ({
  isActive,
  setIsActive,
  setIsActiveGame,
}): JSX.Element => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
      document.body.addEventListener(
        "touchmove",
        function (event) {
          event.preventDefault();
        },
        false
      );
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <Modal isActive={isActive} setIsActive={setIsActive} zIndex={2}>
      <div className={styles.burger_menu}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <Link to="main" smooth={true}>
                <Text type="h2">Главная</Text>
              </Link>
            </li>
            <li
              onClick={() => {
                setIsActiveGame((prev) => !prev);
                setIsActive(false);
              }}
            >
              <Text type="h2">Наши читы</Text>
            </li>
            <li>
              <Link to="about" smooth={true}>
                <Text type="h2">О нас</Text>
              </Link>
            </li>
            <li>
              <Link to="reviews" smooth={true}>
                <Text type="h2">Отзывы</Text>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Modal>
  );
};
