import { Ratio, ServerCrash } from "lucide-react";
import React from "react";

const suggestions = [
  {
    title: "Problem",
    sub_title: "Limited Access and Blocked Sites.",
    description:
      "Scraping job listings at scale is not as easy as it seems. Websites like Indeed often block web scrapers or limit access to only a fraction of the available jobs, which prevents companies from getting comprehensive job data.",
    icon: <ServerCrash className="w-12 h-12 mx-auto mb-4" />,
  },
  {
    title: "Solutions",
    sub_title: "Advanced Block Bypass Solutions.",
    description:
      "Fastscraping has developed advanced techniques to get around these blocking measures. Our proven expertise in dealing with website restrictions ensures that you receive complete and accurate job data.",
    icon: <Ratio className="w-12 h-12 mx-auto mb-4" />,
  },
  {
    title: "Problem",
    sub_title: "Data Inconsistencies Across Platforms.",
    description:
      "Job websites often have different structures, making it difficult to collect consistent data across platforms. The result is often mismatched or incomplete job data that cant be effectively used for recruitment or analysis.",
    icon: <ServerCrash className="w-12 h-12 mx-auto mb-4" />,
  },
  {
    title: "Solutions",
    sub_title: "Clean and Consistent Data.",
    description:
      "We collect job data but also intelligently categorize and deduplicate listings, ensuring clean, uniform data that can be analyzed effectively. Moreover, we continuously monitor and improve our data collection process.",
    icon: <Ratio className="w-12 h-12 mx-auto mb-4" />,
  },
];

const Suggestions = () => {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">
          Solving Job Data Problems
        </h2>
        <p className="text-gray-600 text-sm mb-20">
          Inconsistent job data? Anti-scraping barriers slowing you down?
          Fastscraping delivers clean, structured, and accurate job listings—
          powered by advanced scraping technology and expert oversight. No more
          noise. Just the data you need.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suggestions.map((item, index) => (
            <div
              style={{
                background: "linear-gradient(135deg, #e6f4ea 0%, #fce4e4 100%)",
              }}
              key={index}
              className="flex-1 text-left bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.sub_title}</p>
              <p className="text-gray-600 text-xs mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Suggestions;
