"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Emily Grant",
    title: "VP of Strategy, MarketBridge",
    companyLogo: "/images/Pricing Data/logo1.jpg",
    image: "/images/Pricing Data/user1.jpg",
    quote: `“Working with InsightLoop has been seamless. Their team is sharp, responsive, and delivers exactly what they promise — powerful insights when we need them most.”`,
    highlight: "Fast, flexible, and delivers real value.",
  },
  {
    name: "David Kohler",
    title: "Chief Data Officer, TrendNova",
    companyLogo: "/images/Pricing Data/logo2.jpg",
    image: "/images/Pricing Data/user2.jpg",
    quote: `“The support from InsightLoop was world-class. Our product team benefited immensely from the real-time competitive data they provided.”`,
    highlight: "A strategic partner we can count on.",
  },
  {
    name: "Linda Zhao",
    title: "Director of Ops, DataZen",
    companyLogo: "/images/Pricing Data/logo3.jpg",
    image: "/images/Pricing Data/user3.jpg",
    quote: `“Their dashboards helped us spot pricing gaps instantly. Super easy to integrate and the service has been rock solid.”`,
    highlight: "Insight that drives smarter pricing decisions.",
  },
];

export default function ClientTestimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-green-600 font-semibold uppercase text-sm mb-2">
          Client Testimonials
        </h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Hear From Our Happy Clients
        </h2>

        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card className="shadow-md">
                    <CardContent className="p-6 text-left space-y-6">
                      <div>
                        <p className="text-xl font-semibold text-gray-800">
                          {testimonial.highlight}
                        </p>
                        <p className="text-gray-600 mt-2">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.title}
                          </p>
                        </div>
                        <img
                          src={testimonial.companyLogo}
                          alt="Client logo"
                          className="h-8 ml-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>
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
