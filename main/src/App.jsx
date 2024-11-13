import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sign_In from "./pages/Sign_In";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Sign_Up from "./pages/Sign_Up";
import PrivateRoutes from "./components/PrivateRoutes";
import CreateListing from "./pages/CreateListing";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<Sign_In />} />
          <Route path="/sign-up" element={<Sign_Up />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
