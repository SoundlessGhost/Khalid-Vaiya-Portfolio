import { Megaphone, Users, Recycle } from "lucide-react"; // Or use any icon library you prefer

const updates = [
  {
    title: "Dedicated Support",
    description:
      "Our expert team provides personalized support, hands-on guidance, and real-time collaboration from day one to ensure your project’s success.",
    linkText: "Go to Newsroom",
    icon: <Megaphone className="w-6 h-6 text-black" />,
  },
  {
    title: "Open Communication & Collaboration",
    description:
      "Experience seamless collaboration with Ficstar's intuitive project management platform. We ensure clear, transparent communication and real-time updates for a smooth workflow.",
    linkText: "Read our posts",
    icon: <Users className="w-6 h-6 text-black" />,
  },
  {
    title: "True Partnership",
    description:
      "Fastscraping is more than a service provider—we’re your partner. We adapt to your evolving needs, providing continuous support and unmatched flexibility to ensure your success.",
    linkText: "Learn more",
    icon: <Recycle className="w-6 h-6 text-black" />,
  },
];

const FastscrapingService = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 my-20">
      <div className="grid md:grid-cols-3 gap-8">
        {updates.map((item, index) => (
          <div key={index} className="space-y-4">
            <div>{item.icon}</div>
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            {/* <a
              href="#"
              className="inline-block text-sm underline underline-offset-4 text-black hover:text-gray-800"
            >
              {item.linkText}
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FastscrapingService;
