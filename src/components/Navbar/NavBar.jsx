import React from "react";
import { HiOutlineCollection } from "react-icons/hi";
import { LuCalendar } from "react-icons/lu";
import { TbBell } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

function NavBar() {
  return (
    <>
      <div className="fixed w-full bottom-0 border-t border-gray-500/50 backdrop-blur-l">
        <div className="h-full flex justify-evenly items-end m-4">
          <div className="text-3xl text-gray-400 hover:text-gray-600 active:text-cyan-400">
            <HiOutlineCollection />
          </div>
          <div className="text-3xl text-gray-400">
            <LuCalendar />
          </div>
          <div className="text-3xl text-gray-400">
            <TbBell />
          </div>
          <div className="text-3xl text-gray-400">
            <BiUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
