import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 shadow-sm border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className=" cursor-pointer rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt="userimg"
        />
        <p className="flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      <img className="object-cover w-full" src={img} alt="" />
      <div className="flex justify-between my-3 align-items-center mx-2">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate ">
        <span className="mr-1 font-bold">{username}</span>
        {caption}
      </p>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 pr-1" />
        <input
          className="border-none flex-1 focus:right-0 outline-none w-40"
          placeholder="Comentar..."
          type="text"
        />
        <button className='pl-1 font-semibold text-blue-500'>POst</button>
      </form>
    </div>
  );
}
