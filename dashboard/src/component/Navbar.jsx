import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle, FaBell, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full h-[64px] bg-[#f7f9fc] flex items-center justify-between px-4 md:px-8 shadow-sm font-sans">
      {/* Left Section - Menu + Logo */}
      <div className="flex items-center gap-3 md:gap-4">
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
          <FiMenu className="text-gray-500 text-[18px]" />
        </button>
        <span className="text-black font-semibold text-[15px] md:text-[16px] tracking-wide">
          Constructor
        </span>
      </div>

      {/* Center Section - Navigation + Search */}
      <div className="hidden lg:flex items-center gap-5 text-[14px] text-gray-400 font-medium">
        <a href="#">Dashboard</a>
        <a href="#">About Us</a>
        <a href="#">News</a>
        <a href="#">User Policy</a>
        <a href="#">Contacts</a>
        <span className="text-xl font-bold -mt-1">…</span>
      </div>

      <div className="hidden md:flex items-center justify-between w-[360px] bg-white px-4 py-[10px] rounded-full shadow-inner text-sm text-[#adb8c7] ml-4">
        <FiSearch size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search Transactions and Documents"
          className="bg-transparent outline-none w-full px-2 text-[15px] text-gray-500"
        />
        <span className="text-[#adb8c7] font-bold">{">"}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile view only */}
        <div className="lg:hidden w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm ml-2">
          <FaUserCircle className="text-gray-500 text-[22px]" />
        </div>

        {/* Desktop view */}
        <div className="hidden lg:flex items-center gap-5">
          <FaUserCircle className="text-gray-500 text-[20px] md:text-[28px]" />
          <span className="text-[#3f4e62] text-[15px]">Clayton Santos</span>

          <div className="relative w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
            <FaBell className="text-gray-500 text-[16px]" />
            <div className="w-[6px] h-[6px] rounded-full bg-pink-500 absolute top-1 right-1"></div>
          </div>

          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <RxCross2 className="text-white text-[16px] bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
