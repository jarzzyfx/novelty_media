"use client";
import React, { useState, useEffect } from "react";
import { Container, Wrapper } from "./basic";
import { Button } from "./ui/button";
import { NavLink } from "./NavLink";
import { AlignRight, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Extend the window interface to include the google object and googleTranslateElementInit function
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

type Props = {};

export const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Define menuSlide locally with condition for initial state based on isMobile
  const menuSlide = {
    initial: {
      x:
        typeof window !== "undefined" && window.innerWidth < 1024
          ? "100%"
          : "0%",
      transition: { duration: 0.3 },
    },
    enter: {
      x: "0%",
      transition: { duration: 0.3 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  // Google translator
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = googleTranslateElementInit;
    addGoogleTranslateScript();

    const customizeWidget = () => {
      const intervalId = setInterval(() => {
        const iframe = document.querySelector(
          "iframe.goog-te-menu-frame"
        ) as HTMLIFrameElement;
        if (iframe && iframe.contentDocument) {
          const selectElement = iframe.contentDocument.querySelector(
            ".goog-te-combo"
          ) as HTMLElement;
          if (selectElement) {
            selectElement.style.padding = "5px";
            selectElement.style.borderRadius = "5px";
            selectElement.style.border = "1px solid #ccc";
            selectElement.style.fontSize = "16px";
            selectElement.style.color = "#333";
            clearInterval(intervalId);
          }
        }
      }, 100);
    };

    document.addEventListener("DOMNodeInserted", (event) => {
      if ((event.target as HTMLElement).id === "google_translate_element") {
        customizeWidget();
      }
    });

    return () => {
      document.removeEventListener("DOMNodeInserted", customizeWidget);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-col fixed top-0 left-0 w-full z-50">
      <Container variant={"rowLeft"} className="bg-white">
        <Wrapper className="bg-transparent flex items-center justify-between">
          <section className="w-full h-[45px] lg:h-fit flex items-center justify-between lg:justify-normal">
            {/* TODO: Remember to add an actual logo */}
            <Link
              href={"/"}
              className="lg:w-[140px] lg:h-[30px] w-[140px] h-[25px] relative"
            >
              <Image src={"/logo.png"} fill={true} alt="logo" />
            </Link>

            <Button
              id="hamburger"
              onClick={toggleNav}
              className="lg:hidden flex mr-4"
              variant={"outline"}
            >
              <AlignRight />
            </Button>

            {/* Menu */}
            <motion.div
              id="nav-contents"
              variants={menuSlide}
              animate={isMobile ? (isOpen ? "enter" : "exit") : "initial"}
              initial="initial"
              className={`w-full flex items-center justify-between absolute top-0 right-0 lg:relative h-screen lg:h-fit bg-white flex-col lg:flex-row p-16 lg:p-0 lg:ml-[100px] ${
                isMobile && (isOpen ? "translate-x-0" : "translate-x-[100%]")
              } lg:translate-x-0`}
            >
              <header className="lg:hidden flex w-full h-4 justify-end items-center">
                <Button id="close" variant={"outline"} onClick={toggleNav}>
                  <X width={15} height={15} />
                </Button>
              </header>
              <Container
                variant={"rowLeft"}
                className="lg:gap-[13px] gap-12 flex-col lg:flex-row items-start lg:items-center border-b-[1px] border-slate-200 lg:border-none h-fit pb-8 lg:pb-0"
              >
                <NavLink link="/company" hasChildren>
                  Company
                </NavLink>
                <NavLink link="/industries" hasChildren>
                  Industries
                </NavLink>
                <NavLink link="/core-values">Core Values</NavLink>
                <NavLink link="/news-room">News Room</NavLink>
                <div
                  id="google_translate_element"
                  className="google-t mx-auto"
                ></div>
              </Container>
              <section className="lg:w-1/2 w-full flex lg:items-center lg:justify-end gap-[20px] flex-col lg:flex-row items-start">
                <Button
                  variant={"ghost"}
                  className="text-black justify-start lg:justify-center"
                >
                  <Search />
                </Button>
                <Container className="lg:gap-[13px] gap-8 max-w-[225px] lg:justify-between flex-col lg:flex-row items-start lg:items-center">
                  <NavLink link="/contact-us">Contact Us</NavLink>
                  <NavLink link="/career">Career</NavLink>
                  <NavLink link="/downloads">Downloads</NavLink>
                </Container>
                <Button className="rounded-xl">Login</Button>
              </section>
            </motion.div>
          </section>
        </Wrapper>
      </Container>
    </header>
  );
};
