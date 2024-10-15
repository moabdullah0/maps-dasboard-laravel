import React from 'react';
import { CiBoxList } from 'react-icons/ci';
import { MdOutlinePlaylistRemove } from 'react-icons/md';
import { CiSettings } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from 'next/image';
interface Props {
  toggle?: boolean;
  handleToggle?: () => void;
}

const Navbar = ({ toggle, handleToggle }: Props) => {
  return (
    <div className="bg-white w-full h-[70px] flex items-center shadow-md border  ">
      <div className="flex items-center pl-4 space-x-5 ">
        <CiBoxList
          size={30}
          className={`${toggle ? 'hidden' : 'text-gray-400 cursor-pointer'}`}
          onClick={handleToggle}
        />
        <MdOutlinePlaylistRemove
          size={30}
          className={`${toggle ? 'text-gray-400 cursor-pointer' : 'hidden'}`}
          onClick={handleToggle}
        />
      </div>
      <form className="flex-grow px-4">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-blue-300 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type any cryptocurrency..."
            required
          />
        </div>
      </form>
      <div className='flex justify-center items-center space-x-5 px-5'>
      <Avatar className=''>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <CiSettings size={33}/>
    <DropdownMenu>
  <DropdownMenuTrigger><Image src={'/assets/amirican.jpg'} width={20} height={13} alt='american' className='rounded-full'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Arabic</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>English</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

      </div>
      
    </div>
  );
};

export default Navbar;
