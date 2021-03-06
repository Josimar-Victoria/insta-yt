import React from "react";
import Image from "next/image";
import logoimg from "../../public/img/Instagram-Logo.png";
import instagram from "../../public/img/instagram.png";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
export default function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden md:inline-grid  w-24 cursor-pointer">
          <Image src={logoimg} layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-10 md:hidden flex-shrink-0 cursor-pointer">
          <Image src={instagram} layout="fill" objectFit="contain" />
        </div>
        {/* Middle - search input field  */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="bg-gray-50 focus:outline-none focus:ring focus:border-blue-100 block w-full pl-10 sm:text-sm rounded-md"
              type="text"
              placeholder="Buscar .."
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <MenuIcon className="h-16  md:hidden cursor-pointer max-w-xs" />
          <img
            className="imgPerfile"
            src="https://avatars.githubusercontent.com/u/78392799?v=4"
            alt="perfilimg"
          />
        </div>
      </div>
    </div>
  );
}
