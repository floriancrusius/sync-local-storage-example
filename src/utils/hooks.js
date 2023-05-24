import { useContext } from "react";
import NumberContext from "./NumberContext";
export const useNumber = () => {
  const numberContextValues = useContext(NumberContext);
  return numberContextValues;
};
