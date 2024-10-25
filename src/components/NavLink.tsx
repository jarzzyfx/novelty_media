import { Boolean, Children, String } from "@/types/basics";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface NavLinkProps {
  children: Children;
  hasChildren?: Boolean;
  link?: String;
}

export const NavLink: FC<NavLinkProps> = ({ children, hasChildren, link }) => {
  return (
    <Link
      className="text-xs p-[1px] text-black flex items-center gap-[2px] font-bold capitalize"
      href={`${link}`}
    >
      {children} {hasChildren && <ChevronDown className="w-[12px] h-[12px]" />}
    </Link>
  );
};
