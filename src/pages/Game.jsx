import React from "react";
import QuizList from "../components/QuizList";
import { useState } from "react";

// el tamaño de colors tiene que ser igual o menor que el slice de quizes que se muestra
const listColors = [
  "bg-[#F4A7B9]",
  "bg-[#66B3E7]",
  "bg-[#E06641]",
  "bg-[#458455]",
  "bg-[#4545E5]",
  "bg-[#F7BF3D]",
];

//for(let i= 0; i<=longitud de array. lengthg; i++)---- itera los elementos de 0 hasta la longitud final= foreach
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default function Game(props) {
  const {
    quizesWithoutAnswer,
    quizesWithAnswer,
    setQuizesWithoutAnswer,
    setQuizesWithtAnswer,
  } = props;

  const [userHasFlippedQuiz, setUserHasFlippedQuiz] = useState(false);
  const [colors, setColors] = useState(listColors);

  const removeAnsweredQuiz = (quizesWithAnswer) => {
    // sacar el quiz recién respondido del array quizesWithoutAnswer
    const newQuizesWithoutAnswer = quizesWithoutAnswer.filter((quiz) => {
      // quiz NO tiene que estar en la lista quizesWithAnswer para formar parte de quizesWithoutAnswer
      let keepQuiz = true;
      for (let i = 0; i < quizesWithAnswer.length; i++) {
        if (quiz.id === quizesWithAnswer[i].id) {
          keepQuiz = false;
          break;
        }
      }
      return keepQuiz;
    });
    setQuizesWithoutAnswer(newQuizesWithoutAnswer);
  };

  const onAnswerSelected = (quiz, answerSelected) => {
    // Encontrar quiz en quizesCopy y agregarle un atributo, selected que valga answerSelected
    const newQuizesWithAnswer = [...quizesWithAnswer];
    quiz.selected = answerSelected;
    newQuizesWithAnswer.push(quiz);
    setQuizesWithtAnswer(newQuizesWithAnswer);
    removeAnsweredQuiz(newQuizesWithAnswer);
    setUserHasFlippedQuiz(false);
  };

  const shuffleDeck = () => {
    const newQuizesWithoutAnswer = [...quizesWithoutAnswer];
    shuffleArray(newQuizesWithoutAnswer);
    setQuizesWithoutAnswer(newQuizesWithoutAnswer);
    const newColors = [...colors];
    shuffleArray(newColors);
    setColors(newColors);
  };

  return (
    <div>
      <div className="bg-[#E2DCCE] text-center  py-8 flex flex-col items-center">
        <div className="flex flex-col items-center"></div>
        <h3 className="text-3xl font-semibold mb-4 text-[#7A2B01]  ">
          Find your question!
        </h3>

        <QuizList
          allQuiz={quizesWithoutAnswer.slice(0, 6)}
          onAnswerSelected={onAnswerSelected}
          userHasFlippedQuiz={userHasFlippedQuiz}
          setUserHasFlippedQuiz={setUserHasFlippedQuiz}
          colors={colors}
        />

        <button
          onClick={shuffleDeck}
          className=" mt-8 bg-[#78AFA9]  border border-solid border-black rounded-full hover:bg-[#AB4826]  hover:text-[#E2DCCE] px-3.5 py-2.5 shadow-sm w-80 font-bold text-black text-center"
        >
          Shuffle
        </button>
      </div>
    </div>
  );
}
