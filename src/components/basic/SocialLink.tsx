import Link from "next/link";
import React, { FC, LinkHTMLAttributes } from "react";

interface props extends LinkHTMLAttributes<HTMLLinkElement> {
  icon: React.ElementType;
  color: string;
}

const SocialLink: FC<props> = ({ href, className, color, icon: Icon }) => {
  return (
    <Link
      href={`${href ? href : "#"}`}
      className={
        className +
        ` group bg-slate-400 hover:text-${color}-700 hover:bg-${color}-400 p-4 rounded-full hover:opacity-50 hover:scale-105 active:scale-75`
      }
    >
      <Icon className="group-hover:scale-150 group-hover:rotate-12 ease-linear duration-200" />
    </Link>
  );
};

export default SocialLink;
