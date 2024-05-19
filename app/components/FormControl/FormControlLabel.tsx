"use client";

import clsx from "clsx";
import { LabelHTMLAttributes, forwardRef } from "react";
import { useFormControlContext } from "./FormControl";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default forwardRef<HTMLLabelElement, LabelProps>(
  function FormControlLabel({ className, ...props }, ref) {
    const formControl = useFormControlContext();
    return (
      <label
        htmlFor={formControl?.id}
        className={clsx(
          "text-inherit",
          formControl?.isOptional &&
            "after:pl-1 after:italic after:opacity-60 after:content-['(optional)']",
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
