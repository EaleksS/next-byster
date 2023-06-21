"use client";

import React from "react";

export const useWindowDimensions = () => {
  const [width, setWidth] = React.useState<number>(
    typeof window !== undefined ? window.innerWidth : 0
  );
  const [height, setHeight] = React.useState<number>(
    typeof window !== undefined ? window.innerHeight : 0
  );

  const updateWidthAndHeight = () => {
    setWidth(typeof window !== undefined ? window.innerWidth : 0);
    setHeight(typeof window !== undefined ? window.innerHeight : 0);
  };

  React.useEffect(() => {
    if (typeof window === undefined) return;

    window && window.addEventListener("resize", updateWidthAndHeight);
    
    return () =>
      window && window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return {
    width,
    height,
  };
};
