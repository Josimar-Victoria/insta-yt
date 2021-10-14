import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex  items-center align-center justify-between ml-10">
      <img
        className="w-16 h-16  rounded-full border p-[2px] mt-14 ml-10"
        src="https://avatars.githubusercontent.com/u/78392799?v=4"
        alt=""
      />
      <div className="mt-14 flex-1 mx-4">
        <h2 className="font-bold">JosimarDev</h2>
        <h3 className="text-sm text-gray-400">Bienvendo a Instagram</h3>
      </div>
      <button className=" text-blue-400 font-semibold mt-10 pl-2">
        Sign Out
      </button>
    </div>
  );
}
