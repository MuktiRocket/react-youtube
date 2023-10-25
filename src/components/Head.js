import React from "react";
import {
  HAMBURGER_ICON_URL,
  USER_ICON_URL,
  YOUTUBE_LOGO_URL,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_ICON_URL}
        />
        <img className="h-8 mx-6" alt="youtube-logo" src={YOUTUBE_LOGO_URL} />
      </div>
      <div className="col-span-10 pl-96">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_ICON_URL} />
      </div>
    </div>
  );
};

export default Head;
