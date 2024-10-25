import React, { FC } from "react";
import { Container, Wrapper } from "../basic";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { corevalues } from "@/data/corevalues";
import { generate_id } from "@/lib/utils";
import { motion } from "framer-motion";

interface CorevaluesCardProps {
  title: string;
  description: string;
  image: number;
  position?: "left" | "right" | string;
}

const CorevaluesCard: FC<CorevaluesCardProps> = function ({
  description,
  image,
  title,
  position,
}) {
  return (
    <section className="lg:min-h-[424px] h-[312px] w-full my-10">
      <motion.div
        initial={{ opacity: 0, x: position === "right" ? -200 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-200px", once: true }}
        transition={{
          x: { type: "spring", bounce: 0, duration: 1 },
          opacity: { duration: 0.2 },
        }}
        className={`w-full max-w-[700px] relative ${
          position === "right" && "ml-auto"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ margin: "-200px", once: true }}
          transition={{
            scale: { type: "spring", bounce: 0 },
            opacity: { duration: 0.2 },
          }}
          className="max-w-[319px] h-[312px] w-full relative mx-auto lg:mx-0"
        >
          <Image
            src={`/images/corevalues-${image}.png`}
            alt={title}
            fill={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
          />
        </motion.div>

        <Card className="absolute top-0 left-0 lg:translate-y-[6%] translate-y-[50%] w-full lg:translate-x-1/4">
          <CardHeader className="mb-[20px]">
            <CardTitle className="font-semibold text-[24px] leading-[32.68px] text-[#121213]">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-normal text-[20px] leading-[40px] text-[#121213CC]">
              {description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

const Corevalues = () => {
  return (
    <Wrapper className="mt-10 lg:mt-20">
      <header className="w-full max-w-[528px] mb-10">
        <h3 className="font-semibold text-[20px] leading-[24.2px] mb-[25px]">
          OUR CORE VALUES
        </h3>
        <h1 className="font-bold text-[40px] leading-[48.41px]">
          Our Worth Is not Only In Assets, But In Value
        </h1>
      </header>
      <Container variant={"colLeftTop"} className="lg:gap-[100px] gap-[300px]">
        {corevalues.map((value) => {
          const _id = generate_id(value.title);
          return (
            <CorevaluesCard
              key={_id}
              description={value.description}
              image={value.image}
              title={value.title}
              position={value.position}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Corevalues;
