import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages ";
import Reviews from "@/components/Reviews";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
    const images = [
      {
        id: 1,
        url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      },
    ];
//   const products = await wixClient.products
//     .queryProducts()
//     .eq("slug", params.slug)
//     .find();

//   if (!products.items[0]) {
//     return notFound();
//   }

//const product = products.items[0];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={images}/>
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Blue Berry Scones</h1>
        <p className="text-gray-500">Baked to golden perfection, 
          our blueberry scones are a delightful treat that combines 
          the richness of buttery pastry with the natural sweetness 
          of juicy, sun-ripened blueberries. Each bite offers a tender, 
          flaky texture that melts in your mouth, complemented by bursts 
          of fruity flavor.Perfect for breakfast, afternoon tea, or a 
          cozy snack, these scones are lovingly crafted with premium 
          ingredients to bring you a taste of homemade goodness. Whether 
          enjoyed warm with a dollop of clotted cream, a drizzle of honey, 
          or simply on their own, our blueberry scones are sure to brighten your day.</p>
        <div className="h-[2px] bg-gray-100" />
        
          <h2 className="font-medium text-2xl">R250.00</h2>
{/*         
          // <div className="flex items-center gap-4">
          //   <h3 className="text-xl text-gray-500 line-through">
          //     ${product.price?.price}
          //   </h3>
          //   <h2 className="font-medium text-2xl">
          //     ${product.price?.discountedPrice}
          //   </h2>
          // </div> */}
       
        <div className="h-[2px] bg-gray-100" />
          <Add
            productId={"4"}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={5}
          />
        <div className="h-[2px] bg-gray-100" />
        {/* {product.additionalInfoSections?.map((section: any) => ( 
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
          */}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId={"3"} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductDetailPage;