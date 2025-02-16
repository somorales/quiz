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
      <div className="bg-[#FFC045] text-center text-[#053E53] py-16 flex flex-col items-center">
        <div className="flex flex-col items-center"></div>
        <h3 className="text-5xl font-semibold mb-4 text-[#053E53] ">
          Your Answered {quizesWithAnswer.length} quizes
        </h3>

        <QuizList allQuiz={currentQuizzes} isFlipped={true} />
        <div className="flex gap-4 mt-4">
          {page > 0 && (
            <button
              onClick={handlePrevPage}
              className="bg-[#065471] border-2 border-[#FFC045] rounded-3xl hover:bg-[#FFC045] hover:border-[#065471] hover:text-[#065471] px-3.5 py-2.5 shadow-sm w-40 font-bold text-white text-center"
            >
              Previous
            </button>
          )}
          {endIndex < quizesWithAnswer.length && (
            <button
              onClick={handleNextPage}
              className="bg-[#065471] border-2 border-[#FFC045] rounded-3xl hover:bg-[#FFC045] hover:border-[#065471]  hover:text-[#065471]    px-3.5 py-2.5 shadow-sm w-80 font-bold text-white text-center"
            >
              next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
