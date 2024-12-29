import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../../src/index.css";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutUserStart,
  signoutUserSuccess,
  signoutUserFailure,
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formdata, setformdata] = useState({});
  const [UpdateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        setUpdateSuccess(false);
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {}
    dispatch(deleteUserFailure(error.message));
  };

  const handleSignOut = async () => {
    try {
      dispatch(signoutUserStart());
      const res = await fetch("api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutUserFailure(data.message));
      }
      dispatch(signoutUserSuccess(data));
    } catch (error) {
      dispatch(signoutUserFailure(error.message));
    }
  };

  return (
    <div className="bg-yellow-100 rounded-3xl mt-6 p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <img
          className="self-center rounded-full h-24 w-24 object-cover cursor-pointer"
          src={currentUser.avatar}
          alt="User Image"
        />
        <input
          type="text"
          placeholder="User name"
          className="border rounded-lg p-3"
          id="username"
          onChange={handleChange}
          defaultValue={currentUser.username}
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-3"
          id="email"
          onChange={handleChange}
          defaultValue={currentUser.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg p-3"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-black p-2 text-Off_White rounded-lg hover:opacity-95 disabled:opacity-85"
        >
          {loading ? "Loading..." : "Update"}
        </button>
        <div className="p-3 flex justify-between items-center">
          <span
            onClick={handleDelete}
            className="text-white rounded-lg font-semibold p-2 bg-red-600 cursor-pointer font-sans"
          >
            Delete account
          </span>
          <span
            onClick={handleSignOut}
            className="text-white rounded-lg font-semibold p-2 bg-red-600 cursor-pointer font-sans"
          >
            Sign Out
          </span>
        </div>
        <p className="text-red-700 font-semibold">{error ? error : ""}</p>
        <p className="text-green-700 font-semibold">
          {UpdateSuccess ? "User Updated Successfully" : ""}
        </p>
      </form>
    </div>
  );
}
