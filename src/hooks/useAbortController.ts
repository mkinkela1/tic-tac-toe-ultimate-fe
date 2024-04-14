import { useEffect, useRef } from "react";

export const useAbortController = () => {
  const abortController = useRef<AbortController>();

  useEffect(() => {
    abortController.current = new AbortController();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  return { signal: abortController.current?.signal };
};
