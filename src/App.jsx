import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sign_In from "./pages/Sign_In";
import Sign_Out from "./pages/Sign_Out";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<Sign_In />} />
          <Route path="/sign-out" element={<Sign_Out />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
