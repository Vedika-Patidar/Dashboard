import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import { MdApps, MdOutlineAttachment } from "react-icons/md";
import { AiFillFlag, AiOutlineEllipsis } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import { LuMaximize2 } from "react-icons/lu";

export default function ChatSection() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-auto pt-8 w-full mx-6 ">
      <div className="bg-white">
        <div className="flex items-center justify-between px-4 py-4 border-b pt-9 ">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-[#C3CAD9]" size={20} />

            <IoMdVideocam size={24} className=" text-[#C3CAD9]" />
          </div>

          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-semibold text-[#7D8FB3]">
              Dennis Smith
            </span>
          </div>

          <div className="flex items-center space-x-4 text-gray-400">
            <LuMaximize2 className="text-[#C3CAD9]" size={24} />
            <MdApps className=" text-[#C3CAD9]" size={24} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 md:px-4 py-4 space-y-6 bg-white">
        <div className="flex space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img
              src="../public/web.avif"
              alt="Stella Evans"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 p-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 pt-0.5 flex-wrap">
                <span className="font-medium text-[#4D5E80]">Stella Evans</span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  Web Designer
                </span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  12:45 PM
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <FaHeart className="text-orange-300" size={22} />
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>
            <div className="p-4">
              <div className="mt-5 border p-8 w-full md:w-[520px] border-gray-200 rounded-md">
                <div className="flex items-center space-x-4 text-[#4D5E80] font-bold text-[12px] pb-2">
                  <span>Human Design Guidelines.pdf</span>
                  <span className="text-[12px] text-[#3361FF]">760 KB</span>
                </div>
                <div className="flex justify-between pt-5 pb-3">
                  <span className="text-[12px] text-[#3361FF] font-bold mr-2">
                    Downloading...
                  </span>
                  <span className="ml-2 text-[12px] text-[#3361FF]">65%</span>
                </div>
                <div className="flex items-center">
                  <div className="h-1.5 flex-1 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
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
              <div className="flex gap-3 pt-0.5 flex-wrap">
                <span className="font-medium text-[#4D5E80]">
                  Edward Goodwin
                </span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  Web Designer
                </span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  12:45 PM
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <FaHeart className="text-gray-300" size={22} />
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>

            <div className="mt-2 flex w-full md:w-[490px] gap-4 pt-4 md:">
              <div className="relative">
                <img
                  src="../public/photo.avif"
                  alt="Abstract art"
                  className="rounded-lg h-[230px] object-cover w-full"
                />
              </div>
              <div className="relative">
                <img
                  src="../public/photo.avif"
                  alt="Abstract art"
                  className="rounded-lg h-[230px] object-cover w-full"
                />
              </div>
            </div>

            <div className="flex items-center justify-center pt-14">
              <div className="w-full border-t border-gray-300 relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 py-1 text-[13px] text-[#7D8FB3] font-medium shadow-sm rounded-full">
                  Today
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 pt-6">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img
              src="../public/webmale.avif"
              alt="Kyle Peters"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 pt-0.5 flex-wrap">
                <span className="font-medium text-[#4D5E80]">Kyle Peters</span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  Web Designer
                </span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  12:45 PM
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <FaHeart className="text-gray-300" size={22} />
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>
            <div className="mt-5 border p-6 w-full md:w-[520px] border-gray-200 rounded-md">
              <p className="text-[14px] font-semibold text-[#4D5E80]">
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
              <div className="flex gap-3 pt-0.5 flex-wrap">
                <span className="font-medium text-[#4D5E80]">Susan Lane</span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  Web Designer
                </span>
                <span className="ml-2 text-xs text-[#7D8FB3] pt-1.5">
                  12:45 PM
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <FaHeart className="text-gray-300" size={22} />
                <AiFillFlag className="text-gray-300" size={22} />
                <AiOutlineEllipsis className="text-gray-500" size={22} />
              </div>
            </div>
            <div className="mt-5 border p-6 w-full md:w-[520px] line-clamp-4 border-gray-200 rounded-md">
              <p className="text-[14px] font-semibold text-[#4D5E80]">
                When you starting a company you are thinking on how to cut
                expenses. One of such options to cut the startup costs is a
                company logo design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-3 bg-white">
        <div className="flex items-center space-x-2">
          <MdOutlineAttachment size={32} className="text-[#C3CAD9]" />
          <CiImageOn size={28} className="text-[#C3CAD9]" />
          <input
            type="text"
            placeholder="Type Message..."
            className="flex-1 h-12 text-[14px] placeholder-[#4D5E80] rounded-md px-3 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <IoSendSharp size={28} className="text-[#3361FF]" />
        </div>
      </div>
    </div>
  );
}
