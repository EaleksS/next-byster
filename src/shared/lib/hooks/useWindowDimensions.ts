"use client";

import React from "react";

export const useWindowDimensions = () => {
  const [width, setWidth] = React.useState<number>(
    global.window && window.innerWidth
  );
  const [height, setHeight] = React.useState<number>(
    global.window && window.innerHeight
  );

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    global.window && window.addEventListener("resize", updateWidthAndHeight);
    return () =>
      global.window &&
      window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  return {
    width,
    height,
  };
};
