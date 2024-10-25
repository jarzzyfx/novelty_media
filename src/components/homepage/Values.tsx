import React, { FC } from "react";
import { Container, Wrapper } from "../basic";
import Image from "next/image";
import { valuesData } from "@/data/values";
import { generate_id } from "@/lib/utils";

interface ValueCardProps {
  icon: number;
  title: string;
  description: string;
}

const ValueCard: FC<ValueCardProps> = function ({ description, icon, title }) {
  return (
    <Container variant={"rowLeftTop"} className="lg:gap-[50px] gap-[20px]">
      <Image
        src={`/svgs/value${icon}.svg`}
        alt={`${title} - image`}
        width={49}
        height={49}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."
      />

      <Container gap={16} variant={"colLeftTop"}>
        <h2 className="font-semibold text-[24px] leading-[32.68px] text-[#121213]">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[24px] text-[#121213CC]">
          {description}
        </p>
      </Container>
    </Container>
  );
};

const Values = () => {
  return (
    <Wrapper className="bg-[#D6CCE1] flex items-center justify-center flex-col ">
      <h1 className="font-bold text-[#000000] text-[40px] leading-[48.41px] text-center my-20">
        The Holding Company With A Strong Foot-Hold
      </h1>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4 gap-10">
        {valuesData.map((data) => {
          const _id = generate_id(data.title);
          console.log(_id);
          return (
            <ValueCard
              key={_id}
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Values;
