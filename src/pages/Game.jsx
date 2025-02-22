import React from "react";
import QuizList from "../components/QuizList";
import { useState } from "react";

// el tamaño de colors tiene que ser igual o menor que el slice de quizes que se muestra
const listColors = [
  "bg-[#FFC567]",
  "bg-[#FC7DA8]",
  "bg-[#FD5B47]",
  "bg-[#552CB8]",
  "bg-[#009A5E]",
  "bg-[#058CD6]",
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
    //destructuring
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
      <div className="bg-[#F1EAE0] text-center text-[#053E53] py-16 flex flex-col items-center">
        <div className="flex flex-col items-center"></div>
        <h3 className="text-5xl font-semibold mb-4 text-[#053E53] ">
          Find your question!
        </h3>
        <p className="mt-2 text-pretty mb-4 text-lg font-medium text-[#065471]">
          Press start and then stop!
        </p>
        <QuizList
          allQuiz={quizesWithoutAnswer.slice(0, 6)}
          onAnswerSelected={onAnswerSelected}
          userHasFlippedQuiz={userHasFlippedQuiz}
          setUserHasFlippedQuiz={setUserHasFlippedQuiz}
          colors={colors}
        />

        <button
          onClick={shuffleDeck}
          className="bg-[#697BBB] border-2 border-white rounded-3xl hover:bg-[#FFC045] hover:border-[#065471]  hover:text-[#065471]    px-3.5 py-2.5 shadow-sm w-80 font-bold text-white text-center"
        >
          Shuffle
        </button>
      </div>
    </div>
  );
}
