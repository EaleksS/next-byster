"use client";

import React from "react";

export const useWindowDimensions = () => {
  const [width, setWidth] = React.useState<number>(window && window.innerWidth);
  const [height, setHeight] = React.useState<number>(window && window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window &&window.innerWidth);
    setHeight(window &&window.innerHeight);
  };

  React.useEffect(() => {
    window && window.addEventListener("resize", updateWidthAndHeight);
    return () =>  window && window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return {
    width,
    height,
  };
};
