import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import home from "../assets/images/home.png";

export default function HomePage(props) {
  if (props.quizesWithAnswer.length > 0) {
    return <Navigate to="/game" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#E2DCCE] px-[13.75rem] p-4">
      <div className="flex-grow flex justify-top flex-col items-center">
        <div className="max-w-md w-full flex flex-col items-center ">
          <div className="pb-24 pt-28">
            <img src={home} className="w-[68rem] h-auto" />
          </div>
        </div>

        <div className=" pb-8 text-[#7A2B01] text-xl">Let see!</div>
        <Link
          to="/game"
          className="bg-[#78AFA9]  border border-solid border-black rounded-full hover:bg-[#AB4826]  hover:text-[#E2DCCE] px-3.5 py-2.5 shadow-sm w-80 font-bold text-black text-center"
        >
          Get Start
        </Link>
      </div>
    </div>
  );
}
