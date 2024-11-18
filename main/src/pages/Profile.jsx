import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const [ShowListing, setShowListing] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [userListings, setuserListings] = useState([]);
  const [Error, setError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const showListing = () => {};
  const handleShowListing = async () => {
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setError(true);
        setLoading(false);
        return;
      }
      setuserListings(data);
      setLoading(false);
      setShowListing(true);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handleListingDelete = async (listingID) => {
    console.log(listingID);
    confirm(`Are you sure you want to delete this listing`);
    try {
      const res = await fetch(`/api/listing/delete/${listingID}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data);
        setError(true);
        return;
      }

      setuserListings((prev) =>
        prev.filter((listing) => listing._id !== listingID)
      );
    } catch (error) {}
  };

  return (
    <>
      <div className="overflow-hidden mt-8 bg-black/30 mx-auto w-3/4 h-3/4 flex flex-col justify-around gap-5 p-4 rounded-xl">
        <h1 className="self-center poppins-semibold text-4xl text-Off_White">
          Profile
        </h1>
        <div className="flex max-700px:flex-col items-center h-max justify-around p-4 ">
          <div className="w-1/4 max-500px:w-3/4 flex justify-center items-center mx-auto">
            <img
              className="rounded-full object-cover"
              src={currentUser.avatar}
              alt="Image"
            />
          </div>
          <div className="mx-auto">
            <div className="flex max-500px:flex-col m-4 gap-2 truncate">
              <span className="font-sans max-500px:text-base text-Off_White text-lg">
                Name:{" "}
              </span>
              <span className="poppins-semibold max-500px:text-base text-Off_White text-lg">
                {currentUser.username}
              </span>
            </div>
            <div className="flex max-500px:flex-col m-4 gap-2 truncate">
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
            className="bg-black rounded-lg max-500px:text-base text-Off_White text-lg poppins-semibold  p-2 cursor-pointer hover:scale-105 transition"
          >
            <button>Update Profile</button>
          </Link>
        </div>
        <h1 className="mt-2 self-center text-Off_White poppins-semibold text-3xl ">
          Your Listings
        </h1>
        <span
          style={{ alignSelf: "center" }}
          className={ShowListing ? "hidden" : "inline"}
        >
          <button
            style={{
              backgroundColor: "green",
            }}
            onClick={handleShowListing}
            type="button"
            className={
              Loading
                ? " hover:scale-105 transition font-sans font-semibold text-lg text-white p-3  rounded-lg pointer-events-none"
                : " hover:scale-105 transition font-sans font-semibold text-lg text-white p-3  rounded-lg"
            }
          >
            {Loading ? "Showing..." : "Show Listings"}
          </button>
        </span>
        <div className="self-center text-center w-4/5 p-2">
          {userListings.length > 0 ? (
            userListings.map((listing, index) => {
              return (
                <div
                  key={index}
                  className=" bg-black/20 p-2 border rounded-lg border-gray-600 flex justify-between gap-4  items-center"
                >
                  <Link to={`/listing/${listing._id}`}>
                    <img
                      src={listing.imageUrls}
                      alt="Listing Ursl"
                      className="h-28 w-28 object-contain"
                    />
                  </Link>
                  <Link
                    className="poppins-semibold truncate text-Off_White flex-1"
                    to={`/listing/${listing._id}`}
                  >
                    <p>{listing.name}</p>
                  </Link>
                  <div className="flex gap-4 ">
                    <Link to={`/update-listing/${listing._id}`}>
                      <button
                        style={{ backgroundColor: "green" }}
                        className=" p-2 text-Off_White font-semibold rounded-lg"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleListingDelete(listing._id)}
                      className="bg-red-600 p-2 text-Off_White font-semibold rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-white bg-black/50">
              You Don't have any Listings
            </p>
          )}
        </div>
        <span
          style={{ alignSelf: "center" }}
          className={ShowListing ? "mt-4 inline" : "mt-4 hidden"}
        >
          <button
            style={{
              backgroundColor: "red",
            }}
            onClick={() => {
              setuserListings([]);
              setShowListing(false);
            }}
            type="button"
            className={
              Loading
                ? " hover:scale-105 transition font-sans font-semibold text-lg text-white p-3  rounded-lg pointer-events-none"
                : " hover:scale-105 transition font-sans font-semibold text-lg text-white p-3  rounded-lg"
            }
          >
            <pre>Don't Show Listings</pre>
          </button>
        </span>
        <p className="self-center text-red-700 font-bold text-base">
          {Error ? "Error in showing listing" : ""}
        </p>
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
        className=" transition h-screen w-full absolute inset-0 -z-10 "
      ></div>
    </>
  );
}
