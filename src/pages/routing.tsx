import { Route, Routes } from "react-router-dom";
// import { AddQuiz } from "./addQuiz/AddNewQuiz.page";
import { QuizPage } from "./quiz/Quiz.page";
import { SetsList } from "./setsList/SetsList.page";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/quiz" element={<QuizPage />} />
      {/* <Route path="/" element={<AddQuiz />} /> */}
      <Route path="/" element={<SetsList />} />
    </Routes>
  );
};
