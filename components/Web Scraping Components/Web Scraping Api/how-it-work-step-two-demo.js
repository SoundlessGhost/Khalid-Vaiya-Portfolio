import { FaCogs, FaShieldAlt, FaBolt, FaThumbsUp } from "react-icons/fa";

export default function StepTwo() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left Content */}
        <div className="md:w-1/2 w-full">
          <h4 className="text-red-600 font-semibold text-lg mb-2">Step 2</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unlock Free Trial Value
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Get hands-on with real data tailored to your unique business needs.
            Our trial delivers a solution that aligns with your goals — fast,
            reliable, and fully customized.
          </p>
        </div>

        {/* Right Grid */}
        <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaCogs className="text-red-600 text-2xl mb-2" />,
              title: "Explore Customized Solutions",
            },
            {
              icon: <FaShieldAlt className="text-red-600 text-2xl mb-2" />,
              title: "Verify Accuracy & Reliability",
            },
            {
              icon: <FaBolt className="text-red-600 text-2xl mb-2" />,
              title: "See Results Instantly",
            },
            {
              icon: <FaThumbsUp className="text-red-600 text-2xl mb-2" />,
              title: "Effortless Setup Support",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-red-400 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition"
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
