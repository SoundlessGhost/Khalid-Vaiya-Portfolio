export default function TrustedByClientsSection() {
  const features = [
    {
      icon: "👍",
      title: "Personalized Guidance",
      description:
        "Our support team works side-by-side with you from day one, offering custom strategies and real-time guidance tailored to your goals.",
    },
    {
      icon: "⚙️",
      title: "Seamless Collaboration",
      description:
        "With streamlined communication and a collaborative approach, we keep your project running smoothly and transparently at every stage.",
    },
    {
      icon: "🎯",
      title: "Flexible Partnership",
      description:
        "We’re not just vendors—we’re partners. We evolve with your needs, offering ongoing support and full adaptability for long-term success.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Businesses Choose Us for Reliable Data Delivery
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          From initial setup to long-term scaling, we provide a collaborative
          experience that empowers your team with confidence and clarity.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-center md:text-left"
            >
              <div className="text-5xl mb-4 text-green-600">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
