import React from "react";

export default function Story({ profile }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-blue-500 border-2 object-contain max-w-none cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={profile.avatar}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{profile.username}</p>
    </div>
  );
}
