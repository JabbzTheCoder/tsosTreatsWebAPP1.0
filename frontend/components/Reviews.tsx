
import Image from "next/image";

const Reviews = async ({ productId }: { productId: string }) => {
  // const reviewRes = await fetch(
  //   `https://api.fera.ai/v3/public/reviews?product.id=${productId}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`
  // );
  // const reviews = await reviewRes.json();

  return  (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <Image
          src="/logo.png" 
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>Kamza Kamza</span>
      </div>
      {/* STARS */}
      <div className="flex gap-2">
          <Image src="/star.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <p>Heading Here!!</p>
      <p>A very nice review body here</p>
      <div className="">
          <Image
            src=""
            alt=""
            width={100}
            height={50}
            className="object-cover"
          />
   
      </div>
    </div>
  );
};

export default Reviews;
