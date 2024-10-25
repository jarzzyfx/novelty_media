"use client";
import React from "react";
import { Container, Wrapper } from "../basic";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Wrapper className="min-h-screen flex lg:items-center flex-col-reverse lg:flex-row gap-10 lg:gap-0 my-20 lg:my-0">
      <Container
        gap={20}
        variant={"colLeft"}
        className="lg:w-1/2 w-full relative"
      >
        <h1 className="font-bold text-black lg:text-[57px] text-[2.5em] lg:leading-[68.98px] leading-[1.5em] text-center lg:text-left">
          We are a forefront leader in strategic investment
        </h1>
        <div className="flex items-center gap-2 mx-auto lg:mx-0">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 24 }}
            viewport={{ margin: "0px", once: true }}
            transition={{
              width: { type: "spring", bounce: 0, duration: 1 },
            }}
            className="w-[24px] h-[9px] bg-black rounded-lg"
          ></motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ margin: "0px", once: true }}
            transition={{
              width: { type: "spring", bounce: 0, duration: 2 },
            }}
            className="w-[60px] h-[9px] bg-black rounded-lg"
          ></motion.div>
        </div>
        <p className="font-normal leading-[24px] text-[16px] text-black w-[90%] text-center lg:text-left">
          We own a diversified portfolio that showcases our rich history of
          successful ventures and future-considerate investments. Possessing
          keen eyes and smart minds; we scout, recognize, analyze, select, and
          invest into key markets.
        </p>
        <Button className="rounded-2xl w-full lg:w-fit">Read More</Button>
        <Image
          src={"/svgs/Line-hero.svg"}
          alt="line svg"
          width={512}
          height={65}
          className="absolute -bottom-40 left-10"
        />
      </Container>
      <Container className="lg:w-1/2 w-full relative">
        <Image
          src={"/images/hero.png"}
          alt="Hero Image Goes Here"
          className="rounded-[319px]"
          width={878}
          height={503}
        />
        <Image
          width={57}
          height={62}
          className="absolute -bottom-20 right-4"
          src={"/svgs/dots-container.svg"}
          alt="dots container"
        />
        <div className="absolute top-8 left-20 flex flex-col gap-2 rotate-180">
          <Image
            width={57}
            height={62}
            src={"/svgs/combined-dots.svg"}
            alt="dots container"
          />
          <Image
            width={57}
            height={62}
            src={"/svgs/combined-dots.svg"}
            alt="dots container"
          />
          <Image
            width={57}
            height={62}
            src={"/svgs/combined-dots.svg"}
            alt="dots container"
          />
          <Image
            width={57}
            height={62}
            src={"/svgs/combined-dots.svg"}
            alt="dots container"
          />
          <Image
            width={57}
            height={62}
            src={"/svgs/combined-dots.svg"}
            alt="dots container"
          />
          <Image
            width={57}
            height={62}
            src={"/svgs/combined-dots.svg"}
            alt="dots container"
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
