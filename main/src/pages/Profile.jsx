import React from "react";
import { useSelector } from "react-redux";
import "../../src/index.css";

export default function Profile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className="bg-yellow-200 rounded-3xl mt-6 p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-7">Profile</h1>
      <form className="flex flex-col gap-5">
        <img
          className="self-center rounded-full h-24 w-24 object-cover cursor-pointer"
          src={currentUser.avatar}
          alt="photo"
        />
        <input
          type="text"
          placeholder="User name"
          className="border rounded-lg p-3"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-3"
          id="email"
        />
        <input
          type="text"
          placeholder="Password"
          className="border rounded-lg p-3"
          id="password"
        />
        <button className="bg-black p-2 text-Off_White rounded-lg hover:opacity-95 disabled:opacity-85">
          Update
        </button>
        <div className="p-3 flex justify-between items-center">
          <span className="text-red-700 cursor-pointer font-medium">
            Delete account
          </span>
          <span className="text-red-700 cursor-pointer font-medium">
            Sign Out
          </span>
        </div>
      </form>
    </div>
  );
}
