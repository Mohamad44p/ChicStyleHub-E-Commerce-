import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);

  return data;
}
export default async function Hero() {
  const data = await getData();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg">
            We sell the most exlusive and high quality products for you. We are
            the best so come and shop with us.
          </p>
        </div>

        <div className="w-full flex mb-12 md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-xl md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              loading="lazy"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image1).url()}
              loading="lazy"
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
            <Link  href="/Men" className="flex w-1/3 items-center justify-center dark:text-green-50 text-gray-500 duration-100 dark:hover:bg-gray-500 hover:bg-gray-200 active:bg-gray-200">
              Men
            </Link>
            <Link href="/Women" className="flex w-1/3 items-center justify-center dark:text-green-50 text-gray-500 duration-100 dark:hover:bg-gray-500 hover:bg-gray-200 active:bg-gray-200">
              Women
            </Link>
            <Link href="/Teens" className="flex w-1/3 items-center justify-center dark:text-green-50 text-gray-500 duration-100 dark:hover:bg-gray-500 hover:bg-gray-200 active:bg-gray-200">
              Teens
            </Link>
            <Link href="/Kids" className="flex w-1/3 items-center justify-center dark:text-green-50 text-gray-500 duration-100 dark:hover:bg-gray-500 hover:bg-gray-200 active:bg-gray-200">
              Kids
            </Link>
        </div>
      </div>
    </section>
  );
}