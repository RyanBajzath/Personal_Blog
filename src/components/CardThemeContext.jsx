// File: CardThemeContext.js
import React, { createContext, useState } from 'react';

const CardThemeContext = createContext();

export function CardThemeProvider({ children }) {
  const [activeCard, setActiveCard] = useState("hobbies");

  return (
    <CardThemeContext.Provider value={{ activeCard, setActiveCard }}>
      {children}
    </CardThemeContext.Provider>
  );
}

export default CardThemeContext;
