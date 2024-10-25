import React, { FC } from "react";
import { Children, Classname } from "@/types/basics";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
interface WrapperProps {
  children: Children;
  className?: Classname;
}

const wrapperclasses = cva(
  "w-full max-w-[1440px] bg-[#fff] p-24px lg:p-[30px] p-[14px] mx-auto"
);

export const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return <div className={cn(wrapperclasses({ className }))}>{children}</div>;
};
