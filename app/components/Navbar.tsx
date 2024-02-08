'use client';
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import Userauth from "./Userauth";
import { ModeToggle } from "./ModeToggle";

const links =[
  {name : 'Home', href : '/'},
  {name : 'Men', href : '/Men'},
  {name : 'Women', href : '/Women'},
  {name : 'Teens', href : '/Teens'},
  {name : 'Kids', href : '/Kids'},
]
export default function Navbar() {
  const pathname = usePathname();
  const {handleCartClick} = useShoppingCart()
  return (
   <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="md:text-4xl text-2xl font-bold">
          ChicStyle <span className="text-primary">Hub</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link , idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link href={link.href} className="text-lg font-semibold text-primary dark:text-white ">
                    {link.name}
                </Link>
              ):(
                <Link href={link.href} className="text-lg font-semibold text-gray-600 dark:text-gray-300 transition duration-100 dark:hover:text-white hover:text-primary">
                  {link.name}
                </Link>
              )
               }
            </div>
          ))}
        </nav>
        
        <Userauth/>
        <div className="flex divide-x border-r sm:border-l">
          <Button onClick={() => handleCartClick()} variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 rounded-none">
            <ShoppingBag/>
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>

        <div>
          <ModeToggle/>
        </div>
      </div>
   </header>
  )
}