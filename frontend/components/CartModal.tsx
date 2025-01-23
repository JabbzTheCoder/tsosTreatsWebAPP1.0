"use client";

import Image from "next/image";
// import { useCartStore } from "@/hooks/useCartStore";
// import { media as wixMedia } from "@wix/sdk";
// import { useWixClient } from "@/hooks/useWixClient";
// import { currentCart } from "@wix/ecom";

const CartModal = () => {
  // TEMPORARY
  const cartItems = true;


  const handleCheckout = async () => {
    
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      
        <div className="">Cart is Empty</div>
    </div>
  );
};

export default CartModal;