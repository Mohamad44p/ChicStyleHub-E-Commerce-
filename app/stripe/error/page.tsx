import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorStripe() {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <h2 className="text-2xl font-bold">Something went wrong...</h2>
      <p>Please try again later</p>
      <Button><Link href="/">Back to Home page</Link></Button>
    </div>
  )
}
