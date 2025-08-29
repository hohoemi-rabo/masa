"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // システムの設定を検出
  const getSystemTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  };

  // テーマを解決する（system設定を考慮）
  const resolveTheme = (currentTheme: Theme): "light" | "dark" => {
    if (currentTheme === "system") {
      return getSystemTheme();
    }
    return currentTheme;
  };

  // テーマを適用する
  const applyTheme = (newResolvedTheme: "light" | "dark") => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(newResolvedTheme);
    setResolvedTheme(newResolvedTheme);
  };

  // テーマを設定する
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    const resolved = resolveTheme(newTheme);
    applyTheme(resolved);
  };

  // ダークモードをトグルする
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";
    handleSetTheme(newTheme);
  };

  // 初期化
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme || "system";
    setTheme(initialTheme);
    
    const resolved = resolveTheme(initialTheme);
    applyTheme(resolved);
    
    setMounted(true);
  }, []);

  // システム設定の変更を監視
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        const resolved = resolveTheme("system");
        applyTheme(resolved);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  // ハイドレーション前は何も表示しない（フラッシュ防止）
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme: handleSetTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  
  // SSR環境またはコンテキストが未定義の場合はデフォルト値を返す
  if (context === undefined || typeof window === "undefined") {
    return {
      theme: "system" as Theme,
      resolvedTheme: "light" as "light" | "dark",
      setTheme: () => {},
      toggleTheme: () => {},
    };
  }
  
  return context;
}