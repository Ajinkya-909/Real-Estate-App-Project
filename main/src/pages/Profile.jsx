import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/images/Image1.jpeg";
import "../index.css";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <>
      <div className="overflow-hidden mt-8 bg-black/30 mx-auto w-3/4 h-3/4 flex flex-col justify-around gap-5 p-4 rounded-xl">
        <h1 className="self-center poppins-semibold text-4xl text-Off_White">
          Profile
        </h1>
        <div className="flex max-700px:flex-col  h-max justify-around p-4 ">
          <div className="w-3/4 flex justify-center items-center mx-auto">
            <img
              className="rounded-full object-cover"
              src={currentUser.avatar}
              alt="Image"
            />
          </div>
          <div className="mx-auto">
            <div className="flex max-500px:flex-col m-4 gap-2">
              <span className="font-sans max-500px:text-base text-Off_White text-lg">
                Name:{" "}
              </span>
              <span className="poppins-semibold max-500px:text-base text-Off_White text-lg">
                {currentUser.username}
              </span>
            </div>
            <div className="flex max-500px:flex-col m-4 gap-2">
              <span className="font-sans max-500px:text-base text-Off_White text-lg">
                Email:{" "}
              </span>
              <span className="poppins-semibold max-500px:text-base text-Off_White text-lg">
                {currentUser.email}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-around ">
          <Link
            to="/create-listing"
            className="bg-Gold rounded-lg max-500px:text-base text-lg poppins-semibold  p-2 cursor-pointer hover:scale-105 transition"
          >
            <button>Create Listing</button>
          </Link>
          <Link
            to="/profile-update"
            className="bg-black rounded-lg max-500px:text-base text-Off_White text-lg poppins-semibold   p-2 cursor-pointer hover:scale-105 transition"
          >
            <button>Update Profile</button>
          </Link>
        </div>
      </div>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url("${currentUser.avatar}")`,
          filter: "blur(5px)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        className=" transition h-screen w-screen absolute inset-0 -z-10 "
      ></div>
    </>
  );
}
