import React, { useEffect, useState } from "react";
import { RiGitRepositoryLine, RiUser3Line } from "react-icons/ri";
import { BsBookmark, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Sidebar = ({ active }) => {
  const {data:session, status} = useSession()
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if (session && status === "authenticated") {
      const id = session?.user?.image.substring(40, 48);
      setUserId(id);
    }
  }, [session, status]);
  console.log(active);
  console.log(userId)
  return (
    <div>
      <div className="child:flex child:flex-start child:space-x-2  child:px-8 child:py-6 child:rounded-xl">
        <Link href="/repositories">
          <section
            className={`${
              active == "/repositories"
                ? "bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] text-white text-xl duration-300 transition-all"
                : "hover:bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] hover:text-white text-xl duration-300 transition-all text-grey"
            }`}
          >
            <RiGitRepositoryLine /> <h1>Repositories</h1>
          </section>
        </Link>

        {/* <section
          className={`${
            active == "/bookmarks"
              ? "bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] text-white text-xl duration-300 transition-all"
              : "hover:bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] hover:text-white text-xl duration-300 transition-all text-grey"
          }`}
        >
          <BsBookmark /> <h1>Bookmark</h1>
        </section> */}
        <Link href={`/profile/${userId}`}>
          <section
            className={`${
              active == `/profile`
                ? "bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] text-white text-xl duration-300 transition-all"
                : "hover:bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] hover:text-white text-xl duration-300 transition-all text-grey"
            }`}
          >
            <RiUser3Line /> <h1>Profile</h1>
          </section>
        </Link>
        <Link href="/search">
          <section
            className={`${
              active == "/search"
                ? "bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] text-white text-xl duration-300 transition-all"
                : "hover:bg-gradient-to-r from-[#ffffff00] to-[#ffffff57] hover:text-white text-xl duration-300 transition-all text-grey"
            }`}
          >
            <BsSearch /> <h1>Search</h1>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
