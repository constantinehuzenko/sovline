import { useSearchParams } from "react-router-dom";
import { data } from "store/data";

export const useQuizUrlState = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuestionIndex = Number(searchParams.get("currentQuestion"));
  const currentQuestion = data[currentQuestionIndex as number];
  const currentContent = searchParams.get("currentContent");

  const setParams = (param: string | null, value: string | null) => {
    if (!param || !value) {
      setSearchParams("");
      return;
    }
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  return { currentQuestion, currentContent, currentQuestionIndex, setParams };
};
