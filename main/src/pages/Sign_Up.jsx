import React from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function Sign_Up() {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({});
  const [error, seterror] = useState(null);
  const [loding, setLoding] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault(); // to avoid the page to get refreshed.
    setLoding(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      setLoding(false);
      if (data.success === false) {
        setLoding(false);
        seterror(data.message);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoding(false);
      seterror(error);
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
          Sign Up
        </h1>
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col justify-around gap-4 items-center"
        >
          <input
            className="relative w-full p-3 bg-gray-200 rounded-xl"
            type="text"
            placeholder="User Name"
            id="username"
            onChange={HandleChange}
          />
          <input
            className="relative w-full p-3 bg-gray-200 rounded-xl"
            type="email"
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
            disabled={loding}
            className="relative opacity-90 w-full p-3 bg-Gold font-medium text-xlg rounded-xl hover:cursor-pointer hover:opacity-100"
            type="submit"
            value={loding ? "Loding" : "Sign Up"}
          />
          <OAuth />
        </form>
        <div className="mt-4 flex gap-4">
          <p>Have an Account?</p>
          <Link className="text-cyan-500 font-semibold" to="/sign-in">
            Sign In
          </Link>
        </div>
        <p className="mt-6 text-red-600 text-lg">{error} </p>
      </div>
    </>
  );
}
