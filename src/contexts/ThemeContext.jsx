import { useContext, createContext, useState, useEffect } from "react";
// Create (ChangeContext)
const ChangeContext = createContext();

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // Provide (ChangeContext.Provider)
  useEffect(() => {}, []);
  return (
    <ChangeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ChangeContext.Provider>
  );
}
// Use   (useContext(ChangeContext)) trough useTheme export
export const useTheme = () => useContext(ChangeContext);
