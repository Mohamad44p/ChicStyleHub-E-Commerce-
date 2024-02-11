import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FC } from "react";
import { Electronics, Perfumes, components } from "./NavLinks";
import Userauth from "./Userauth";
import { usePathname } from "next/navigation";
import { AlignRightIcon } from "lucide-react";
import ModeToggle from "./ModeToggle";

interface MobialNavbarProps {}

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
  { name: "Kids", href: "/Kids" },
];

const MobialNavbar: FC<MobialNavbarProps> = ({}) => {
  const pathname = usePathname();
  return (
    <nav className="flex lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <AlignRightIcon className="h-6 w-6 " />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <h1 className="md:text-4xl text-2xl font-bold">
                    ChicStyle <span className="text-primary">Hub</span>
                  </h1>
                </Link>
              </SheetTitle>
              <SheetDescription>
                Discover and buy your favorite products
              </SheetDescription>
            </SheetHeader>
            <div className="flex items-center justify-center gap-4 py-12">
              <div className="grid grid-cols-1 justify-center items-center gap-4">
                <NavigationMenu className="flex z-[60] list-none hover:text-primary  dark:hover:text-white">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Fashion</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4  md:grid-cols-1 lg:w-[200px] md:w-[200px] sm:w-[300px] max-h-52 overflow-y-auto ">
                        {components.map((component) => (
                          <Link
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            className="border-b-2 border-red-300 border-dashed"
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

                <NavigationMenu className="flex z-[52] list-none hover:text-primary dark:hover:text-white">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Electronics</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4  md:grid-cols-1 lg:w-[200px] md:w-[200px] sm:w-[300px] max-h-52 overflow-y-auto ">
                        {Electronics.map((Electronics) => (
                          <Link
                            key={Electronics.title}
                            title={Electronics.title}
                            href={Electronics.href}
                            className="border-b-2 border-red-300 border-dashed"
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

                <NavigationMenu className="flex z-[50] list-none hover:text-primary dark:hover:text-white">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Perfumes</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4  md:grid-cols-1 lg:w-[200px] md:w-[200px] sm:w-[300px] max-h-52 overflow-y-auto  ">
                        {Perfumes.map((Perfumes) => (
                          <Link
                            key={Perfumes.title}
                            title={Perfumes.title}
                            href={Perfumes.href}
                            className="border-b-2 border-red-300 border-dashed"
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

                <div className="flex items-center justify-center gap-4 py-5">
                  <Userauth className="flex flex-col gap-8"  />
                </div>
                <div className="flex items-center justify-center gap-4 py-5">
                  <ModeToggle className="flex" />
                </div>
              </div>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <Button className="w-full" variant="secondary">
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobialNavbar;
