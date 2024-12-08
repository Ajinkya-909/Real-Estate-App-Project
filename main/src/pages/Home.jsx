import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import "../index.css";

export default function Home() {
  const [OfferListings, setOfferListings] = useState([]);
  const [saleListins, setsaleListins] = useState([]);
  const [rentListing, setrentListing] = useState([]);
  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchSaleListing();
      } catch (error) {}
    };
    const fetchSaleListing = async () => {
      try {
        const res = await fetch("/api/listing/get?sale=true&limit=4");
        const data = await res.json();
        setsaleListins(data);
        fetchRentListing();
      } catch (error) {}
    };

    const fetchRentListing = async () => {
      try {
        const res = await fetch("/api/listing/get?rent=true&limit=4");
        const data = await res.json();
        setrentListing(data);
      } catch (error) {}
    };

    fetchOfferListing();
  }, []);
  return (
    <>
      <Slider />
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {OfferListings && OfferListings.length > 0 && (
          <div className="">
            <div className=" my-3">
              <h2 className="text-2xl font-semibold">Recent Offers</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={"/search?offer=true"}
              >
                See more offers...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {OfferListings.map((listing) => {
                return <ListingItem listing={listing} key={listing._id} />;
              })}
            </div>
          </div>
        )}
        {saleListins && saleListins.length > 0 && (
          <div className="">
            <div className=" my-3">
              <h2 className="text-2xl font-semibold">Recent Sale</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={"/search?sale=true"}
              >
                See more Properties for sale...
              </Link>
            </div>
            <div className=" flex flex-wrap gap-4">
              {saleListins.map((listing) => {
                return <ListingItem listing={listing} key={listing._id} />;
              })}
            </div>
          </div>
        )}
        {rentListing && rentListing.length > 0 && (
          <div className="">
            <div className=" my-3">
              <h2 className="text-2xl font-semibold">Recent Rental Offers</h2>
              <Link
                className="text-sm text-blue-700 hover:underline"
                to={"/search?rent=true"}
              >
                See more rental properties...
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListing.map((listing) => {
                return <ListingItem listing={listing} key={listing._id} />;
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
