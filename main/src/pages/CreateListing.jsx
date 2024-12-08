import React, { useRef } from "react";
import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/images/Image7.jpeg";
import Image2 from "../assets/images/Image15.jpg";
import Image3 from "../assets/images/Image13.webp";
import Image4 from "../assets/images/Image14.jpeg";
import Image5 from "../assets/images/Image17.png";
import Image6 from "../assets/images/Image16.png";
import { useSelector } from "react-redux";

export default function CreateListing() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user);
  const [SelectedImg, setSelectedImg] = useState([0]);
  const [Poster, setPoster] = useState();
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const [formData, setformData] = useState({
    imageUrls: Poster,
    name: "",
    description: "",
    address: "",
    type: "sell",
    bedrooms: 1,
    bathrooms: 1,
    regularPrize: 500,
    discountPrize: 0,
    offer: false,
    parking: false,
    furnished: false,
  });

  function handleImages(e) {
    setSelectedImg(e);
  }
  const handleClick = (e) => {
    handleImages(e.target.name);
    setformData({
      ...formData,
      imageUrls: e.target.id,
    });
  };
  const handleChange = (e) => {
    if (e.target.id === "sell" || e.target.id === "rent") {
      setformData({ ...formData, type: e.target.id });
    } else if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setformData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    } else if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setformData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    } else {
      setformData({
        ...formData,
        imageUrls: Poster,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (+formData.regularPrize < +formData.discountPrize) {
        return seterror("Discount Prize can't be more than regular prize");
      }
      setloading(true);
      seterror(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser.currentUser._id,
        }),
      });
      const data = await res.json();
      setloading(false);
      if (data.success === false) {
        seterror(data.message);
        return;
      }
      console.log(data);
      navigate(`/listing/${data._id}`);
    } catch (error) {
      seterror(error.message);
      setloading(false);
    }
  };

  return (
    <main className="px-2 max-w-5xl mx-auto">
      <h1 className="text-3xl font-sans font-semibold text-center my-7">
        Creat Listing
      </h1>
      {error && <p className="text-red-600">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-around items-center gap-4"
      >
        <div className="flex gap-5 max-700px:flex-col">
          <div className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Name of Property"
              className="border p-3 rounded-lg "
              id="name"
              maxLength="60"
              minLength="5"
              required
              onChange={handleChange}
              defaultValue={formData.name}
            />
            <textarea
              type="text"
              placeholder="Description"
              className="border p-3 rounded-lg "
              id="description"
              required
              onChange={handleChange}
              defaultValue={formData.description}
            />
            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-lg "
              id="address"
              required
              onChange={handleChange}
              defaultValue={formData.address}
            />
            <div className="flex flex-wrap gap-6">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="sell"
                  className="w-5"
                  onChange={handleChange}
                  checked={formData.type === "sell"}
                />
                <span>Sell</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="rent"
                  className="w-5"
                  onChange={handleChange}
                  checked={formData.type === "rent"}
                />
                <span>Rent</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="parking"
                  className="w-5"
                  onChange={handleChange}
                  checked={formData.parking}
                />
                <span>Parking</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="furnished"
                  className="w-5"
                  onChange={handleChange}
                  checked={formData.furnished}
                />
                <span>Furnished</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="offer"
                  className="w-5"
                  onChange={handleChange}
                  checked={formData.offer}
                />
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
                  onChange={handleChange}
                  defaultValue={formData.bedrooms}
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
                  onChange={handleChange}
                  defaultValue={formData.bathrooms}
                />
                <span>Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  className="p-3 border border-gray-300 rounded-lg "
                  type="number"
                  id="regularPrize"
                  min="500"
                  max="1000000"
                  required
                  onChange={handleChange}
                  defaultValue={formData.regularPrize}
                />
                <span>Regular Prize (INR)</span>
              </div>
              {formData.offer ? (
                <div className="flex items-center gap-2">
                  <input
                    className="p-3 border border-gray-300 rounded-lg "
                    type="number"
                    id="discountPrize"
                    min="0"
                    max="1000000"
                    required
                    onChange={handleChange}
                    defaultValue={formData.discountPrize}
                  />
                  <span>Discounted Prize (INR)</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex max-700px:w-screen gap-2 flex-1 flex-col">
            <p className="font-semibold ">
              Images:
              <span className="font-normal text-gray-600 ml-2">
                This image will be the cover
              </span>
            </p>
            <div className="flex p-1 bg-gray-400 flex-wrap max-700px:justify-around items-center max-700px:w-full">
              {images.map((items, index) => {
                return (
                  <div key={index} className="w-1/2">
                    <div
                      style={{ padding: "3px" }}
                      className={
                        SelectedImg.includes(index) ? "bg-green-600 " : ""
                      }
                    >
                      <img
                        className="h-auto w-auto "
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
        <button
          type="submit"
          className="mx-auto self-start bg-Gold font-semibold font-sans p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Creating..." : "Create Listing"}
        </button>
      </form>
    </main>
  );
}
