"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import Userauth from "./Userauth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Electronics, Perfumes, components } from "./NavLinks";
import MobialNavbar from "./MobialNavbar";
import ModeToggle from "./ModeToggle";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
  { name: "Kids", href: "/Kids" },
];
export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between gap-5 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="md:text-4xl text-2xl font-bold">
            ChicStyle <span className="text-primary">Hub</span>
          </h1>
        </Link>

        <NavigationMenu className="hidden lg:flex z-[50] list-none hover:text-primary dark:hover:text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Fashion</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <Link
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {pathname === component.href ? (
                      <h1 className="text-lg font-semibold text-primary dark:text-white ">
                        {component.title}
                      </h1>
                    ) : (
                      <h1 className="text-lg font-semibold text-gray-600 dark:text-gray-300 transition duration-100 dark:hover:text-white hover:text-primary">
                        {component.title}
                      </h1>
                    )}
                    <p className="text-sm text-gray-500">
                      {component.description}
                    </p>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        <NavigationMenu className="hidden lg:flex z-[50] list-none hover:text-primary dark:hover:text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Electronics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {Electronics.map((Electronics) => (
                  <Link
                    key={Electronics.title}
                    title={Electronics.title}
                    href={Electronics.href}
                  >
                    {pathname === Electronics.href ? (
                      <h1 className="text-lg font-semibold text-primary dark:text-white ">
                        {Electronics.title}
                      </h1>
                    ) : (
                      <h1 className="text-lg font-semibold text-gray-600 dark:text-gray-300 transition duration-100 dark:hover:text-white hover:text-primary">
                        {Electronics.title}
                      </h1>
                    )}
                    <p className="text-sm text-gray-500">
                      {Electronics.description}
                    </p>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>


        <NavigationMenu className="hidden lg:flex z-[50] list-none hover:text-primary dark:hover:text-white">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Perfumes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {Perfumes.map((Perfumes) => (
                  <Link
                    key={Perfumes.title}
                    title={Perfumes.title}
                    href={Perfumes.href}
                  >
                    {pathname === Perfumes.href ? (
                      <h1 className="text-lg font-semibold text-primary dark:text-white ">
                        {Perfumes.title}
                      </h1>
                    ) : (
                      <h1 className="text-lg font-semibold text-gray-600 dark:text-gray-300 transition duration-100 dark:hover:text-white hover:text-primary">
                        {Perfumes.title}
                      </h1>
                    )}
                    <p className="text-sm text-gray-500">
                      {Perfumes.description}
                    </p>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>

        <Userauth />

        <div>
          <ModeToggle />
        </div>
        <div className="flex divide-x border-r sm:border-l">
          <Button
            onClick={() => handleCartClick()}
            variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>

        <MobialNavbar />
      </div>
    </header>
  );
}
