"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GradientSlidesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const slides = [
    {
      type: "text",
      title: "Web Data Scraping Services With Built-in Quality Control",
      description:
        "Data quality is not an afterthought; it’s a core part of how we deliver web data scraping services. Each dataset we deliver passes through over 50 internal checks, from duplicate detection and missing field flags to regex-based validations for format integrity. We also offer custom QA rules based on your domain—for example, flagging price drops over a certain threshold or changes to product names. Clients count on Fastscraping web scraping services to deliver business-ready data, not just raw text scraped off a page.",
    },
    {
      type: "text",
      title:
        "Enterprise-Level Data Extraction Services With Built-in Intelligence",
      description:
        "Our data extraction services are engineered to handle the complexity that comes with scale. We integrate intelligent rule sets into every project—for example, automatically identifying duplicate SKUs, handling dynamic pagination, or segmenting content by product type or geolocation. Many of our clients operate in regulated spaces or markets with volatile data, so our site scraping service includes built-in validations, alert systems, and audit logs to support compliance and traceability. ",
    },
    {
      type: "imageText",
      title: "A Scraping Service That’s Proactive, Not Reactive",
      description:
        "We tailor quality assurance checks to your specific needs, such as detecting price fluctuations or product name changes instantly.",
      image: "/hero.jpg",
    },
  ];

  return (
    <section
      className="py-20 px-6 text-center"
      style={{
        background: "linear-gradient(135deg, #f4f9f4, #e6f2ec)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <Carousel className="w-full" plugins={[plugin.current]}>
          <CarouselContent>
            {slides.map((slide, i) => (
              <CarouselItem key={i} className="basis-full">
                <div className="p-8 flex flex-col items-center justify-center text-center min-h-[500px]">
                  {slide.type === "text" && (
                    <div className="max-w-4xl text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  )}

                  {slide.type === "imageText" && (
                    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl">
                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                          {slide.title}
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                      <div className="flex-1 relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
