"use client";

import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      className={clsx(
        "h-8 rounded border border-solid border-gray-950 px-2",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
