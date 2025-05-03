"use client";

import { useState } from "react";
import { CiVideoOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdApps } from "react-icons/md";
import { AiFillFlag } from "react-icons/ai";
import { AiOutlineEllipsis } from "react-icons/ai";

export default function ChatSection() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </button>

          <button className="text-gray-500">
            <FaPhoneAlt className="h-5 w-5" />
          </button>

          <button className="text-gray-500">
            <CiVideoOn className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-sm font-medium text-gray-700">
            Dennis Smith
          </span>
        </div>

        <div className="flex items-center space-x-4 text-gray-400">
          <FiExternalLink className="h-5 w-5" />
          <MdApps className="h-5 w-5" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img
              src="../public/web.avif"
              alt="Stella Evans"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-900">Stella Evans</span>
                <span className="ml-2 text-xs text-gray-500">Web Designer</span>
                <span className="ml-2 text-xs text-gray-400">12:45 PM</span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>
            <div className="mt-1">
              <div className="flex items-center space-x-2 text-blue-600 font-medium text-sm">
                <span>Human Design Guidelines.pdf</span>
                <span className="text-xs text-gray-500">760 KB</span>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-xs text-gray-500 mr-2">
                  Downloading...
                </span>

                <div className="h-1.5 flex-1 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <span className="ml-2 text-xs text-gray-500">65%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img
              src="../public/web2.avif"
              alt="Edward Goodwin"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-900">
                  Edward Goodwin
                </span>
                <span className="ml-2 text-xs text-gray-500">Web Designer</span>
                <span className="ml-2 text-xs text-gray-400">12:45 PM</span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 ">
              <div className="relative">
                <img
                  src="../public/photo.avif"
                  alt="Abstract art"
                  className="rounded-lg w-[300px] h-[300px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-30 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="../public/photo.avif"
                  alt="Abstract art"
                  className="rounded-lg w-[300px] h-[300px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-30 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-1 text-xs text-gray-500 text-right">Today</div>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img
              src="../public/webmale.avif"
              alt="Kyle Peters"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-900">Kyle Peters</span>
                <span className="ml-2 text-xs text-gray-500">Web Designer</span>
                <span className="ml-2 text-xs text-gray-400">12:45 PM</span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>
            <div className="mt-1">
              <p className="text-sm text-gray-700">
                When you starting a company you are thinking on how to cut
                expenses. One of such options to cut the startup costs is a
                company logo design. But is it good idea to order a cheap logo
                or work without company logo at all?
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img
              src="../public/webmale2.avif"
              alt="Susan Lane"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-900">Susan Lane</span>
                <span className="ml-2 text-xs text-gray-500">Web Designer</span>
                <span className="ml-2 text-xs text-gray-400">12:45 PM</span>
              </div>

              <div className="flex items-center space-x-2">
                <button className="text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>
            <div className="mt-1">
              <p className="text-sm text-gray-700">
                When you starting a company you are thinking on how to cut
                expenses. One of such options to cut the startup costs is a
                company logo design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-3">
        <div className="flex items-center space-x-2">
          <button className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
          </button>

          <button className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M12 12h.01" />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Type Message..."
            className="flex-1 h-9 text-sm border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="bg-blue-600 hover:bg-blue-700 h-9 w-9 rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
