import React from "react";
import { useState } from "react";
import "../index.css";
import Image1 from "../assets/images/Image1.jpeg";
import Image2 from "../assets/images/Image2.jpeg";
import Image3 from "../assets/images/Image3.jpeg";
import Image4 from "../assets/images/Image4.jpeg";
import Image5 from "../assets/images/Image5.jpeg";
import Image6 from "../assets/images/Image6.jpeg";

export default function CreateListing() {
  const [SelectedImg, setSelectedImg] = useState([]);
  const imageUrls = [];
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  function handleImages(e) {
    setSelectedImg(e);
  }
  const handleClick = (e) => {
    handleImages(e.target.name);
    if (imageUrls.includes(e.target.id) === true) {
    } else {
      if (imageUrls.length === 3) {
        imageUrls.pop();
        imageUrls.unshift(e.target.id);
      } else {
        imageUrls.unshift(e.target.id);
      }
    }
    console.log(imageUrls, e.target.name);
    console.log(SelectedImg);
  };
  return (
    <main className="p-3 max-w-5xl mx-auto">
      <h1 className="text-3xl font-sans font-semibold text-center my-7">
        Creat Listing
      </h1>
      <form className=" flex flex-col justify-around items-center gap-4">
        <div className="flex gap-5 max-700px:flex-col">
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded-lg "
              id="name"
              maxLength="60"
              minLength="10"
              required
            />
            <textarea
              type="text"
              placeholder="Description"
              className="border p-3 rounded-lg "
              id="description"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-lg "
              id="address"
              required
            />
            <div className="flex flex-wrap gap-6">
              <div className="flex gap-2">
                <input type="checkbox" id="sell" className="w-5" />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="rent" className="w-5" />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="parking" className="w-5" />
                <span>Parking</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="furnished" className="w-5" />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" id="offer" className="w-5" />
                <span>Offer</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <input
                  className="p-3 border border-gray-300 rounded-lg "
                  type="number"
                  id="bedrooms"
                  min="1"
                  max="10"
                  required
                />
                <span>Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="p-3 border border-gray-300 rounded-lg "
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  required
                />
                <span>Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="p-3 border border-gray-300 rounded-lg "
                  type="number"
                  id="regularprize"
                  min="1"
                  max="10"
                  required
                />
                <span>Regular Prize (INR)</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="p-3 border border-gray-300 rounded-lg "
                  type="number"
                  id="discountprize"
                  min="1"
                  max="10"
                  required
                />
                <span>Discounted Prize (INR)</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-1 flex-col">
            <p className="font-semibold ">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                This image will be the cover
              </span>
            </p>
            <div className="flex flex-wrap">
              {images.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="w-1/2 bg-gray-400 max-700px:h-3 max-700px:w-4"
                  >
                    <div
                      style={{ padding: "3px" }}
                      className={
                        SelectedImg.includes(index) ? "bg-green-600" : ""
                      }
                    >
                      <img
                        onClick={handleClick}
                        name={index}
                        src={items}
                        id={items}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="mx-auto self-start bg-Gold font-semibold font-sans p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          Create Listing
        </button>
      </form>
    </main>
  );
}
