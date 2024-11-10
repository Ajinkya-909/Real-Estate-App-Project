import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "E:\\Coding content\\Real Estate App\\main\\src\\index.css";
import { useSelector } from "react-redux";

export default function Header() {
  //   Gold: (255,204,24),
  //   Light_Gold: (240,206,96),
  //   Grey: (195,195,195),
  // Off White (normal):#fffaf1

  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <header className="p-3 bg-Off_White glass-effect">
        <nav className="flex flex-wrap justify-evenly items-center">
          <Link to="/">
            <h1 className="font-bold font-sans lg:text-2xl md:text-lg xl:3xl sm:text-lg flex flex-wrap">
              <span className="text-Gold">Royal</span>
              <span className="text-black">Estate's</span>
            </h1>
          </Link>
          <div className="Search">
            <input
              className="p-3  rounded-lg font-sans text-gray-900 bg-gray-200 active:border-gray-900"
              placeholder="Search..."
              type="text"
            />
          </div>
          <ul className=" font-semibold gap-8 md:gap-10 flex justify-around items-center list-none ">
            <Link to="/">
              <li className="hover:cursor-pointer  hover:underline ">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:cursor-pointer  hover:underline ">About</li>
            </Link>
            <Link to="profile">
              {currentUser ? (
                <img
                  className="rounded-full h-8 w-8 object-cover"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <li className="hover:cursor-pointer  hover:underline ">
                  Sign In
                </li>
              )}
            </Link>
          </ul>
        </nav>
        <img src={currentUser.avatar} alt="" />
      </header>
    </>
  );
}
