"use client";

import clsx from "clsx";
import {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useId,
  useMemo,
} from "react";

export type DivProps = HTMLAttributes<HTMLDivElement> & {
  isOptional?: boolean;
};

export default forwardRef<HTMLDivElement, DivProps>(function Div(
  { className, isOptional, ...props },
  ref,
) {
  const id = useId();

  const value: FormControlContextValue = useMemo(() => {
    return {
      id,
      isOptional,
    };
  }, [id, isOptional]);

  return (
    <FormControlContext.Provider value={value}>
      <div
        className={clsx("flex flex-col gap-1", className)}
        {...props}
        ref={ref}
      />
    </FormControlContext.Provider>
  );
});

export type FormControlContextValue = {
  id: string;
  isOptional?: boolean;
};
const FormControlContext = createContext<FormControlContextValue | undefined>(
  undefined,
);

export function useFormControlContext() {
  return useContext(FormControlContext);
}
