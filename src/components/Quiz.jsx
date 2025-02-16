import React from "react";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

export default function Quiz(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(props.eachQuiz.selected);
  const [isFlipped, setIsFlippled] = useState(props.isFlipped);

  function flipCard() {
    if (props.userHasFlippedQuiz === false) {
      setIsFlippled(!isFlipped);
      props.setUserHasFlippedQuiz(true);
    }
  }

  function handleAnswer(quiz, answer) {
    setSelectedAnswer(answer);
    props.onAnswerSelected(quiz, answer);
  }

  return (
    <div>
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
        <div
          className={`${props.color} w-[300px] h-[300px] rounded-lg`} //si quiero meter una expresion de js tengo que usar llaves
          onClick={flipCard}
        ></div>

        <div className="bg-gray-100 p-6 rounded-lg  w-[300px] h-[300px]">
          <h2 className="font-mono text-sm font-bold mb-4">
            {props.eachQuiz.question}
          </h2>
          <ul className="space-y-2 text-sm">
            {["answer1", "answer2", "answer3"].map((answerProperty, index) => (
              <li
                key={index}
                className={`p-2 hover:bg-sky-700  rounded-lg shadow-md cursor-pointer ${
                  selectedAnswer === answerProperty
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => handleAnswer(props.eachQuiz, answerProperty)}
              >
                {props.eachQuiz[answerProperty]}
              </li>
            ))}
          </ul>
        </div>
      </ReactCardFlip>
    </div>
  );
}
