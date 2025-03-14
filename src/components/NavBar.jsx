import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <header>
      <nav className="bg-[#E2DCCE] ">
        <div className="px-[13.75rem]  py-4 mx-auto flex justify-between items-center">
          <Link to="/">
            <span className="sr-only">logo</span>
            <img alt="" src={logo} className="h-[4rem] w-auto" />
          </Link>
          <div className="flex flex-row justify-between gap-12 text-xl">
            <Link
              to="/answers"
              className="text-[#AB4826] text-2xl font-bold drop-shadow-[1px_1px_0px_black] hover:text-[#78AFA9] hover:font-extrabold"
            >
              Answers
            </Link>
            <Link
              to="/playGuide"
              className="text-[#AB4826] text-2xl font-bold drop-shadow-[1px_1px_0px_black] hover:text-[#78AFA9] hover:font-extrabold"
            >
              Play Guide
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
