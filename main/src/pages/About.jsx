import React, { useState } from "react";
import Messenger from "../components/messenger";
import Logo from "../assets/images/icons/logo-design.png";

export default function About() {
  const [contact, setContact] = useState(false);
  return (
    <>
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-500px:flex-col-reverse flex justify-around items-center">
            <span>
              <h1 className="text-4xl font-bold text-gray-800">
                About Royal Estate's
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Where Luxury Meets Technology.
              </p>
            </span>
            <div>
              <img className="h-52 rounded-full " src={Logo} alt="" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-gray-700 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Key Features
              </h2>
              <p>
                Royal Estate's is a modern real estate platform built to
                streamline the process of property management and transactions.
                It offers:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  User Authentication: Secure login and registration system for
                  users.
                </li>
                <li>
                  Property Listings: Create, view, and manage property listings
                  effortlessly.
                </li>
                <li>Update Features: Edit listings to keep them up-to-date.</li>
                <li>
                  Advanced Search: Filter listings by location, price, and more.
                </li>
                <li>Responsive Design: Seamlessly accessible on any device.</li>
              </ul>
              <p>
                This platform is built using the MERN stack, ensuring high
                performance and scalability for a seamless experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Pros & Cons
              </h2>
              <div className="mt-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-green-600">Pros</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Highly secure user authentication.</li>
                    <li>Clean and intuitive user interface.</li>
                    <li>Responsive design for mobile and desktop.</li>
                    <li>Feature-rich property listing options.</li>
                    <li>Easy-to-update property information.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-600">Cons</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Limited third-party integrations at present.</li>
                    <li>Requires constant maintenance for scalability.</li>
                    <li>Advanced analytics features not yet available.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              Future Enhancements
            </h2>
            <p className="mt-4 text-gray-700">
              At Royal Estate's, we are committed to continuous improvement.
              Future updates may include:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
              <li>Feature to contact Landloards</li>
              <li>
                Integration with payment gateways for seamless transactions.
              </li>
              <li>AI-powered property recommendations.</li>
              <li>Enhanced analytics and reporting tools for sellers.</li>
              <li>Integration with AR/VR for virtual property tours.</li>
              <li>Chatbots for instant customer assistance.</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Stay tuned for more updates as we strive to make your experience
              even better.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6 p-4">
          {contact ? (
            <Messenger />
          ) : (
            <button
              onClick={() => setContact(true)}
              className="bg-black mx-auto p-3 text-center rounded-2xl cursor-pointer text-Off_White font-sans font-semibold"
            >
              Contact
            </button>
          )}
          {contact ? (
            <button
              onClick={() => setContact(false)}
              className="bg-red-700 text-white font-bold p-2 rounded-md h-[50px]"
            >
              X
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
