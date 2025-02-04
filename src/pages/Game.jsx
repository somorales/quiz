import React from "react";
import { useState } from "react";
import quiz from "../quiz.json";
import QuizList from "../components/QuizList";

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default function Game() {
  const [allQuizes, setAllQuizes] = useState(quiz);

  const handleNextQuiz = () => {
    //const shuffled = [...allQuizes].sort(() => Math.random() - 0.5);
    const quizesCopy = [...allQuizes];
    shuffleArray(quizesCopy);
    setAllQuizes(quizesCopy);
  };

  return (
    <div>
      <div className="bg-[#FFC045] text-center text-[#053E53] py-16 flex flex-col items-center">
        <div className="flex flex-col items-center"></div>
        <h3 className="text-5xl font-semibold mb-4 text-[#053E53] ">
          Find your question!
        </h3>
        <p className="mt-2 text-pretty mb-4 text-lg font-medium text-[#065471]">
          Press start and then stop!
        </p>
        <QuizList allQuiz={allQuizes.slice(0, 6)} />

        <button
          onClick={handleNextQuiz}
          className="bg-[#065471] border-2 border-[#FFC045] rounded-3xl hover:bg-[#FFC045] hover:border-[#065471]  hover:text-[#065471]    px-3.5 py-2.5 shadow-sm w-80 font-bold text-white text-center"
        >
          next
        </button>
      </div>
    </div>
  );
}
