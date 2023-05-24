import { useEffect, useState, useCallback } from "react";
import { useNumber } from "./hooks";
const secret = "secret";

export const useStorage = () => {
  const { number, setNumber } = useNumber();

  const [focused, setFocused] = useState(false);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleStorageChange = useCallback(
    (e) => {
      console.log("%ce:", "color: lime; font-size: 1.125rem;", e);
      const n = parseInt(e.newValue, 10);

      if (Number.isNaN(n)) return;
      switch (e.key) {
        case secret:
          setNumber(n);
          break;
        default:
          break;
      }
    },
    [setNumber]
  );

  useEffect(() => {
    setFocused(document.hasFocus());
  }, []);

  useEffect(() => {
    if (!focused) window.addEventListener("storage", handleStorageChange);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      if (!focused) window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, [focused, handleStorageChange]);

  useEffect(() => {
    if (!focused) return;
    localStorage.setItem(secret, number);
  }, [focused, number]);
};

export const Storage = () => {
  useStorage();
  return false;
};

export default useStorage;
