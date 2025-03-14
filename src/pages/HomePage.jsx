import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ask from "../assets/images/Ask.png";

export default function HomePage(props) {
  if (props.quizesWithAnswer.length > 0) {
    return <Navigate to="/game" />;
  }

  return (
    <div className="flex flex-col items-center absolute  w-full px-[13.75rem]  bg-[#E2DCCE] p-4">
      <div className="max-w-md w-full flex flex-col items-center space-y-4">
        <div className="flex items-end space-x-2">
          <h1 className="text-4xl font-bold text-amber-800 text-center">
            What would I choose
          </h1>
          <div className="text-6xl text-amber-800 mb-2">
            <img src={ask} className="w-64 h-auto" />
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-amber-800 mt-2">
          Think You Know Yourself
        </h2>

        <div className="mt-12 text-amber-800 text-xl">Let see!</div>
        <Link
          to="/game"
          className="bg-[#78AFA9] rounded-full hover:bg-[#FFC045] hover:border-[#065471]  hover:text-[#065471]    px-3.5 py-2.5 shadow-sm  font-bold text-black text-center"
        >
          Get Start
        </Link>
      </div>
    </div>
  );
}
