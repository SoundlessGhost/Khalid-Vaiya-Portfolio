export default function ProblemSolutionSection() {
  const data = [
    {
      problem: {
        title: "Restricted Access & Site Blocks",
        description:
          "Accessing data from some sources is often blocked or throttled.",
      },
      solution: {
        title: "Smart Bypass Strategies",
        description:
          "Our system bypasses complex blocks using intelligent routing and stealth scraping.",
      },
    },
    {
      problem: {
        title: "Inconsistent Data Across Sites",
        description:
          "Same data varies on different platforms — causing reliability issues.",
      },
      solution: {
        title: "Standardized, Unified Data",
        description:
          "We normalize incoming data to ensure accuracy and consistency across platforms.",
      },
    },
    {
      problem: {
        title: "Listing Limits on Job Boards",
        description:
          "Many job platforms cap visible listings per page, limiting access to full datasets.",
      },
      solution: {
        title: "Advanced Crawling to Access All Data",
        description:
          "Our bots bypass page limits to gather complete datasets without triggering restrictions.",
      },
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Real Problems, Real Solutions
          </h2>
          <p className="text-gray-600 mt-2">
            We tackle common scraping challenges with powerful, automated tools
            tailored for scale.
          </p>
        </div>

        <div className="space-y-10">
          {data.map((item, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-6 items-center">
              {/* Problem Card */}
              <div className="bg-red-50 p-6 rounded-xl shadow-sm">
                <h4 className="text-red-600 font-semibold mb-2">Problem</h4>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {item.problem.title}
                </h3>
                <p className="text-gray-600">{item.problem.description}</p>
              </div>

              {/* Arrow Icon (center column) */}
              <div className="flex justify-center items-center">
                <span className="text-3xl text-green-500">➤</span>
              </div>

              {/* Solution Card */}
              <div className="bg-green-50 p-6 rounded-xl shadow-sm">
                <h4 className="text-green-600 font-semibold mb-2">Solution</h4>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {item.solution.title}
                </h3>
                <p className="text-gray-600">{item.solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
