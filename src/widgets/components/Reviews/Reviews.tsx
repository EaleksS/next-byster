import { FC } from "react";
import styles from "./Reviews.module.scss";
import { Text } from "@/shared";

export const Reviews: FC = (): JSX.Element => {
  return (
    <div className={`container`} id="reviews">
      <Text type="h2" center mt="100px">
        Отзывы
      </Text>
      <div className={styles.reviews}>
        {[1, 2, 3, 4, 5].map((e) => (
          <div key={e} className={styles.review}>
            <Text type="h3">Megget Rolnik</Text>
            <Text>
              <span>14.04.2021</span>
            </Text>
            <Text mt="20px">
              Подскажите, на фарм хелпер, можно как то радиус лучей до травы и
              руды увеличить или радиус такой как в поиске где показует на
              карте?
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};
