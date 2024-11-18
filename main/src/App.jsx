import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sign_In from "./pages/Sign_In";
import ProfileUpdate from "./pages/ProfileUpdate";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Sign_Up from "./pages/Sign_Up";
import PrivateRoutes from "./components/PrivateRoutes";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
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
            <Route path="/profile-update" element={<ProfileUpdate />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route
              path="/update-listing/:listingId"
              element={<UpdateListing />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
