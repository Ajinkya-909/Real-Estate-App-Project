import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import location from "../assets/images/icons/location.png";
import bedroom from "../assets/images/icons/bedroom.png";
import bathroom from "../assets/images/icons/bathroom.png";
import furnished from "../assets/images/icons/furnished.png";
import parking from "../assets/images/icons/no-parking.png";

export default function Listing() {
  const [listing, setlisting] = useState({});
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
  const params = useParams();
  useEffect(() => {
    async function run() {
      try {
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          seterror(data.message);
          setloading(false);
          return;
        }
        setlisting(data);
        seterror(null);
        setloading(false);
      } catch (error) {
        seterror(error.message);
        setloading(false);
      }
    }
    run();
  }, [params.listingId]);
  console.log(listing);
  return (
    <>
      {loading ? (
        <p className="self-center font-semibold text-lg">Loading...</p>
      ) : (
        ""
      )}
      {error && (
        <p className="self-center text-red-600 font-semibold text-lg">
          {error}
        </p>
      )}
      {listing && (
        <main className="mx-auto relative w-11/12 flex justify-around flex-col items-start gap-8">
          <div
            className="self-center h-[calc(100vh/2)] w-[100%]"
            style={{
              background: `url(${listing.imageUrls}) center no-repeat`,
              backgroundSize: "contain",
            }}
          ></div>

          <div className="self-center w-full max-500px:flex-col max-500px:items-start flex justify-around items-center gap-4">
            <div className="flex flex-col justify-around items-start gap-5">
              <div>
                <h1 className="font-sans cursor-pointer font-semibold text-4xl ">
                  {listing.name}
                </h1>
              </div>
              <div>
                {listing.type === "rent" ? (
                  <h1 className="font-sans font-semibold text-4xl ">
                    Rental value: {listing.regularPrize}Rs
                  </h1>
                ) : (
                  <h1 className="font-sans font-semibold text-4xl ">
                    Selling at {listing.regularPrize}Rs
                  </h1>
                )}
              </div>
              <div className="flex max-500px:flex-col  justify-around items-center gap-4">
                <span className="bg-red-600 cursor-pointer text-white font-semibold rounded-lg p-2">
                  Property for {listing.type}
                </span>
                {listing.offer ? (
                  <span className="bg-green-600 cursor-pointer text-white font-semibold rounded-lg p-2">
                    Discounted Prize : {listing.discountPrize}Rs
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-wrap flex-col justify-around items-start gap-5">
              <div className="flex gap-2">
                <img className="w-8" src={location} alt="" srcset="" />
                <p className="text-lg font-semibold text-green-700">
                  {listing.address}
                </p>
              </div>
              <div className="flex gap-2">
                <img className="w-8" src={bedroom} alt="" srcset="" />
                <p className="text-lg font-semibold text-green-700">
                  {" "}
                  Bedrooms {listing.bedrooms}
                </p>
              </div>
              <div className="flex gap-2">
                <img className="w-8" src={bathroom} alt="" srcset="" />
                <p className="text-lg font-semibold text-green-700">
                  Bathrooms {listing.bathrooms}
                </p>
              </div>
              {listing.furnished ? (
                <div className="flex gap-2">
                  <img className="w-8" src={furnished} alt="" srcset="" />
                  <p className="text-lg font-semibold text-green-700">
                    {" "}
                    Furnished Property
                  </p>
                </div>
              ) : (
                <div className="flex gap-2">
                  <img className="w-8" src={furnished} alt="" srcset="" />
                  <p className="text-red-700 font-semibold text-lg">
                    Unfurnished Property
                  </p>
                </div>
              )}
              {listing.parking ? (
                <div className="flex gap-2">
                  <img className="w-8" src={parking} alt="" srcset="" />
                  <p className="text-lg font-semibold text-green-700">
                    {" "}
                    Parking Avaliable
                  </p>
                </div>
              ) : (
                <div className="flex gap-2">
                  <img className="w-8" src={parking} alt="" srcset="" />
                  <p className="text-red-700 font-semibold text-lg">
                    Parking Not Avaliable
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="p-4">
            <p className="text-lg">
              <span className="font-bold text-xl">Description:-</span>
              {listing.description}
            </p>
          </div>
        </main>
      )}
      {!listing ? <p>Listing not present</p> : ""}
    </>
  );
}
