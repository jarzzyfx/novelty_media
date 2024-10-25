"use client";
import { Children, Div, String } from "@/types/basics";
import React, { FC, HTMLAttributes, useEffect, useRef } from "react";
import { Container, Wrapper } from "../basic";
import Image from "next/image";
import { motion } from "framer-motion";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ourMission, whoWeAreText } from "@/data/textData";
import { Check } from "lucide-react";

interface MoreCardProps extends HTMLAttributes<Div> {
  smallTitle: String;
  bigTitle: String;
  descriptionElement?: Children;
  renderImgOn?: "left" | "right";
}

const MissionComponent = () => {
  return (
    <article className="flex flex-col w-full h-fit gap-[16px]">
      <p className="font-normal text-[16px] leading-[19.3px] text-black">
        {ourMission.text1}
      </p>
      <p className="font-normal text-[16px] leading-[19.3px] text-black">
        {ourMission.text2}
      </p>

      <Wrapper className="flex flex-col gap-6">
        {ourMission.missiosns.map((mission, i) => (
          <li key={i} className="flex items-center gap-2 text-black">
            <Check /> {mission}
          </li>
        ))}
      </Wrapper>
    </article>
  );
};

const WhoWeAreComponent = () => {
  return (
    <article className="flex flex-col w-full h-full gap-[60px]">
      <p className="font-normal text-[16px] leading-[21.7px] text-black">
        {whoWeAreText.text1}
      </p>
      <p className="font-normal text-[16px] leading-[21.7px] text-black">
        {whoWeAreText.text2}
      </p>
    </article>
  );
};

export const MoreCard: FC<MoreCardProps> = ({
  children,
  smallTitle,
  bigTitle,
  descriptionElement,
  renderImgOn,
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:items-center lg:gap-[40px] justify-between h-fit">
      {renderImgOn === "left" && children}
      <section className="w-full h-fit flex flex-col gap-[32px] items-start ">
        <header className="flex flex-col gap-[16px] items-start">
          {/* small title div */}
          <div className="flex items-center h-[62px] gap-[24px]">
            <span className="bg-[#FF530E] h-full border-[3px] rounded-xl border-[#FF530E]"></span>
            <motion.h3
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "200px", once: true }}
              transition={{
                x: { type: "spring", bounce: 0, duration: 1 },
                opacity: { duration: 1 },
              }}
              className="uppercase text-[20px] text-[#FF530E] leading-[27.24px] font-normal"
            >
              {/* motion goes here */}
              {smallTitle}
            </motion.h3>
          </div>
          <h1 className="font-bold text-[40px] leading-[48.41px] text-black">
            {bigTitle}
          </h1>
        </header>
        {descriptionElement}
      </section>
      {renderImgOn === "right" && children}
    </div>
  );
};

const More = () => {
  return (
    <Wrapper className="flex flex-col justify-center min-h-screen gap-10 lg:gap-0">
      <MoreCard
        renderImgOn="left"
        descriptionElement={<WhoWeAreComponent />}
        bigTitle="At Novelty Global services, we are more than just a holding company"
        smallTitle="Who we are"
      >
        <Container variant={"rowLeftTop"} className="h-full">
          <AspectRatio
            ratio={16 / 16}
            className="rounded-lg"
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            <Image
              src="/images/fx-img.png"
              alt="Image"
              layout="fill"
              className="rounded-md object-cover"
              objectFit="cover"
              loading="lazy"
            />
          </AspectRatio>
        </Container>
      </MoreCard>
      <MoreCard
        renderImgOn="right"
        descriptionElement={<MissionComponent />}
        bigTitle={ourMission.title}
        smallTitle="our mission"
      >
        <Container className="h-full shadow-none">
          <Image
            src="/images/growth.png"
            alt="Image"
            className="rounded-none shadow-xl"
            // objectFit="cover"
            loading="lazy"
            width={564}
            height={412}
          />
        </Container>
      </MoreCard>
    </Wrapper>
  );
};

export default More;
