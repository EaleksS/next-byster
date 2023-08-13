import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./BurgerMenu.module.scss";
import { Modal, Nav } from "../../../entities";
import { Link } from "react-scroll";
import { Text } from "@/shared";
import { FaYoutube } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { dictionary } from "@/dictionaries/content";
import { FaDiscord } from "react-icons/fa";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  // setIsActiveGame: Dispatch<SetStateAction<boolean>>;
  lang: string;
}

export const BurgerMenu: FC<Props> = ({
  isActive,
  setIsActive,
  // setIsActiveGame,
  lang,
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

  const router = useRouter();

  return (
    <Modal isActive={isActive} setIsActive={setIsActive} zIndex={2}>
      <div className={styles.burger_menu} onClick={() => setIsActive(false)}>
        <nav className={styles.nav} onClick={(e) => e.stopPropagation()}>
          <ul className={styles.ul}>
            <li>
              <Link
                to="wrapper"
                smooth={true}
                onClick={() => setIsActive(false)}
              >
                <Text type="h3" center fz="18px" fw="600" up>
                  {dictionary[lang]?.main}
                </Text>
              </Link>
            </li>
            <li
              onClick={() => {
                // setIsActiveGame((prev) => !prev);

                window.open("https://hacks.byster.one/games", "_blank");
                setIsActive(false);
              }}
            >
              <Text type="h3" center fz="18px" fw="600" up>
                {dictionary[lang]?.ourCheats}
              </Text>
            </li>
            <li>
              <Link to="about" smooth={true} onClick={() => setIsActive(false)}>
                <Text type="h3" center fz="18px" up>
                  {dictionary[lang]?.about}
                </Text>
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                smooth={true}
                onClick={() => setIsActive(false)}
              >
                <Text type="h3" center fz="18px" fw="600" up>
                  {dictionary[lang]?.reviewsTitle}
                </Text>
              </Link>
            </li>
            <li className={styles.icons} onClick={() => setIsActive(false)}>
              <FaDiscord className={`${styles.icon} ${styles.vk}`} />
            </li>
            <li className={styles.icons} onClick={() => setIsActive(false)}>
              <FaYoutube className={`${styles.icon} ${styles.yt}`} />
            </li>
            <li>
              <div className={styles.lang}>
                <span
                  onClick={() => router.push("/ru")}
                  className={lang === "ru" ? styles.active : ""}
                >
                  RU
                </span>
                /
                <span
                  onClick={() => router.push("/en")}
                  className={lang !== "ru" ? styles.active : ""}
                >
                  EN
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </Modal>
  );
};
