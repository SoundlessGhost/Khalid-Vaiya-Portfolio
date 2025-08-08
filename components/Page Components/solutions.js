import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { BriefcaseBusiness, Workflow, CircleOff, Rss } from "lucide-react";

const resources = [
  {
    title: "Pricing Data",
    icon: <BriefcaseBusiness />,
    description: "Stay updated with real-time competitor pricing insights.",
    href: "/pricing-data",
  },
  {
    title: "Job Listings Data",
    icon: <Workflow />,
    description:
      "Collect large-scale job data to power your recruitment insights.",
    href: "/job-listings-data",
  },
  {
    title: "Product Data",
    icon: <CircleOff />,
    description: "Power your systems with precise, structured product data.",
    href: "/product-data-scraping",
  },
  {
    title: "Real Estate Data",
    icon: <Rss />,
    description:
      "Comprehensive data on properties, pricing, and market movement.",
    href: "/real-estate-data",
  },
  {
    title: "Customized Data",
    icon: <Rss />,
    description:
      "Get the specific data you need — how, when, and where you need it.",
    href: "/customized-data",
  },
];

export function Solutions() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className={`cursor-pointer text-black text-sm rounded-md p-2 `}>
              Solutions
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
