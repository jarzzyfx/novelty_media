import React from "react";
import { Container, Wrapper } from "../basic";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {};

const Subscribe = (props: Props) => {
  return (
    <Wrapper className="w-full min-h-screen flex items-center">
      <Container className="w-full h-full" variant={"colDefault"} gap={32}>
        <h1 className=" font-semibold text-[48px] leading-[60px] text-center text-[#121213]">
          Subscribe to our newsletter
        </h1>
        <p className="font-normal text-[20px] leading-[40px] text-center text-[#121213CC]">
          Don’t miss out on our special offers
        </p>
        <Container
          gap={5}
          variant={"rowLeft"}
          className="w-full max-w-[729px] h-[104px] rounded-[10px] ring-1 ring-[#615F5F4D] bg-[#DEDFE066] px-10 relative"
        >
          <Input
            type="email"
            className="h-full bg-transparent font-normal text-[24px] leading-[28.64px] text-[#454545]"
            placeholder="Enter Email Address"
          />
          <Button className="lg:w-[199px] h-[72px] w-full rounded-sm lg:relative absolute bottom-0 left-0 translate-y-[150%] lg:translate-x-0 lg:translate-y-0">
            Subscribe Now
          </Button>
        </Container>
      </Container>
    </Wrapper>
  );
};
export default Subscribe;
