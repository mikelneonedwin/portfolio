import * as Theme from "@/contexts/theme";
import { useEffect, useState } from "react";

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: Theme.ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme.Theme>(
    () => (localStorage.getItem(storageKey) as Theme.Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme.Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <Theme.ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </Theme.ThemeProviderContext.Provider>
  );
}
