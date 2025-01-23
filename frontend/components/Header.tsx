'use client';

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-32"> 
      <div className="h-20 relative px-14 pt-14">
        {/* MOBILE */}
        <div className="h-full flex justify-between md:hidden">
          <Link href="/">
            <Image src="/logo.png" alt="" width={80} height={80} />
          </Link>
          <Menu />
        </div>
        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          {/* LEFT */}
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={100} height={100} />
            </Link>
          </div>
          {/* RIGHT */}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;