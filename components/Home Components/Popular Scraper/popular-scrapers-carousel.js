"use client";

import React from "react";
import Amazon from "./Amazon";
import Linkdin from "./Linkdin";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PopularScrapersCarousel = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <div>
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
      >
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1">
            <Amazon />
          </CarouselItem>

          <CarouselItem className="pl-1">
            <Linkdin />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default PopularScrapersCarousel;
