import React from "react";
import { Container, Wrapper } from "../basic";
import { Button } from "../ui/button";
import Image from "next/image";
import { MoreCard } from "./More";

const DownloadPage = () => {
  return (
    <Wrapper className="min-h-screen flex items-center my-20 bg-[#F6F6F6]">
      <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 gap-10">
        <Container variant={"colLeftTop"} gap={36}>
          <article className="w-full max-w-[547px]">
            <h1 className="font-semibold text-[48px] leading-[60px] mb-[36px]">
              Download from android or Apple store
            </h1>
            <Button className="rounded-[4px] bg-[#03578F] p-[36px] font-semibold text-[24px] leading-[30px] w-full lg:w-fit">
              Download Now
            </Button>
          </article>
          <div className="flex w-full flex-col lg:flex-row justify-between items-center gap-10">
            <Button className="text-[#FAFAFA] w-[321px] height-[95px] rounded-full py-12">
              <Image
                src={"/svgs/apple.svg"}
                width={44}
                height={48.08}
                alt="apple download - image"
              />
              <div className="grid grid-rows-2 gap-1">
                <h4 className="font-normal text-[18px] leading-[21.44px]">
                  Download on
                </h4>
                <p className="font-[500] text-[24px] leading-[28.78px]">
                  App Store
                </p>
              </div>
            </Button>
            <Button className="text-[#FAFAFA] w-[321px] height-[95px] rounded-full py-12">
              <Image
                src={"/svgs/googleplay.svg"}
                width={44}
                height={48.08}
                alt="apple download - image"
              />
              <div className="grid grid-rows-2 gap-1">
                <h4 className="font-normal text-[18px] leading-[21.44px]">
                  Download on
                </h4>
                <p className="font-[500] text-[24px] leading-[28.78px]">
                  Google Play
                </p>
              </div>
            </Button>
          </div>
        </Container>
        <MoreCard
          bigTitle="At Novelty Global services, we are more than just a holding company"
          smallTitle="who we are"
          descriptionElement={
            <p className="font-normal text-[20px] leading-[40px] text-[#121213CC]">
              We embrace change, remain agile, and adapt quickly to evolving
              market conditions, technological advancements, and business trends
              to stay ahead of the curve and capitalize on new opportunities.
            </p>
          }
        />
      </div>
    </Wrapper>
  );
};

export default DownloadPage;
