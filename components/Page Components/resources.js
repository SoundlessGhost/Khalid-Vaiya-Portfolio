import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Scale, BriefcaseBusiness, Workflow, CircleOff } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    title: "Case Studies",
    icon: <BriefcaseBusiness />,
    description: "Real results we helped our clients achieve.",
    href: "/case-study",
  },
  {
    title: "Supports",
    icon: <Scale />,
    description: "In-depth analysis and reports.",
    href: "/supports",
  },
  {
    title: "Ebooks",
    icon: <Workflow />,
    description: "Long-format insights for data-driven success.",
    href: "/e-book",
  },
  {
    title: "Articles",
    icon: <CircleOff />,
    description: "Quick informative read for all industries.",
    href: "/articles",
  },
];

export function Resources() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className={` cursor-pointer text-black text-sm rounded-md p-2 `}>
              Resources
            </p>
          </NavigationMenuTrigger>
          <NavigationMenuContent style={{ width: "300px" }}>
            <div>
              <div className="p-4]">
                {resources.map((item) => (
                  <div
                    key={item.title}
                    className="p-3 flex items-center rounded-md transition-colors duration-200 cursor-pointer hover:bg-gray-200"
                  >
                    <Link href={item.href} className="ml-3">
                      <span className="font-bold leading-none">
                        {item.title}
                      </span>
                      <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
