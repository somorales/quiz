import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <header>
      <nav className="bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <span className="sr-only">logo</span>
            <img alt="" src={logo} className="h-8 xl:h-28 w-auto" />
          </Link>
          <div className="flex flex-row justify-between gap-8 text-xl">
            <Link
              to="/playGuide"
              className="text-[#065471] hover:text-[#053E53] hover:font-bold"
            >
              Play Guide
            </Link>

            <Link
              to="/answers"
              className="text-[#065471] hover:text-[#053E53] hover:font-bold"
            >
              Answers
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
