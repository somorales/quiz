import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className=" min-h-[400px] flex justify-center bg-[#FFC045] ">
      <div  className="bg-[#FFC95F] rounded-3xl shadow-lg  shadow-[#065471] max-w-2xl p-32 mb-20 mt-12 space-y-8 border-1 border-[#065471]" >
        <div className="space-y-6 text-center " >
            <div>
              <h1 className="text-balance text-5xl font-bold tracking-tight text-[#065471] sm:text-7xl pl-[1.5rem]">
                Which One Am I?
              </h1>
            </div>
            <h3 className="mt-8 text-pretty text-2xl font-semibold text-[#065471]">
              Think You Know Yourself? Answer These 90 Questions and See!
            </h3>

            <p className="mt-8 text-pretty text-base font-medium text-[#065471]">
              Are you ready?
            </p>
            <div className="my-10 flex flex-col items-center justify-center gap-2">
              <Link
                to="/game"
                className="bg-[#065471] border-2 border-[#FFC045] rounded-3xl hover:bg-[#FFC045] hover:border-[#065471]  hover:text-[#065471]    px-3.5 py-2.5 shadow-sm w-80 font-bold text-white text-center"
              >
                Get Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}
