import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLLinkElement> {
  icon: React.ElementType;
  link?: string;
}

const FooterLink: FC<Props> = ({ className, children, link, icon: Icon }) => {
  return (
    <Link
      href={`${link ? link : "#"}`}
      className={className + " flex gap-2 items-center"}
    >
      <Icon /> {children}
    </Link>
  );
};

export default FooterLink;
