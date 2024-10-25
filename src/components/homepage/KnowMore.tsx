import Image from "next/image";
import React from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Container } from "../basic";

type Props = {};

const KnowMore = (props: Props) => {
  return (
    <Container className="w-full lg:my-[150px] lg:h-[412px] h-screen">
      <AspectRatio
        ratio={18 / 6}
        className="rounded-lg relative w-full lg:h-full h-[412px]"
      >
        <Image
          src="/images/knowmore.png"
          alt="Image"
          layout="fill"
          className="rounded-md lg:object-cover object-fill"
          loading="lazy"
        />
      </AspectRatio>
    </Container>
  );
};

export default KnowMore;
