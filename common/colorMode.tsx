"use client";

import { useEffect, useState } from "react";

export type ColorMode = "system" | "light" | "dark";

export function setColorMode(colorMode: ColorMode) {
  if (colorMode === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.colorMode = "dark";
    return;
  }

  document.documentElement.classList.remove("dark");
  if (colorMode === "light") {
    localStorage.colorMode = "light";
    return;
  }

  localStorage.removeItem("colorMode");
}

export function getColorMode(): ColorMode {
  if (!("colorMode" in localStorage)) {
    return "system";
  }

  if (localStorage.colorMode === "dark") {
    return "dark";
  }

  if (localStorage.colorMode === "light") {
    return "light";
  }

  return "system";
}

export function useColorMode() {
  const [colorModeState, setColorModeState] =
    useState<ColorMode>(getColorMode());

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      if (e.key !== null && e.key !== "colorMode") {
        return;
      }

      setColorModeState(getColorMode());
    });
  }, []);

  return {
    setColorMode,
    getColorMode,
    colorMode: colorModeState,
  } as const;
}
