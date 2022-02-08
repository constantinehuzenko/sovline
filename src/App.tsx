import { useEffect } from "react";
import { QuizPage } from "routing/quiz/Quiz.page";
import { syncReduxAndLocalStore } from "services/questionsThunk";
import { useAppDispatch } from "utils/hooks/redux";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(syncReduxAndLocalStore());
  }, [dispatch]);

  return <QuizPage />;
};
