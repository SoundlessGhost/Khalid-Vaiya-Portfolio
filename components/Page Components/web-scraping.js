import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Scale,
  BriefcaseBusiness,
  Workflow,
  CircleOff,
  Rss,
} from "lucide-react";

const resources = [
  {
    title: "Web Scraping Service",
    icon: <BriefcaseBusiness />,
    description:
      "Empower your decisions with clean, reliable, and automated data extraction.",
    href: "/web-scraping-service",
  },
  {
    title: "Competitor Price Data",
    icon: <Scale />,
    description:
      "Real-time competitor pricing to help you make smarter decisions.",
    href: "/competitor-price-data",
  },
  {
    title: "Expertise",
    icon: <Workflow />,
    description: "Industry-leading price intelligence trusted by top brands.",
    href: "/expertise",
  },
  {
    title: "Web Data Extraction",
    icon: <CircleOff />,
    description: "Accurate, scalable, and fully customized web data solutions.",
    href: "/web-data-extraction",
  },
  {
    title: "How it works",
    icon: <Rss />,
    description:
      "Understand our seamless process for delivering high-quality, actionable data.",
    href: "/how-it-work",
  },
];

export function WebScraping() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className={` cursor-pointer text-sm rounded-md p-2 `}>
              Web Scraping
            </p>
          </NavigationMenuTrigger>
          <NavigationMenuContent style={{ width: "300px" }}>
            <div>
              <div className="p-4]">
                {resources.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="p-3 flex items-center rounded-md transition-colors duration-200 cursor-pointer hover:bg-gray-200"
                  >
                    <div className="ml-3">
                      <span className="font-bold leading-none">
                        {item.title}
                      </span>
                      <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
