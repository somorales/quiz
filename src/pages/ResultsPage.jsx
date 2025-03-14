import React from "react";
import QuizList from "../components/QuizList";
import { useState } from "react";

export default function ResultsPage(props) {
  const { quizesWithAnswer } = props;
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentQuizzes = quizesWithAnswer.slice(startIndex, endIndex);
  const handleNextPage = () => {
    if (endIndex < quizesWithAnswer.length) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  return (
    <div>
      <div className="bg-[#E2DCCE] text-center min-h-screen  py-8 flex flex-col items-center">
        <div className="flex flex-col items-center"></div>
        <h3 className="text-3xl font-semibold mb-4 text-[#7A2B01]  ">
          Your Answered {quizesWithAnswer.length} quizes!
        </h3>

        <QuizList allQuiz={currentQuizzes} isFlipped={true} />
        <div className="flex gap-4 mt-4">
          {page > 0 && (
            <button
              onClick={handlePrevPage}
              className=" mt-8 bg-[#78AFA9]  border border-solid border-black rounded-full hover:bg-[#AB4826]  hover:text-[#E2DCCE] px-3.5 py-2.5 shadow-sm w-80 font-bold text-black text-center"
            >
              Previous
            </button>
          )}
          {endIndex < quizesWithAnswer.length && (
            <button
              onClick={handleNextPage}
              className=" mt-8 bg-[#78AFA9]  border border-solid border-black rounded-full hover:bg-[#AB4826]  hover:text-[#E2DCCE] px-3.5 py-2.5 shadow-sm w-80 font-bold text-black text-center"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
