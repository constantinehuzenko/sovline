/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "store/data";
import { AppDispatch } from "store/store";
import { IQuestionItem, IStore, OneOfLanguageListType } from "types/model";
import { randomNumber } from "utils/randomNumber";

const initialState: IStore["questions"] = {
  list: {
    ru: null,
    en: null,
  },
  current: null,
};

const APP = "hyiApp";

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (
      state,
      action: PayloadAction<
        Record<OneOfLanguageListType, Array<IQuestionItem> | null>
      >
    ) => {
      state.list = { en: null, ru: action.payload.ru };
    },

    setCurrentQuestion: (state, action: PayloadAction<IQuestionItem>) => {
      state.current = action.payload;
    },
  },
});

export const { setQuestions, setCurrentQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;

export const setQuestionsToLocalStore = () => async (dispatch: AppDispatch) => {
  const localData = localStorage.getItem(APP);
  const parsedData = localData && JSON.parse(localData).ru;
  const nonWatchedQuestion = parsedData?.filter(
    (question: IQuestionItem) => !question.watched
  );

  if (!localData || nonWatchedQuestion.length === 0) {
    const arrayLength = data?.length;
    const randomNumberFromRange = randomNumber(0, arrayLength - 1);
    const randomQuestion = data[randomNumberFromRange];

    const setData: Record<OneOfLanguageListType, Array<IQuestionItem> | null> =
      {
        en: null,
        ru: data?.map((question: IQuestionItem) =>
          question.id === randomQuestion.id
            ? { ...question, watched: true }
            : question
        ),
      };

    localStorage.setItem(APP, JSON.stringify(setData));
    dispatch(setQuestions(setData));
    dispatch(setCurrentQuestion(randomQuestion));
  }

  if (nonWatchedQuestion.length && parsedData) {
    const arrayLength = nonWatchedQuestion?.length;
    const randomNumberFromRange: number = randomNumber(0, arrayLength - 1);
    const randomQuestion = nonWatchedQuestion[randomNumberFromRange];

    const setData: Record<OneOfLanguageListType, Array<IQuestionItem> | null> =
      {
        en: null,
        ru: parsedData?.map((question: IQuestionItem) =>
          question.id === randomQuestion.id
            ? { ...question, watched: true }
            : question
        ),
      };

    localStorage.setItem(APP, JSON.stringify(setData));
    dispatch(setQuestions(setData));
    dispatch(setCurrentQuestion(randomQuestion));
  }
};
