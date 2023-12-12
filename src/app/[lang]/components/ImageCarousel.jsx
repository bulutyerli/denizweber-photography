"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden sticky top-0" ref={emblaRef}>
      <div className="flex">
        {images.map((image, i) => {
          return (
            <div
              className="flex-shrink-0 flex-grow-0 basis-full h-96 md:h-screen w-full"
              key={i}
            >
              <Image
                className="object-cover h-full"
                src={image.imageUrl}
                alt={image.title}
                width={2000}
                height={2000}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
