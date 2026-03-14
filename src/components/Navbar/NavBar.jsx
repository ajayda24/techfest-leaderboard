import React from "react";
import { HiOutlineCollection } from "react-icons/hi";
import { LuCalendar } from "react-icons/lu";
import { TbBell } from "react-icons/tb";
import { BiUser } from "react-icons/bi";

function NavBar() {
  return (
    <>
      <div className="sticky bottom-0">
        <div className="flex justify-evenly items-end">
          <div className="size-2xl">
            <HiOutlineCollection />
          </div>
          <div>
            <LuCalendar />
          </div>
          <div>
            <TbBell />
          </div>
          <div>
            <BiUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
