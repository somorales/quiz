import React from "react";
import Quiz from "./Quiz";

// arrow function
const miFuncionArrow = () => {
  console.log("arrow function");
};

// traditional function with name
function miFuncionTradicional() {
  console.log("mi función tradicional");
}

function multiplicarPorDos(numero) {
  return numero * 2;
}

const multiplicarPorTres = (numero) => {
  return numero * 3;
};

const multiplicarPorCuatro = (numero) => numero * 4;

export default function QuizList(props) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4  mb-4">
        {props.allQuiz.map((eachQuiz, index) => {
          return (
            <Quiz
              key={eachQuiz.id}
              eachQuiz={eachQuiz}
              onAnswerSelected={props.onAnswerSelected}
              isFlipped={props.isFlipped}
              userHasFlippedQuiz={props.userHasFlippedQuiz}
              setUserHasFlippedQuiz={props.setUserHasFlippedQuiz}
              // usamos ternario para cubrir correctamente el prop colors que es un prop opcional
              // cuando no recibimos colors entonces usamos por defecto bg-white
              color={
                props.colors !== undefined && props.colors.length > 0
                  ? props.colors[index]
                  : "bg-white"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
