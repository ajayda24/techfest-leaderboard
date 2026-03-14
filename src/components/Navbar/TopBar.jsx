import React from "react";

function TopBar() {
  return (
    <div className="sticky w-full border-b border-gray-500/50 backdrop-blur-sm">
      <div className="mx-auto flex justify-between ">
        <div className="flex justify-start items-start mb-2">
          <div className="border border-gray-400 rounded-md p-4"></div>
          <div className="text-white px-3">
            TECHFEST
            <span className="text-cyan-400 p-1">24</span>
            <div className="text-xs text-gray-500">LIVE SCOREBOARD</div>
          </div>
        </div>
        <div className="flex justify-end items-start m-2">
          <div className="text-sm text-red-600">LIVE</div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
