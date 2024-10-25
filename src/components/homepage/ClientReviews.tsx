import React, { FC } from "react";
import { Wrapper } from "../basic";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { customerReviewsOne } from "@/data/customerReviews";
import { generate_id } from "@/lib/utils";

interface ReviewTitleCardProps {
  title: string;
  description: string;
}

interface ReviewCard {
  title: string;
  image: string;
  position: string;
  description: string;
}

const ReviewTitleCard: FC<ReviewTitleCardProps> = function ({
  description,
  title,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 200 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ margin: "-200px", once: true }}
      transition={{
        scale: { type: "spring", bounce: 0, duration: 1 },
        y: { type: "spring", bounce: 0, duration: 1 },
        opacity: { duration: 0.2 },
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-[#121213] text-[48px] leading-[60px] font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="font-normal text-[20px] leading-[40px] text-[#121213CC]">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};
const ReviewCard: FC<ReviewCard> = function ({
  description,
  title,
  image,
  position,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 200 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ margin: "200px", once: true }}
      transition={{
        scale: { type: "spring", bounce: 0, duration: 1 },
        y: { type: "spring", bounce: 0, duration: 1 },
        opacity: { duration: 0.2 },
      }}
    >
      <Card className="rounded-none">
        <CardHeader>
          <CardTitle className="flex gap-10 items-center">
            <Avatar className="w-[80px] h-[80px]">
              <AvatarImage src={image} />
              <AvatarFallback>{title.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-[20px] leading-[30px] text-[#000000]">
                {title}
              </h3>
              <h5 className="font-normal text-[16px] leading-[30px] text-[#808080]">
                {position}
              </h5>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#121213CC] font-normal text-[16px] leading-[24px]">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ClientReviews = () => {
  return (
    <Wrapper className="p-[50px] bg-[#F6F6F6]">
      <section className="grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-4 gap-10">
        <ReviewTitleCard
          title="Words from our satisfied clients"
          description="These testimonials offer a glimpse into the positive impacts that weve had on their financial journeys"
        />
        {customerReviewsOne.map((review) => {
          const _id = generate_id(review.title);
          return (
            <ReviewCard
              key={_id}
              description={review.description}
              image={review.image}
              position={review.position}
              title={review.title}
            />
          );
        })}
      </section>
    </Wrapper>
  );
};

export default ClientReviews;
