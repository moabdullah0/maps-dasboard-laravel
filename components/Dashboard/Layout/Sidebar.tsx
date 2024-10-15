'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Listsidebar } from "@/constant/Listsidebar";

interface Props {
  toggle: boolean;
}

const LeftSidebar = ({ toggle }: Props) => {
  const currentPath = usePathname(); 

  return (
    <div
      className={`${toggle ? "h-full w-[230px] bg-gray-900 border border-gray-700 shadow-lg duration-200 transition-transform" : "w-[70px] h-full bg-gray-900"} z-40 text-white fixed rounded-lg`}
    >
      <div className="flex justify-center w-full py-5">
        <Image
          className={`${toggle ? "w-[80%] mt-5 bg-white rounded-lg p-4" : "w-[30px] mt-5"}`}
          src="/assets/Logo Y.png"
          width={200}
          height={23}
          alt="logo"
        />
      </div>

      <div className="space-y-4 mt-5">
        {Listsidebar.map((item, i) => (
          <Link href={item.link} key={i} className="mx-3">
            <div
              className={`flex items-center px-4 py-3 rounded-md transition-colors duration-150 cursor-pointer 
                ${currentPath === item.link ? "bg-gray-700 text-white" : "hover:bg-gray-700 hover:text-white"}`}
            >
              <item.icon className={`text-xl ${toggle ? "mr-3" : "m-auto"}`} />
              {toggle && <span className="font-semibold">{item.title}</span>}
            </div>
          </Link>
        ))}
      </div>

      {toggle && (
        <div className="absolute bottom-0 w-full px-4 pb-5 text-center">
          <h1 className="text-center text-sm">Powered By</h1>
          <span className="text-blue-400 font-bold text-sm">Maps Team Azaz</span>
          <button className="text-white font-bold bg-blue-500 hover:bg-blue-600 duration-150 border border-transparent rounded-md w-full py-2 mt-2">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
