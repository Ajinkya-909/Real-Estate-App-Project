import React, { useState } from "react";
import Messenger from "../components/messenger";

export default function About() {
  const [contact, setContact] = useState(false);
  return (
    <div>
      {contact ? (
        <Messenger />
      ) : (
        <button
          onClick={() => setContact(true)}
          className="bg-black p-3 text-center cursor-pointer text-Off_White font-sans font-semibold"
        >
          Contact
        </button>
      )}
    </div>
  );
}
