import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import quiz from "./quiz.json";

//Pages
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import PlayGuide from "./pages/PlayGuide";
import Footer from "./components/Footer";
import Game from "./pages/Game";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  const [quizesWithoutAnswer, setQuizesWithoutAnswer] = useState(quiz);
  const [quizesWithAnswer, setQuizesWithtAnswer] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="game"
          element={
            <Game
              quizesWithoutAnswer={quizesWithoutAnswer}
              setQuizesWithoutAnswer={setQuizesWithoutAnswer}
              quizesWithAnswer={quizesWithAnswer}
              setQuizesWithtAnswer={setQuizesWithtAnswer}
            />
          }
        />
        <Route path="playguide" element={<PlayGuide />} />
        <Route
          path="answers"
          element={
            <ResultsPage
              quizesWithAnswer={quizesWithAnswer}
              setQuizesWithtAnswer={setQuizesWithtAnswer}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
