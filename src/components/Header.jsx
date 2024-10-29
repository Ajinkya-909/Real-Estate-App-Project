import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  //   Gold: (255,204,24),
  //   Light_Gold: (240,206,96),
  //   Grey: (195,195,195),

  return (
    <>
      <header className="p-3">
        <nav className="flex flex-wrap justify-evenly items-center">
          <Link to="/">
            <h1 className="font-bold font-sans lg:text-2xl md:text-lg xl:3xl sm:text-lg flex flex-wrap">
              <span className="text-Gold">Royal</span>
              <span className="text-black">Estate</span>
            </h1>
          </Link>
          <div className="Search">
            <input
              className="p-3  rounded-lg font-semibold font-serif text-gray-900 bg-gray-200 active:border-gray-900"
              placeholder="Search..."
              type="text"
            />
          </div>
          <ul className="font-semibold gap-10 md:gap-5 flex justify-around items-center list-none ">
            <Link to="/">
              <li className="hover:cursor-pointer  hover:underline ">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:cursor-pointer  hover:underline ">About</li>
            </Link>
            <Link to="/profile">
              <li className="hover:cursor-pointer  hover:underline ">
                Profile
              </li>
            </Link>
            <Link to="sign-in">
              <li className="hover:cursor-pointer  hover:underline ">
                Sign In
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
