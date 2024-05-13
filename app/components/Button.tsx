import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, ...props },
  ref,
) {
  return (
    <button
      className={clsx(
        "h-10 bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
