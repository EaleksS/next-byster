import { useCallback, useState, useEffect } from "react";

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback((text: string) => {
    if (typeof text !== "string") return;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
      })
      .catch((e) => {
        console.error("Unable to copy text:", e);
      });
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCopied]);

  return { isCopied, copy };
};
