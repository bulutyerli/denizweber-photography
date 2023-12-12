"use client";

import { IoStarSharp } from "react-icons/io5";
import { Card, CardBody, Divider, CardHeader } from "@nextui-org/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function ClientReview({ reviews }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const stars = () => {
    return (
      <div className="flex gap-1">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
    );
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section>
      <div ref={emblaRef} className="overflow-hidden h-fit relative">
        <div className="flex gap-2 m-3">
          {reviews.map((review, i) => {
            return (
              <Card
                radius="none"
                className="max-w-sm flex-shrink-0 flex-grow-0 basis-full"
                key={i}
              >
                <CardHeader className="flex justify-between">
                  <h3>{review.title}</h3>
                  <span className="text-secondary">{stars()}</span>
                </CardHeader>
                <Divider />

                <CardBody className="text-small text-foreground-500">
                  {review.content}
                </CardBody>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-between text-secondary absolute bottom-1 w-full ">
          <GrPrevious
            className="bg-foreground-100"
            size={24}
            onClick={scrollPrev}
          />
          <GrNext
            className="bg-foreground-100"
            size={24}
            onClick={scrollNext}
          />
        </div>
      </div>
    </section>
  );
}
