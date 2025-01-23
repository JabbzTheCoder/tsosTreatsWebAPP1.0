import React from 'react'
import Image from "next/image";
import Link from "next/link";


const ProductCard = () => {
  return (
    <Link
    href="/"
    className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
  >
    <div className="relative w-full h-80">
      <Image
        src="/product.png"
        alt=""
        fill
        sizes="25vw"
        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />
      
        <Image
          src="/woman.png"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
    
    </div>
    <div className="flex justify-between">
      <span className="font-medium">Name</span>
      <span className="font-semibold">R150.00</span>
    </div>
    
      <div
        className="text-sm text-gray-500"
      //   dangerouslySetInnerHTML={{
      //     __html: DOMPurify.sanitize(
      //       product.additionalInfoSections.find(
      //         (section: any) => section.title === "shortDesc"
      //       )?.description || ""
      //     ),
      //   }}
      >
              Description
      </div>

    <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
      Add to Cart
    </button>
  </Link>
  )
}

export default ProductCard
