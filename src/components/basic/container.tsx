import { cn } from "@/lib/utils";
import { Children, Div, Number } from "@/types/basics";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, FC } from "react";

interface ContainerProps
  extends HTMLAttributes<Div>,
    VariantProps<typeof Containervariantprops> {
  children?: Children;
  gap?: Number;
  ref?: any;
}

export const Containervariantprops = cva("flex w-full h-full ", {
  variants: {
    variant: {
      rowDefault: "flex-row items-center justify-center",
      rowLeftTop: "flex-row items-start justify-start",
      rowLeftBottom: "flex-row items-end justify-start",
      rowLeft: "flex-row items-center justify-start",
      rowRightTop: "flex-row items-start justify-end",
      rowRightBottom: "flex-row items-end justify-end",
      rowRight: "flex-row items-center justify-end",
      rowTop: "flex-row items-start justify-center",
      rowBottom: "flex-row items-end justify-center",

      // colums
      colDefault: "flex-col items-center justify-center",
      colLeftTop: "flex-col items-start justify-start",
      colLeftBottom: "flex-col items-start justify-end",
      colLeft: "flex-col items-start justify-center",
      colRightTop: "flex-col items-end justify-start",
      colRightBottom: "flex-col items-end justify-end",
      colRight: "flex-col items-end justify-center",
      colTop: "flex-col items-center justify-start",
      colBottom: "flex-col items-center justify-end",
    },
  },
  defaultVariants: {
    variant: "rowDefault",
  },
});

export const Container: FC<ContainerProps> = ({
  children,
  className,
  variant,
  gap,
  ref,
}) => {
  return (
    <div
      ref={ref}
      style={{ gap }}
      className={cn(Containervariantprops({ className, variant }))}
    >
      {children}
    </div>
  );
};
