import React from "react";

export default function PlayGuide() {
  return (
    <div>
      <div className="bg-[#E2DCCE] text-center  py-8 flex flex-col items-center min-h-screen ">
        <div className="mx-auto    py-16 max-w-container px-6 sm:px-8 lg:px-48">
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="lg:w-2/3 space-y-6">
              <p className="text-2xl font-semibold text-[#7A2B01]">
                Hello there! Welcome to...
              </p>
              <h1 className="text-5xl font-black mb-8 text-[#AB4826]">
                What would I choose?
              </h1>

              <h3 className="text-lg mb-6 text-[#7A2B01]">
                That's the beginning of this super fun question game where you
                can check if your favorite people really know you well. Start by
                shuffling the 90 cards you'll find inside, and then, taking
                turns, each person must draw one and read the question and the
                three answer options it contains out loud. Without saying it,
                they'll have to choose the answer that best matches their tastes
                and personality, and the others will have to guess which one it
                is. Will you be able to put yourself in their shoes and figure
                out their choice? Let's see!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
