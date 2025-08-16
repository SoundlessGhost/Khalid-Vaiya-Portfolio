import { FaServer, FaEye, FaClipboardCheck, FaCogs } from "react-icons/fa";

export default function CustomDataDelivery() {
  return (
    <section className="bg-white pt-28 pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How Fastscraping Delivers Custom Data Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our tailored approach ensures seamless integration of structured data
          into your existing workflows — with precision, consistency, and
          real-time usability at its core.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaServer className="text-red-600 text-2xl mb-2" />,
              title: "Multi-Source Data Aggregation",
            },
            {
              icon: <FaEye className="text-red-600 text-2xl mb-2" />,
              title: "Real-Time Monitoring & Crawling",
            },
            {
              icon: <FaClipboardCheck className="text-red-600 text-2xl mb-2" />,
              title: "Verified Data Accuracy",
            },
            {
              icon: <FaCogs className="text-red-600 text-2xl mb-2" />,
              title: "Flexible Output & Format Control",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-red-400 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-start">
                {item.icon}
                <h3 className="text-md font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
