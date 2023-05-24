import React, { useState } from "react";

const initialValues = {
  no: 0,
};

const getStorageNumber = () => {
  const secret = localStorage.getItem("secret");
  return secret ? parseInt(secret, 10) : 0;
};

const context = {
  no: getStorageNumber(),
  setUser: () => {},
};

const NumberContext = React.createContext(context);

export const NumberContextProvider = ({ children }) => {
  const [number, setLocalNumber] = useState(context.no);

  const setNumber = (number) => {
    if (number) {
      setLocalNumber(number);
      localStorage.setItem("secret", number);
    }
  };

  const removeNumber = () => {
    setLocalNumber(initialValues);
    localStorage.removeItem("secret");
  };

  return (
    <NumberContext.Provider value={{ number, setNumber, removeNumber }}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberContext;
