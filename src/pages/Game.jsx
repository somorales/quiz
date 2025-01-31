import React from "react";
import { useState } from "react";

import quiz from "../quiz.json";
import QuizList from "../components/QuizList";

export default function Game() {
  const [allQuiz, setAllQuiz] = useState(quiz);

  return (
    <div className="bg-[#FFC045] text-center text-[#053E53] py-16 flex flex-col items-center">
      <div className="flex flex-col items-center"></div>
      <h3 className="text-5xl font-semibold mb-4 text-[#053E53] ">
        Find your question!
      </h3>
      <p className="mt-2 text-pretty text-lg font-medium text-[#065471]">
        Press start and then stop!
      </p>
      <QuizList allQuiz={allQuiz} setAllQuiz={setAllQuiz} />
    </div>
  );
}
