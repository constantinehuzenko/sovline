import { Route, Routes } from "react-router-dom";
import { QuizPage } from "./quiz/Quiz.page";
import { SetsList } from "./setsList/SetsList.page";
import { WrongAnswers } from "./wrongAnswers/WrongAnswers.page";
import { AddQuiz } from "./addQuiz/AddNewQuiz.page";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/add" element={<AddQuiz />} />
      <Route path="/" element={<SetsList />} />
      <Route path="/wrong-answers" element={<WrongAnswers />} />
    </Routes>
  );
};
