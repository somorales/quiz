import React from "react";
import Quiz from "./Quiz";

export default function QuizList(props) {
  return (
    <div div className="grid grid-cols-3 gap-4">
      {props.allQuiz.map((eachQuiz, index) => {
        return (
          <Quiz
            key={index}
            eachQuiz={eachQuiz}
            index={index}
            setAllQuiz={props.setAllQuiz}
          />
        );
      })}
    </div>
  );
}
