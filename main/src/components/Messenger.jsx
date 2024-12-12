import { useState } from "react";
import { Link } from "react-router-dom";

export default function Messenger() {
  const [message, setmessage] = useState("");
  const ChangeMessage = (e) => {
    setmessage(e.target.value);
  };
  return (
    <div className="flex flex-col w-4/5 max-700px:w-full mx-auto items-center justify-around gap-4">
      <span className="font-semibold text-lg">Contact Developer</span>
      <textarea
        className="w-full border border-gray-500 p-3 rounded-lg"
        name="message"
        id="message"
        value={message}
        onChange={ChangeMessage}
        placeholder="Type Your message here!"
      ></textarea>
      <Link
        className="bg-black p-3 text-center rounded-lg cursor-pointer text-Off_White font-sans font-semibold"
        to={`mailto:ajinkyadeshmukh8686@gmail.com?subject=Regarding RealEstate Project Review&body=${message}`}
      >
        Send Message
      </Link>
    </div>
  );
}
