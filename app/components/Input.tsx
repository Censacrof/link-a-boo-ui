"use client";

import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";
import { useFormControlContext } from "./FormControl/FormControl";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  const formControl = useFormControlContext();
  return (
    <input
      id={formControl?.id}
      required={!formControl?.isOptional}
      className={clsx(
        "h-8 rounded border border-solid border-gray-950 px-2",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
