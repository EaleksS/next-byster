"use client";

import { FC, useEffect, useState } from "react";
import styles from "./Reviews.module.scss";
import { Text } from "@/shared";
import { getPreviews } from "@/widgets/services/previews.service";
import { useQuery } from "react-query";
import { IReview } from "@/widgets/interface/reviews.interface";
import { useRouter } from "next/navigation";

export const Reviews: FC = (): JSX.Element => {
  const router = useRouter();

  const [fetching, setFetching] = useState(false);
  const [end, setEnd] = useState(20);

  const { data, isLoading, isFetching, isRefetching } = useQuery({
    queryKey: ["previews", end],
    queryFn: () => getPreviews.getPreviewsList(0, end),
    keepPreviousData: true,
  });

  useEffect(() => {
    if (!fetching) return;
    if (isRefetching) return;

    setEnd((prev) => prev + 20);

    setFetching(false);
  }, [fetching, isRefetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any) => {
    if (!global.window) return;

    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div className={`container`} id="reviews">
      <Text type="h2" center mt="100px">
        Отзывы
      </Text>
      <div className={styles.reviews}>
        {!isLoading ? (
          data.map((review: IReview, index: number) => (
            <div
              key={index}
              className={styles.review}
              onClick={() => router.push(review.url)}
            >
              <Text type="h3">{review.author}</Text>
              <Text>
                <span>
                  {new Date(review.review_date * 1000)
                    .toLocaleDateString("en-US")
                    .replace("/", ".")
                    .replace("/", ".")}
                </span>
              </Text>
              <Text mt="20px">{review.text}</Text>
            </div>
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};
