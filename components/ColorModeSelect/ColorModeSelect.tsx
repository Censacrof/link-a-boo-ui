"use client";

import dynamic from "next/dynamic";
import { ColorModeSelectButton } from "./ColorModeSelectInner";

export default dynamic(() => import("./ColorModeSelectInner"), {
  ssr: false,
  loading: () => {
    return <ColorModeSelectButton className="animate-pulse" disabled />;
  },
});
