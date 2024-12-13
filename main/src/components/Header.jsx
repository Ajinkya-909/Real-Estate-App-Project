import React, { useEffect, useState } from "react";
import search from "../assets/images/icons/search.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  //   Gold: (255,204,24),
  //   Light_Gold: (240,206,96),
  //   Grey: (195,195,195),
  // Off White (normal):#fffaf1

  const [Search, setSearch] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", Search);
    const searQuery = urlParams.toString();
    navigate(`/search?${searQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const SearchTermFromUrl = urlParams.get("searchTerm");
    if (SearchTermFromUrl) {
      setSearch(SearchTermFromUrl);
    }
  }, [location.search]);

  return (
    <>
      <header className="p-3 bg-Off_White ">
        <nav className="flex flex-wrap justify-evenly items-center">
          <Link to="/">
            <h1 className="font-bold font-sans lg:text-2xl md:text-lg xl:3xl sm:text-lg flex flex-wrap">
              <span className="text-Gold">Royal</span>
              <span className="text-black">Estate's</span>
            </h1>
          </Link>
          <div>
            <form className="flex items-center" onSubmit={handleSubmit}>
              <input
                className="p-3 rounded-l-lg font-sans text-gray-900 bg-gray-200 active:border-gray-900"
                placeholder="Search..."
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
              />
              <button className="bg-Gold rounded-r-lg  text-Off_White text-lg font-sans p-2 cursor-pointer">
                <img className="h-7" src={search} alt="Search" />
              </button>
            </form>
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
                  alt="Profile"
                />
              ) : (
                <li className="hover:cursor-pointer  hover:underline ">
                  Sign In
                </li>
              )}
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
