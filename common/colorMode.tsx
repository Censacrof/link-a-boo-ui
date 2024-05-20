"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const colorModeValues = ["system", "light", "dark"] as const;
export type ColorMode = (typeof colorModeValues)[number];

export type ColorModeContextValue = {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
};
const ColorModeContext = createContext<ColorModeContextValue | undefined>(
  undefined,
);

export type ColorModeProviderProps = { children?: ReactNode };
export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorModeState, setColorModeState] = useState<ColorMode>("system");

  useEffect(() => {
    setColorModeState(getColorMode());
  }, []);

  const setColorMode = useCallback((colorMode: ColorMode) => {
    if (colorMode === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      window.localStorage.colorMode = "dark";
      setColorModeState("dark");
      return;
    }

    if (colorMode === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      window.localStorage.colorMode = "light";
      setColorModeState("light");
      return;
    }

    document.documentElement.classList.remove("light");
    document.documentElement.classList.remove("dark");
    window.localStorage.removeItem("colorMode");
    setColorModeState("system");
  }, []);

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.key !== null && e.key !== "colorMode") {
        return;
      }

      setColorModeState(getColorMode());
    };

    window.addEventListener("storage", listener);

    return () => window.removeEventListener("storage", listener);
  }, []);

  return (
    <ColorModeContext.Provider
      value={{ colorMode: colorModeState, setColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export function getColorMode(): ColorMode {
  const colorMode = window.localStorage.getItem("colorMode");
  if (!colorMode) {
    return "system";
  }

  if (colorMode === "dark") {
    return "dark";
  }

  if (colorMode === "light") {
    return "light";
  }

  return "system";
}

export function useColorMode() {
  const value = useContext(ColorModeContext);

  if (!value) {
    throw new Error("useColorMode invoked outside of ColorModeProvider");
  }

  return value;
}
