'use client';

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
  images: any;
}
export default function ImageGallery({ images }: iAppProps) {
  const [bigImage , setBigImage] = useState(images[0])

  const handleSmallImageClick = (image: any) => {
    setBigImage(image)
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center cursor-pointer"
              width={200}
              height={200}
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
          <Image 
            src={urlFor(bigImage).url()}
            alt="Great Photo"
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
          />

          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm tracking-wider text-white">SALE</span>
      </div>
    </div>
  );
}
