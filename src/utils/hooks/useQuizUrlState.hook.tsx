/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "store/data";
import { DynamicContentTypesArr } from "types/model";

export const useQuizUrlState = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuestionValid = searchParams.get("currentQuestion");
  const currentQuestionIndex = Number(searchParams.get("currentQuestion"));
  const currentQuestion = data[currentQuestionIndex as number];
  const currentContent = searchParams.get("currentContent");
  const [isStateValid, setIsStateValid] = useState(true);

  useEffect(() => {
    // @ts-ignore
    if (!DynamicContentTypesArr.includes(currentContent)) {
      setIsStateValid(false);
      return;
    }
    if (!currentQuestionValid) {
      setIsStateValid(false);
      return;
    }

    setIsStateValid(true);
  }, [currentQuestionValid, currentContent]);

  const setParams = (param: string | null, value: string | null) => {
    if (!param || !value) {
      return;
    }
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  return {
    currentQuestion,
    currentContent,
    currentQuestionIndex,
    setParams,
    isStateValid,
  };
};
