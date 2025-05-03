import React from "react";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";
import { BsDot, BsPlus, BsPlusCircle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const ChatSidebar = () => {
  const getAvatar = (file) =>
    new URL(`/src/assets/avatars/${file}`, import.meta.url).href;

  const users = [
    { name: "Ina Perry", status: "Online", avatar: "avatar1.png" },
    { name: "Wesley Ray", status: "Online", avatar: "avatar2.png" },
    { name: "Eula Burton", status: "Work", avatar: "avatar3.png" },
    { name: "Viola Morales", status: "Offline", avatar: "avatar4.png" },
    { name: "Vincent Terry", status: "Online", avatar: "avatar5.png" },
    { name: "Neil Burns", status: "Offline", avatar: "avatar6.png" },
    { name: "Lydia Sutton", status: "Online", avatar: "avatar7.png" },
    { name: "Cynthia Evans", status: "Offline", avatar: "avatar8.png" },
  ];

  return (
    <div className="pt-8">
      <div className="hidden md:block w-72 bg-white p-4 text-[#7D8FB3] text-[13px] border-b">
        <div className="flex items-center space-x-4 border-b border-gray-200 rounded-lg px-3 py-4 mb-4">
          <FiSearch className="text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search in Messages"
            className="outline-none text-[13px] placeholder-[#7D8FB3] flex-1 font-semibold"
          />
          <FaArrowRight size={16} className="text-gray-400" />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[13px] text-[#7D8FB3] font-bold">
              Direct Messages
            </span>
            <BsPlusCircle size={22} className="text-gray-400" />
          </div>

          {users.map(({ name, status, avatar }, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <div className="flex items-center space-x-3">
                <img
                  src={getAvatar(avatar)}
                  alt={name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <div className="flex items-center space-x-16">
                  <div className="text-[13px] font-semibold text-[#2E3A59]">
                    {name}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div
                  className={`text-[13px] font-bold ${
                    status === "Online"
                      ? "text-green-500"
                      : status === "Work"
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  {status}
                </div>
                <span className="text-[12px] text-gray-400">12:45</span>
              </div>
            </div>
          ))}

          <button className="text-[#6B7A99] text-[12px] m-5 font-semibold border border-gray-200 rounded-lg w-1/2 py-2 shadow-md">
            Show More Channels
          </button>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] text-[##7D8FB3] font-semibold">
              # Channels
            </span>
            <BsPlusCircle size={22} className="text-gray-400" />
          </div>

          {[
            "How To Frontend",
            "Payment Workers",
            "Web Designer",
            "President of Sales",
            "Marketing Coordinator",
          ].map((channel, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <div className="flex items-center space-x-2">
                <BsDot className="text-gray-300 " size={32} />
                <span className="text-[#4D5E80] font-bold text-[13px]">
                  {channel}
                </span>
              </div>
              <div className="text-[12px] flex items-center gap-2">
                <span className="text-green-500 font-bold">+12</span>
                <span className="text-gray-400">564</span>
              </div>
            </div>
          ))}

          <button className="text-[#6B7A99] text-[12px] m-5 font-semibold border border-gray-200 rounded-lg w-1/2 py-2 shadow-md">
            Show More Channels
          </button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] text-[##7D8FB3] font-semibold">
              Project Companies
            </span>
            <BsPlusCircle size={22} className="text-gray-400" />
          </div>

          {[
            ["Walt Disney", "+12", "564"],
            ["Johnson & Johnson", "+5", "456"],
            ["General Electric", "+7", "387"],
            ["Bank of America", "", "321"],
          ].map(([company, change, count], index) => (
            <div key={index} className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <BsDot className="text-gray-300 " size={32} />
                <span className="text-[#4D5E80] font-bold text-[13px]">
                  {company}
                </span>
              </div>
              <div className="text-[12px] flex items-center gap-2">
                {change && (
                  <span className="text-green-500 font-bold">{change}</span>
                )}
                <span className="text-gray-400">{count}</span>
              </div>
            </div>
          ))}

          <button className="text-[#6B7A99] text-[12px] m-5 font-semibold border border-gray-200 rounded-lg w-1/2 py-2 shadow-md">
            Show More Channels
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
