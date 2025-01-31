import React from "react";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

export default function Quiz(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFlipped, setIsFlippled] = useState(false);

  function flipCard() {
    setIsFlippled(!isFlipped);
  }

  return (
    <div>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div className="bg-white w-48 h-48" onClick={flipCard}></div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-medium font-bold mb-4">
            {props.eachQuiz.question}
          </h2>
          <ul className="space-y-2">
            {[
              props.eachQuiz.answer1,
              props.eachQuiz.answer2,
              props.eachQuiz.answer3,
            ].map((answer, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg shadow-md cursor-pointer ${
                  selectedAnswer === answer
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => setSelectedAnswer(answer)}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      </ReactCardFlip>
    </div>
  );
}
