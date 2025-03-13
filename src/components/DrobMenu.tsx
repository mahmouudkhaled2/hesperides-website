"use client";
import { useState, useEffect, useRef } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FaWalking } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdHearingDisabled } from "react-icons/md";
import { MdMessage } from "react-icons/md";

const DrobMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="absolute top-1/3 end-8">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#C49732] absolute top-1/3 end-8 size-14 z-40 border-[1px] rounded-lg flex justify-center items-center"
        >
          {isOpen ? <AiOutlineClose size={25} /> : <CiMenuKebab size={27} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 end-8 bg-white bg-opacity-80 shadow-lg rounded-lg p-2 z-[70] w-14">
            <ul className="space-y-2 text-xl">
              <li className="p-2 w-full text-center flex justify-center items-center hover:bg-gray-200 rounded-md cursor-pointer">
              <FaWalking size={27} />
              </li>
              <li className="p-2 w-full text-center flex justify-center items-center hover:bg-gray-200 rounded-md cursor-pointer">
              <IoCall size={27} />
              </li>
              <li className="p-2 w-full text-center flex justify-center items-center hover:bg-gray-200 rounded-md cursor-pointer">
              <MdHearingDisabled size={27} />
              </li>
              <li className="p-2 w-full text-center flex justify-center items-center hover:bg-gray-200 rounded-md cursor-pointer">
              <MdMessage size={27} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrobMenu;
