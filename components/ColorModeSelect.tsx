"use client";

import { colorModeValues, useColorMode } from "@/common/colorMode";
import {
  faCircleHalfStroke,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useMemo } from "react";
import IconButton from "./IconButton";

export default function ColorModeSelect() {
  const { colorMode, setColorMode } = useColorMode();

  const icon = useMemo(() => {
    if (colorMode === "dark") {
      return faMoon;
    }

    if (colorMode === "light") {
      return faSun;
    }

    return faCircleHalfStroke;
  }, [colorMode]);

  const handleClick = useCallback(() => {
    const nextColorMode =
      colorModeValues[
        (colorModeValues.indexOf(colorMode) + 1) % colorModeValues.length
      ];

    setColorMode(nextColorMode);
  }, [colorMode, setColorMode]);

  return (
    <IconButton
      className="aspect-square"
      icon={<FontAwesomeIcon icon={icon} />}
      onClick={handleClick}
    />
  );
}
