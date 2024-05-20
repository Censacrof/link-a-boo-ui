"use client";

import clsx from "clsx";
import { ReactNode, forwardRef } from "react";
import Button, { ButtonProps } from "./Button";

export type IconButtonProps = Omit<ButtonProps, "children"> & {
  icon?: ReactNode;
};

export default forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ className, icon, ...props }, ref) {
    return (
      <Button
        className={clsx("aspect-square rounded-full", className)}
        {...props}
        ref={ref}
      >
        {icon}
      </Button>
    );
  },
);
