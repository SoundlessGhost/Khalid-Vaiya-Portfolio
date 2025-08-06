import React from "react";
import { Button } from "./ui/button";

export function CallToActionBanner() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to start scraping?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Take your web data collection to the next level
        </p>

        <div className="flex justify-center">
          <Button variant="link" className="cursor-pointer">
            GET STARTED FOR FREE
          </Button>
        </div>
      </div>
    </section>
  );
}
