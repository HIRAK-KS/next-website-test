import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-20 w-full border-b-[1px] border-gray-500 bg-white">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center">
        LOGO
        <Link href="/" className="group relative overflow-hidden">
          <p className="text-2xl font-bold">ORIGIN .Doc</p>
          <span className="bg-PrimeColor absolute bottom-0 inline-block h-[2px] w-full -translate-x-[100%] transition-all duration-700 group-hover:translate-x-0">
            .Doc
          </span>
        </Link>
        List Items
      </div>
      Header
    </div>
  );
};

export default Header;
