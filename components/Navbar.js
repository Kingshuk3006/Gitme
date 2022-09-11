import Link from "next/link";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu } from "@mui/material";

const Navbar = ({ status, session }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <nav className="flex justify-between px-8 py-8 ">
      <Link href="/">
      <img src="/logo.svg" className="w-28 cursor-pointer"/>
      </Link>
        
        {status === "authenticated" ? (
          <img
            src={session?.user?.image}
            className="w-12 h-12 rounded-full"
            onClick={handleClick}
          />
        ) : (
          <div className="text-center">
            <Link href="/auth/signin">
              <button className="btn-5 px-4 py-2 md:text-xl text-sm text-white">
                sign in
              </button>
            </Link>
          </div>
        )}
      </nav>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="flex flex-col space-y-2 p-2 child:cursor-pointer bg-[#000000ec] -my-2 text-white">
          <div onClick={signOut}>Logout</div>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
