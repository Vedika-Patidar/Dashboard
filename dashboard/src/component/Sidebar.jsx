import React from "react";
import {
  FaCompass,
  FaStar,
  FaRegCommentDots,
  FaChartLine,
  FaSearchLocation,
  FaBuilding,
} from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const Sidebar = () => {
  const topIcons = [
    { icon: <FaCompass />, active: true },
    { icon: <FaStar /> },
    { icon: <FaRegCommentDots /> },
    { icon: <FaChartLine /> },
    { icon: <FaSearchLocation /> },
    { icon: <FaBuilding /> },
  ];

  const users = [
    { src: "https://i.pravatar.cc/300?img=1", active: true },
    { src: "https://i.pravatar.cc/300?img=2" },
    { src: "https://i.pravatar.cc/300?img=3" },
    { src: "https://i.pravatar.cc/300?img=4" },
  ];

  return (
    <div className="hidden md:flex flex-col justify-between items-center h-auto w-24 py-4 bg-gray-50 gap-8">
      <div className="space-y-5">
        {topIcons.map((item, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-full bg-white flex items-center justify-center transition-all text-lg ${
              item.active
                ? "bg-blue-100 text-blue-600"
                : "text-gray-400 hover:bg-gray-200"
            }`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {users.map((user, idx) => (
          <div key={idx} className="relative">
            <img
              src={user.src}
              alt={`user-${idx}`}
              className="w-12 h-12 rounded-full border-2 border-white shadow-md"
            />
            {user.active && (
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white"></span>
            )}
          </div>
        ))}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition">
          <GoPlus className="text-white text-xl bg-gray-400 rounded-full" />
        </div>
      </div>
     
    </div>
  );
};

export default Sidebar;
