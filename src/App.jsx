import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import PlayGuide from "./pages/PlayGuide";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="playguide" element={<PlayGuide />} />
      </Routes>
      <Footer />
    </>
  );
}
