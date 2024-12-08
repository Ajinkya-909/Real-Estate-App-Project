import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import location from "../assets/images/icons/location.png";
import bedroom from "../assets/images/icons/bedroom.png";
import bathroom from "../assets/images/icons/bathroom.png";
import furnished from "../assets/images/icons/furnished.png";
import parking from "../assets/images/icons/no-parking.png";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md w-full sm:w-80 hover:shadow-lg transition overflow-hidden rounded-lg">
      <Link className=" flex flex-col gap-4" to={`/listing/${listing._id}`}>
        <img
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition"
          src={listing.imageUrls}
          alt="listing cover"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate  font-sans font-semibold ">{listing.name}</p>
          <div className="flex items-center gap-2">
            <img className="w-5" src={location} />
            <p className="truncate text-sm text-gray-600">{listing.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold ">Description: </span>
            <p className="truncate text-sm text-gray-600">{listing.address}</p>
          </div>
          {listing.offer ? (
            <p className="text-green-700 font-semibold">
              Offer: {listing.discountPrize.toLocaleString("en-US")} Rs
              {listing.type === "rent" && "/month"}
            </p>
          ) : (
            <p className=" font-semibold">
              {listing.regularPrize.toLocaleString("en-US")} Rs
            </p>
          )}
          <div className="flex justify-around flex-wrap items-center">
            <div className="flex gap-2">
              <img className="w-5" src={bedroom} alt="" />
              <p className="text-sm font-semibold text-green-700">
                {" "}
                Bedrooms {listing.bedrooms}
              </p>
            </div>
            <div className="flex gap-2">
              <img className="w-5" src={bathroom} alt="" />
              <p className="text-sm font-semibold text-green-700">
                Bathrooms {listing.bathrooms}
              </p>
            </div>
            {listing.furnished ? (
              <div className="flex gap-2">
                <img className="w-5" src={furnished} alt="" />
                <p className="text-sm font-semibold text-green-700">
                  {" "}
                  Furnished
                </p>
              </div>
            ) : (
              <div className="flex gap-2">
                <img className="w-5" src={furnished} alt="" />
                <p className="text-red-700 font-semibold text-sm">
                  Unfurnished
                </p>
              </div>
            )}
            {listing.parking ? (
              <div className="flex gap-2">
                <img className="w-5" src={parking} alt="" />
                <p className="text-sm font-semibold text-green-700">
                  {" "}
                  Parking Avaliable
                </p>
              </div>
            ) : (
              <div className="flex gap-2">
                <img className="w-5" src={parking} alt="" />
                <p className="text-red-700 font-semibold text-sm">
                  Parking Not Avaliable
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
