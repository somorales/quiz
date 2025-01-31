import React from "react";
import { useState } from "react";
import quiz from "../quiz.json";
import QuizList from "../components/QuizList";

export default function Game() {
  const [allQuiz, setAllQuiz] = useState(quiz);

  return (
    <div>
      <div className="bg-[#FFC045] text-center text-[#053E53] py-16 flex flex-col items-center">
        <div className="flex flex-col items-center"></div>
        <h3 className="text-5xl font-semibold mb-4 text-[#053E53] ">
          Find your question!
        </h3>
        <p className="mt-2 text-pretty text-lg font-medium text-[#065471]">
          Press start and then stop!
        </p>
        <QuizList allQuiz={allQuiz} setAllQuiz={setAllQuiz} />
        <button className="bg-[#065471] border-2 border-[#FFC045] rounded-3xl hover:bg-[#FFC045] hover:border-[#065471]  hover:text-[#065471]    px-3.5 py-2.5 shadow-sm w-80 font-bold text-white text-center">
          start
        </button>
      </div>
    </div>
  );
}
