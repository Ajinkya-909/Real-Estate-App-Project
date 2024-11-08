import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";

export default function Sign_In() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const HandleSubmit = async (e) => {
    e.preventDefault(); // to avoid the page to get refreshed.
    dispatch(signInStart());
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  const HandleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <>
      <div className="h-2/5 w-2/5 max-500px:w-full m-auto p-4 ">
        <h1 className=" mt-2 mb-4  font-sans font-semibold text-center lg:text-4xl ">
          Sign In
        </h1>
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col justify-around gap-4 items-center"
        >
          <input
            className="relative w-full p-3 bg-gray-200 rounded-xl"
            type="text"
            placeholder="Email"
            id="email"
            onChange={HandleChange}
          />
          <input
            className="relative w-full p-3 bg-gray-200 rounded-xl"
            type="password"
            placeholder="Password"
            id="password"
            onChange={HandleChange}
          />
          <input
            disabled={loading}
            className="relative opacity-90 w-full p-3 bg-Gold font-medium text-xlg rounded-xl hover:cursor-pointer hover:opacity-100"
            type="submit"
            value={loading ? "Loding" : "Sign In"}
          />
        </form>
        <div className="mt-4 flex gap-4">
          <p>Dont have an Account?</p>
          <Link className="text-cyan-500 font-semibold" to="/sign-up">
            Sign Up
          </Link>
        </div>
        <p className="mt-6 text-red-600 text-lg">{error} </p>
      </div>
    </>
  );
}
