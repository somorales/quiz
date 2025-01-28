import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
  <>
  <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    
  </>
  )
}
