import React, { useState } from "react";
import {
  FaThLarge,
  FaRegDotCircle,
  FaSuitcase,
  FaAngleDown,
  FaAngleRight,
  FaUsers,
  FaProjectDiagram,
  FaTasks,
  FaCogs,
  FaUserCog,
  FaLink,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const MainMenu = () => {
  const [openProjects, setOpenProjects] = useState(true);
  const [openClients, setOpenClients] = useState(true);
  const [openSubProjects, setOpenSubProjects] = useState(true);

  return (
    <div className="hidden md:block w-auto bg-gray-50 min-h-screen px-4 py-6 text-sm text-gray-700">
      {/* Main Menu */}
      <p className="text-[14px] font-semibold text-[#7D8FB3] uppercase mb-3">
        Main Menu
      </p>

      {/* Dashboard */}
      <div className="mb-8">
        <div className="flex items-center justify-between px-3 py-5 rounded-md bg-white shadow-sm text-[#3361FF] font-bold gap-28  ">
          <div className="flex items-center gap-8">
            <FaThLarge size={24} />
            <span className="text-[13px]">Dashboard</span>
          </div>
          <FaAngleDown className="text-gray-300" size={22} />
        </div>
      </div>

      {/* Applications */}
      <div className="mb-4">
        <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md">
          <div className="flex items-center gap-8">
            <FaThLarge size={22} className="text-gray-400" />
            <span className="text-[13px] font-bold text-[#7D8FB3]">
              Applications
            </span>
          </div>
          <FaAngleDown className="text-gray-300" size={22} />
        </div>
      </div>

      {/* Clients with badge */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          <div className="flex items-center gap-8">
            <FaUsers size={22} className="text-gray-400" />
            <span className="text-[13px] font-bold text-[#7D8FB3]">
              Clients
            </span>
          </div>
          <div className="relative">
            <FaAngleDown className="text-gray-300" size={22} />
            <span className="absolute -top-0 right-12 text-s bg-blue-600 text-white rounded-full px-1.5">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="p-6 rounded-xl shadow-md mb-4">
        <div
          className="flex items-center justify-between mb-2 cursor-pointer"
          onClick={() => setOpenProjects(!openProjects)}
        >
          <div className="flex items-center gap-8 font-bold text-[#3361FF]">
            <FaSuitcase size={24} />
            <span className="text-[13px] font-bold">Projects</span>
          </div>
          <FaAngleDown
            size={22}
            className={`${
              openProjects ? "rotate-180 text-gray-300" : ""
            } transition-transform`}
          />
        </div>

        {/* Coca Cola Project and sub-items */}
        {openProjects && (
          <div className="ml-4 space-y-6 text-gray-600 mt-6">
            <div>
              <div
                className="flex items-center justify-between text-[#3361FF] cursor-pointer"
                onClick={() => setOpenSubProjects(!openSubProjects)}
              >
                <div className="flex gap-5">
                  <GoDotFill size={16} className="pt-1" />
                  <span className="font-bold text-[13px]">
                    Coca Cola Project
                  </span>
                </div>
                <FaAngleDown
                  size={22}
                  className={`${
                    openSubProjects ? "rotate-180 text-gray-300" : ""
                  } transition-transform`}
                />
              </div>
              {openSubProjects && (
                <div className="ml-3 mt-4 space-y-4 text-sm ">
                  <div className="flex items-center justify-between hover:text-blue-500 cursor-pointer font-bold">
                    <div className="flex gap-5">
                      <GoDotFill size={16} className="pt-1" />
                      <span className="text-[13px] text-[#7D8FB3]">
                        Link Colors
                      </span>
                    </div>
                    <FaAngleRight className="text-gray-300" size={22} />
                  </div>
                  <div className="flex items-center justify-between hover:text-blue-500 cursor-pointer font-semibold text-[#3361FF]">
                    <div className="flex gap-5">
                      <GoDotFill size={16} className="pt-1" />
                      <span className="text-[13px] ">Additional Content</span>
                    </div>
                    <FaAngleRight className="text-gray-300" size={22} />
                  </div>
                  <div className="flex items-center justify-between hover:text-blue-500 cursor-pointer font-semibold">
                    <div className="flex gap-5">
                      <GoDotFill size={16} className="pt-1" />
                      <span className="text-[13px] text-[#7D8FB3]">
                        Dismissing
                      </span>
                    </div>
                    <FaAngleRight className="text-gray-300" size={22} />
                  </div>
                  <div className="flex items-center justify-between hover:text-blue-500 cursor-pointer font-semibold">
                    <div className="flex gap-5">
                      <GoDotFill size={16} className="pt-1" />
                      <span className="text-[13px] text-[#7D8FB3]">
                        Java Script Behavior
                      </span>
                    </div>
                    <FaAngleRight className="text-gray-300" size={22} />
                  </div>
                </div>
              )}
            </div>

            <div className="text-[#7D8FB3] hover:text-blue-500 cursor-pointer flex justify-between font-semibold">
              <div className="flex gap-5">
                <GoDotFill size={16} className="pt-1" />
                <span className="text-[13px]">Zoom Projects</span>
              </div>
              <FaAngleRight className="text-gray-300" size={22} />
            </div>
            <div className="text-[#7D8FB3] hover:text-blue-500 cursor-pointer flex justify-between font-semibold">
              <div className="flex gap-5">
                <GoDotFill size={16} className="pt-1" />
                <span className="text-[13px]">Task Board</span>
              </div>
              <FaAngleRight className="text-gray-300" size={22} />
            </div>
            <div className="text-[#7D8FB3] hover:text-blue-500 cursor-pointer flex justify-between font-semibold">
              <div className="flex gap-5">
                <GoDotFill size={16} className="pt-1" />
                <span className="text-[13px]">Project Diagramma</span>
              </div>
              <FaAngleRight className="text-gray-300" size={22} />
            </div>
          </div>
        )}
      </div>

      {/* Applications */}
      <div className="mb-4">
        <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md">
          <div className="flex items-center gap-8">
            <FaThLarge size={22} className="text-gray-400" />
            <span className="text-[13px] font-bold text-[#7D8FB3]">
              Applications
            </span>
          </div>
          <FaAngleDown className="text-gray-300" size={22} />
        </div>
      </div>

      {/* Second Menu */}
      <p className="text-[14px] font-semibold text-[#7D8FB3] uppercase mt-10 mb-8">
        Second Menu
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md">
          <div className="flex items-center gap-8">
            <FaLink size={22} className="text-gray-300" />
            <span className="text-[13px] font-bold text-[#7D8FB3]">
              Integrations
            </span>
          </div>
          <FaAngleDown className="text-gray-400" size={22} />
        </div>
        <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md">
          <div className="flex items-center gap-8">
            <FaUserCog size={22} className="text-gray-400" />
            <span className="text-[13px] font-bold text-[#7D8FB3]">Users</span>
          </div>
          <FaAngleDown className="text-gray-300" size={22} />
        </div>
        <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md">
          <div className="flex items-center gap-8">
            <FaCogs size={22} className="text-gray-400" />
            <span className="text-[13px] font-bold text-[#7D8FB3]">
              Settings
            </span>
          </div>
          <FaAngleDown className="text-gray-300" size={22} />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
