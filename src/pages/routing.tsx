import { Route, Routes } from "react-router-dom";
import { AddQuiz } from "./addQuiz/AddNewQuiz.page";
import { QuizPage } from "./quiz/Quiz.page";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />
      <Route path="1" element={<AddQuiz />} />
    </Routes>
  );
};
