import React, { FC, HTMLAttributes, useRef } from "react";
import { Container, Wrapper } from "../basic";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Boolean, Children, Div, String } from "@/types/basics";
import Image from "next/image";
import { featuredSectors } from "@/data/featuredSectors";
import { generate_id } from "@/lib/utils";
import { useScroll, useTransform } from "framer-motion";

interface DescriptionCardProps {
  cardTitle: String;
  cardDescription?: String;
  cardContent?: String | Children;
  cardFooter?: String | Children;
  roundBorder?: Boolean;
}

export const DescriptionCard: FC<DescriptionCardProps> = ({
  cardContent,
  cardDescription,
  cardFooter,
  cardTitle,
  roundBorder,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: "all", once: true }}
      transition={{
        y: { type: "spring", bounce: 0 },
        opacity: { duration: 0.2 },
      }}
    >
      <Card
        className={`max-w-[642px] w-full h-fitya ${
          !roundBorder && "rounded-none"
        }`}
      >
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription>{cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>{cardContent}</CardContent>
        <CardFooter>{cardFooter}</CardFooter>
      </Card>
    </motion.div>
  );
};

interface SectorsProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string[];
  positionImage?: "left" | "right" | string;
  img?: string;
}

const SectorsCard: FC<SectorsProps> = ({ text, title, positionImage, img }) => {
  return (
    <Container className="items-start w-full justify-between my-[40px] flex-col gap-5 lg:gap-0 lg:flex-row">
      {positionImage === "left" && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "all", once: true }}
          transition={{
            y: { type: "spring", bounce: 0 },
            opacity: { duration: 0.2 },
          }}
        >
          <Image
            width={501.05}
            height={327}
            src={`${img}`}
            alt="image"
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
            className="p-0 items-start rounded-2xl"
          />
        </motion.div>
      )}
      <DescriptionCard
        roundBorder={false}
        cardTitle={title}
        cardContent={text.map((item, i) => (
          <p className="mb-4" key={i}>
            {item}
          </p>
        ))}
      />
      {positionImage === "right" && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: "all", once: true }}
          transition={{
            y: { type: "spring", bounce: 0 },
            opacity: { duration: 0.2 },
          }}
        >
          <Image
            width={501.05}
            height={327}
            src={`${img}`}
            alt="image"
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
            className="p-0 items-start rounded-2xl"
          />
        </motion.div>
      )}
    </Container>
  );
};

const FeaturedSectors = () => {
  // const containerRef = useRef<Div>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  // });
  // const opacity = useTransform(scrollYProgress, [0, 0.5], []);
  return (
    <Wrapper>
      <header className="w-fit h-fit flex flex-col gap-8 mb-10">
        <h3 className="uppercase text-black font-semibold text-[20px] leading-[24.2px]">
          OUR BUSINESSES
        </h3>
        <h1 className="capitalize text-black font-bold text-[40px] leading-[48.41px]">
          Discover Our Featured <br />
          Sectors
        </h1>
      </header>

      <Container
        // ref={containerRef}
        variant={"colLeftTop"}
        className="gap-[40px]"
      >
        {featuredSectors.map((sector) => {
          let _id = generate_id(sector.title);

          return (
            <SectorsCard
              key={_id}
              text={sector.text}
              title={sector.title}
              positionImage={sector.axis}
              img={sector.img}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default FeaturedSectors;
