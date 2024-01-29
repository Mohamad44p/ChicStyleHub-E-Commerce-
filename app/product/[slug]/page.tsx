import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  const quert = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      price_id
  }`;
  const data = await client.fetch(quert);
  return data;
}
export const dynamic = "force-dynamic";

export default async function page({ params }: { params: { slug: string } }) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-6">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="h-5 w-5" />
              <span className="text-sm">2-4 day shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                image={data.images[0]}
                name={data.name}
                price={data.price}
                description={data.description}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                image={data.images[0]}
                name={data.name}
                price={data.price}
                description={data.description}
                price_id={data.price_id}
              />
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
