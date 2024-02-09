import { FC, HTMLAttributes } from "react";
import { RedirectToSignUp, UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface UserauthProps extends HTMLAttributes<HTMLDivElement> {}
const Userauth: FC<UserauthProps> = ({className, ...props}) => {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <div {...props} className={cn("justify-center hidden lg:flex items-center gap-5", className)}>
          <UserButton  afterSignOutUrl="/sign-in" />
        
        </div>
      ) : (
        <div className={cn("justify-center items-center gap-5 hidden lg:flex 2xl:ml-16", className)}>
          <Link href='/sign-up'>
            <Button>
              Sign Up
            </Button>
          </Link>
          <Link href='/sign-in'>
            <Button variant={"ghost"} className="hover:bg-primary hover:text-white">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default Userauth