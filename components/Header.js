import Link from "next/link";
import React from "react";
import { headerListItems } from "@/constants";

const Header = () => {
  return (
    <div className="h-20 w-full border-b-[1px] border-gray-500 bg-white">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="group relative overflow-hidden">
          <p className="text-2xl font-bold">ORIGIN .Doc</p>
          <span className="bg-PrimeColor absolute bottom-0 inline-block h-[2px] w-full -translate-x-[100%] transition-all duration-700 group-hover:translate-x-0">
            .Doc
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide lg:inline-flex">
          <ul className="flex gap-8">
            {headerListItems.map((item) => (
              <Link key={item._id} href={item.Link}>
                <li className="hover:text-PrimeColor group relative cursor-pointer text-gray-600 duration-300">
                  {item.title}
                  <span className="bg-PrimeColor absolute -bottom-[1px] left-0 inline-block h-[2px] w-full scale-0 duration-500 group-hover:scale-100"></span>
                </li>
              </Link>
            ))}
          </ul>
          <button className="bg-darkBlue hover:bg-PrimeColor h-10 w-36 rounded-md text-white duration-300">
            連絡する
          </button>
        </nav>
      </div>
      Header
    </div>
  );
};

export default Header;
