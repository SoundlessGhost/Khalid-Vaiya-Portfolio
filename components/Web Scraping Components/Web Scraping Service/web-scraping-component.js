import Image from "next/image";

const ReusableComponent = () => {
  return (
    <section className="bg-gray-50 my-24 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-red-500 font-semibold mb-2">CASE STUDY</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Baker & Taylor gains market advantage through Fastscraping&apos;s
            trusted data solutions
          </h2>
          <p className="text-gray-700 mb-6">
            “Fastscraping has consistently delivered outstanding data accuracy
            and customer service. They&apos;re our go-to partner for data
            extraction and insights. I wouldn’t hesitate to recommend them to
            anyone needing reliable data support.”
          </p>
          <p className="font-semibold text-gray-800">Margaret Lane</p>
          <p className="text-gray-600 text-sm mb-6">
            Vice President of Retail Sales, Baker & Taylor
          </p>

          <button className="bg-gray-600 text-white px-5 py-2 rounded hover:bg-gray-700 transition">
            Read case study
          </button>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/alexander.jpg"
            alt="Margaret Lane"
            width={160}
            height={160}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ReusableComponent;
