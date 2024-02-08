import { client } from "@/lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { simplifedProduct } from "../interface";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

async function getData(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}" ] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
}`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifedProduct[] = await getData(params.category);

  return (
    <div>
    <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Our Products for {params.category}
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Suspense
            fallback={
              <>
              {data.map((product) => (
                <div className="flex flex-col space-y-3" key={product._id}>
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              ))}
              </>
            }
          >
        {data.map((product) => (
          <div key={product._id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <Image
                src={product.imageUrl}
                alt="Product image"
                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                width={300}
                height={300}
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700 dark:text-white dark:hover:text-gray-300">
                  <Link href={`/product/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  {product.categoryName}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
        </Suspense>
      </div>
    </div>
  </div>
  );
}
