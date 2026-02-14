"use client";

import { useEffect } from "react";

export default function ThemeService() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark: boolean) => {
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
    };

    // Initial theme
    applyTheme(mediaQuery.matches);

    // Listen for system changes
    const handler = (e: MediaQueryListEvent) => {
      applyTheme(e.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return null;
}
