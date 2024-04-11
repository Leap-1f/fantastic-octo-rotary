"use client";
import { FaRegBell } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
export function AdminHeader() {
  return (
    <div className="flex justify-between bg-black h-[5%] w-full">
      <div className="text-white flex justify-center items-center ml-[10%]">
        Pinecone
      </div>
      <div className="flex justify-center items-center *:text-white gap-[30%] mr-[10%] *:cursor-pointer">
        <div>
          <FaRegBell className="h-6 w-6" />
        </div>
        <div>
          <FaRegUser className="h-6 w-6" />
        </div>
        <div>Username</div>
      </div>
    </div>
  );
}
