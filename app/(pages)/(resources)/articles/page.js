import AnimatedHero from "@/components/AnimatedHero";
import ArticleCard from "./Components/ArticleCard";

const articles = [
  {
    title: "Lessons from Working with Enterprise Data Clients",
    description:
      "After decades of helping large organizations scale their data strategies, here are the biggest insights I’ve learned.",
    image: "/images/Articles/Articles1.jpg",
  },
  {
    title: "SaaS vs Managed Web Scraping — What Should You Choose?",
    description:
      "Understanding the difference between platforms and full-service scraping helps you invest smart and scale faster.",
    image: "/images/Articles/Articles2.jpg",
  },
  {
    title: "How Clean Data Can Boost Business Decisions",
    description:
      "From pricing analysis to trend forecasting—discover how structured, accurate data leads to smarter and faster choices.",
    image: "/images/Articles/Articles3.jpg",
  },
];

export default function Articles() {
  return (
    <div>
      <AnimatedHero
        title="Articles"
        subtitle="Browse expert insights on web scraping, strategic pricing, data-driven decisions, and emerging eCommerce trends—designed for enterprise teams in retail, manufacturing, and beyond."
      />

      {/* Animated Article Grid */}
      <section className="my-28 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
