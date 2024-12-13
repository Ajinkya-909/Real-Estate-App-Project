import React, { useState, useEffect } from "react";
import "../index.css";
import Image1 from "../assets/images/Image1.jpeg";
import Image2 from "../assets/images/Image15.jpg";
import Image3 from "../assets/images/Image3.jpeg";
import Image4 from "../assets/images/Image16.png";
import Image5 from "../assets/images/Image5.jpeg";
import Image6 from "../assets/images/Image6.jpeg";
import { Link } from "react-router-dom";

export default function Slider() {
  const [slides, setslides] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  const arrows = [">", "<"];

  useEffect(() => {
    const interval = setInterval(() => {
      if (slides === images.length - 1) {
        setslides(0);
      } else {
        setslides(slides + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [slides]);

  const handleNext = () => {
    if (slides === images.length - 1) {
      setslides(0);
    } else {
      setslides(slides + 1);
    }
  };
  const handlePrevious = () => {
    if (slides < 0) {
      setslides(images.length - 1);
    } else {
      setslides(slides - 1);
    }
  };
  return (
    <>
      <div className="border-4 relative w-11/12 p-5 mt-4 m-auto flex justify-evenly items-center max-1000px:flex-col">
        <div
          style={{
            backgroundImage: `url("${images[slides]}")`,
            filter: "blur(10px)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            inset: "0px",
          }}
          className={"transition m-3 absolute inset-0 "}
        ></div>
        <div className="z-10 backdrop-blur-xl bg-Off_White/30 rounded-3xl p-3 text-center h-full w-2/5  max-1000px:w-4/5 ">
          <h2 className="my-2 font-serif font-medium text-3xl">Welcome to</h2>

          <h1 className="my-2 poppins-bold text-5xl font-bold">
            <span className=" text-Gold text-shadow ">Royal </span>
            <span className=" text-Gold text-shadow ">Estate's</span>
          </h1>

          <p className="my-2 font-sans text-left">
            Royal Estate's showcases an exclusive collection of high-end
            properties designed to captivate, each featuring grand architecture,
            exquisite interiors, and top-tier amenities that embody
            sophistication and style. Explore stunning estates, navigate through
            interactive designs, and witness the seamless blend of elegance and
            technology that defines this project. This project combines
            aesthetics with functionality, crafted to provide an immersive
            journey that highlights both the beauty of the estates and the power
            of the technology behind it.
          </p>
          <div className="max-500px:flex-col gap-2 flex justify-around p-2 items-center">
            <Link to="/sign-up">
              <button className="p-2 bg-Gold rounded-lg poppins-semibold text-xl text-center ">
                Try Now!
              </button>
            </Link>
            <Link to="/about">
              <button className="p-2 bg-black rounded-lg text-white poppins-semibold text-xl text-center ">
                Learn More . . .
              </button>
            </Link>
          </div>
        </div>
        <div className="z-10  relative max-700px:hidden">
          <div className=" z-50 mt-48 max-700px:mt-36 max-500px:mt-12 m-auto flex justify-between gap-5 w-full absolute ">
            <button
              onClick={handlePrevious}
              className="z-50 rounded-lg m-10 max-700px:m-5 font-sans font-bold text-2xl text-center  opacity-80 hover:opacity-100 bg-white h-16 w-7"
            >
              {arrows[1]}
            </button>
            <button
              onClick={handleNext}
              className="z-50 rounded-lg m-10 max-700px:m-5 font-sans font-bold text-2xl text-center  opacity-80 hover:opacity-100 bg-white h-16 w-7"
            >
              {arrows[0]}
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url(${images[slides]}`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            className="p-9 rounded-xlg max-500px:h-[50vh] max-1000px:w-[80vw] h-[calc(100vh/1.5)] w-[calc(100vw/2)] z-10 max-700px:p-0 object-contain transition  "
          ></div>
        </div>
      </div>
    </>
  );
}
