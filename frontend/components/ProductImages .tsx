
"use client";

import Image from "next/image";
import { useState } from "react";


const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/29050586/pexels-photo-29050586/free-photo-of-fresh-homemade-scones-with-pink-roses-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src="https://images.pexels.com/photos/1634059/pexels-photo-1634059.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
