import Suggestions from "@/components/suggestions";
import FastscrapingService from "@/components/fastscraping-service";
import DataExtractionService from "@/components/data-extraction-service";
import { AccordionDemo } from "@/components/frequently-asked-questions";

export default function Home() {
  return (
    <div className="">
      <div
        className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="text-white  lg:-ml-[630px] space-y-4">
            <p className="text-[60px] font-medium leading-[1.1]">
              Effective Web Scraping <br /> Solutions That Deliver <br />{" "}
              Measurable Results
            </p>
            <p className="text-[16px]">
              Make unlimited requests without getting blocked. <br />
              Our infrastructure keeps your scraping invisible to detection
              systems.
            </p>

            <button className="button">Get Started</button>
          </div>
        </main>
      </div>
      <DataExtractionService />

      <FastscrapingService />

      <Suggestions />

      <AccordionDemo />
    </div>
  );
}
