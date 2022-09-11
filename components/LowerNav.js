import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { RiGitRepositoryLine, RiUser3Line } from "react-icons/ri";

const LowerNav = ({active}) => {
  return (
    <div className="fixed bottom-0 w-full flex justify-center items-center bg-bgDashboard py-2">
      <div className="child:flex child:flex-start child:space-x-3  child:px-4 child:py-4 child:rounded-xl flex">
        <Link href="/repositories">
          <section
            className={`${
              active == "/repositories"
                ? "bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] text-white text-base duration-300 transition-all"
                : "hover:bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] hover:text-white text-sm duration-300 transition-all text-grey"
            }`}
          >
            <RiGitRepositoryLine /> <h1>Repositories</h1>
          </section>
        </Link>
        <Link href="/profile">
          <section
            className={`${
              active == "/profile"
                ? "bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] text-white text-base duration-300 transition-all"
                : "hover:bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] hover:text-white text-sm duration-300 transition-all text-grey"
            }`}
          >
            <RiUser3Line /> <h1>Profile</h1>
          </section>
        </Link>
        <Link href="/search">
          <section
            className={`${
              active == "/search"
                ? "bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] text-white text-base duration-300 transition-all"
                : "hover:bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] hover:text-white text-sm duration-300 transition-all text-grey"
            }`}
          >
            <BsSearch /> <h1>Search</h1>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default LowerNav;
