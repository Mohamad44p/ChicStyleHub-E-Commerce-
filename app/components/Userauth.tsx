import { RedirectToSignUp, UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Userauth() {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <div>
          <UserButton afterSignOutUrl="/sign-in" />
        
        </div>
      ) : (
        <div className="justify-center items-center gap-5 hidden  lg:flex 2xl:ml-16">
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