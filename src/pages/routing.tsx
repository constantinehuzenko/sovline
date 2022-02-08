import { Route, Routes } from "react-router-dom";
import { QuizPage } from "./quiz/Quiz.page";

const Some = () => <div>page in work now</div>;

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />
      <Route path="addNewQuestion" element={<Some />} />
    </Routes>
  );
};
