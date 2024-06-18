"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  //  Интерфейс для определения каким может быть контекст
  mode: string; // Состояние темы
  setMode: (mode: string) => void; // описание функции изменения состояния темы (возвращает пустоту так как занимается изменением состояния)
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); //  создаем контекст для последующей передачи в дочерние компоненты
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // провайдер является проводником контекста для передачи в дочерние компоненты. Вложенные элементы получает данные этого контекста
  const [mode, setMode] = useState(""); // устанавливаем текущее состояние
  const handleThemeChange = () => {};

  if (mode === "dark") {
    setMode("light");
    document.documentElement.classList.add("light");
  } else {
    setMode("dark");
    document.documentElement.classList.add("dark");
  }

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
