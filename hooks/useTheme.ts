import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function useTheme(defaultTheme?: Theme) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (defaultTheme) return defaultTheme;

    let theme: Theme = "dark";

    if (typeof window !== "undefined") {
      const getTheme = localStorage.getItem("theme");
      if (getTheme) {
        theme = getTheme as Theme;
      }
    }

    return theme!;
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
