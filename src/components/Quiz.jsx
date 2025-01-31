import React from "react";

export default function Quiz(props) {
  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-medium font-bold mb-4">
          {props.eachQuiz.question}
        </h2>
        <ul className="space-y-2">
          <li className="bg-white p-4 rounded-lg shadow-md">
            {props.eachQuiz.answer1}
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            {props.eachQuiz.answer2}
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            {props.eachQuiz.answer3}
          </li>
        </ul>
      </div>
    </div>
  );
}
