import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLink from "./basic/FooterLink";
import { getToKnow, socials, usefulLinks } from "@/data/footer";
import { generate_id, getCurrentYear } from "@/lib/utils";
import SocialLink from "./basic/SocialLink";

type Props = {};

export const Footer = (props: Props) => {
  const year = getCurrentYear();
  return (
    <footer className=" w-full min-h-[300px] bg-[#3b3b3b] p-10 flex flex-col gap-1 text-white">
      {/* TODO: add icons to links */}
      {/* TODO: work spacing for links */}
      <section className="grid grid-cols-4 grid-rows-1 gap-2 mb-10">
        <div>
          <header className="flex items-center gap-2 text-white text-lg font-bold mb-8">
            <Link href={"/"} className="w-[40px] h-[30px] relative">
              <Image
                src={"/footer_logo.png"}
                fill={true}
                alt="logo"
                className="rounded-sm"
              />
            </Link>
            Novelty Global Services
          </header>
          <article className="text-xs text-[#f6f3f3] font-extralight leading-5">
            Novelty Global Ventures is a holding company that specializes in
            investing in and managing a diverse range of businesses across
            different industries.
          </article>
        </div>
        <div>
          <header className="mb-8">
            <h2 className="text-lg font-bold">Get To Know</h2>
          </header>
          <main className="flex flex-col gap-2">
            {getToKnow.map((link) => {
              const _id = generate_id(link.title);

              return (
                <FooterLink icon={link.icon} key={_id}>
                  {link.title}
                </FooterLink>
              );
            })}
          </main>
        </div>
        <div>
          <header className="text-lg font-bold mb-8">Useful Links</header>
          <main className="flex flex-col gap-6">
            {usefulLinks.map((link) => {
              const _id = generate_id(link.title);

              return (
                <FooterLink icon={link.icon} key={_id}>
                  {link.title}
                </FooterLink>
              );
            })}
          </main>
        </div>
        <div>
          <header className="text-lg font-bold mb-8">Get in Touch</header>
          <main className="flex flex-col gap-2">
            <Link href={"#"}>Email: [info@noveltyglobalventures.com]</Link>
            <Link href={"#"}>Phone: +1 (123) 456-7890</Link>
            <Link href={"#"}>
              Headquarters: 123 Main Street, City, State, Zip
            </Link>
          </main>
        </div>
      </section>
      <section className="flex items-center justify-center my-10 flex-col gap-8">
        <div className="flex flex-col items-center gap-6">
          <header className="text-lg font-bold">Our Socials</header>
          <main className="flex items-center gap-6">
            {socials.map((social) => {
              const id = generate_id(social.color);

              return (
                <SocialLink color={social.color} icon={social.icon} key={id} />
              );
            })}
          </main>
        </div>
        <p>Copyright @{year}</p>
        <p> Novelty Global Venture LLC, All rights Reserved</p>
      </section>
    </footer>
  );
};
