"use client";

import { FC, useEffect, useState } from "react";
import styles from "./Reviews.module.scss";
import { Loader, Text } from "@/shared";
import { getPreviews } from "@/widgets/services/previews.service";
import { useQuery } from "react-query";
import { IReview } from "@/widgets/interface/reviews.interface";
import { dictionary } from "../../../dictionaries/content";
import { SlSocialVkontakte } from "react-icons/sl";
import Image from "next/image";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export const Reviews: FC<{ lang: string }> = ({ lang }): JSX.Element => {
  const [fetching, setFetching] = useState(false);
  const [end, setEnd] = useState(20);

  const { data, isLoading, isRefetching } = useQuery({
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
    AOS.init({ duration: 1000, once: true });

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
      <div className={styles.name}>
        <Text type="h2" up center>
          {dictionary[lang]?.reviewsTitle}
        </Text>
        <div className={styles.back}>reviews</div>
      </div>
      <div className={styles.reviews}>
        {!isLoading
          ? data.map((review: IReview, index: number) => (
              <div
                key={index}
                className={styles.review}
                onClick={() => window.open(review.url, "_blank")}
                data-aos="fade-up"
              >
                <Text type="h3">
                  {review.source === "VK" && review.author}
                  {review.source === "VK" ? (
                    <SlSocialVkontakte className={styles.social} />
                  ) : review.source === "FUNPAY" ? (
                    <Image
                      src="/logo-funpay.svg"
                      alt="funpay"
                      width={70}
                      height={25}
                    />
                  ) : (
                    review.source
                  )}
                </Text>
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
          : ""}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    </div>
  );
};
