"use client";
import { createContext, useContext, useState } from "react";

const AccentColorContext = createContext();

export const useAccentColor = () => useContext(AccentColorContext);

export const AccentColorProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState("#22D3EE");

  return (
    <AccentColorContext.Provider value={{ accentColor, setAccentColor }}>
      {children}
    </AccentColorContext.Provider>
  );
};
