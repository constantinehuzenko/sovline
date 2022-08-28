/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DynamicContentTypes, IQuestionItem, IStore } from "types/model";

const initialState: IStore["questions"] = {
  list: {
    ua: null,
    en: null,
  },
  currentQuestion: null,
  currentContent: "question",
  openResetModal: false,
  isCorrectVisible: false,
  listLength: 0,
  alreadyWatchedLength: 0,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Array<IQuestionItem>>) => {
      state.list = { ua: null, en: action.payload };
    },
    setCurrentQuestion: (state, action: PayloadAction<IQuestionItem>) => {
      state.currentQuestion = action.payload;
    },
    setCurrentContent: (state, action: PayloadAction<DynamicContentTypes>) => {
      state.currentContent = action.payload;
    },
    switchResetModal: (state, action: PayloadAction<boolean>) => {
      state.openResetModal = action.payload;
    },
    switchCorrectVisability: (state, action: PayloadAction<boolean>) => {
      state.isCorrectVisible = action.payload;
    },
    setLengths: (
      state,
      action: PayloadAction<{
        listLength: number;
        alreadyWatchedLength: number;
      }>
    ) => {
      state.listLength = action.payload.listLength;
      state.alreadyWatchedLength = action.payload.alreadyWatchedLength;
    },
  },
});

export const {
  setQuestions,
  setCurrentQuestion,
  setCurrentContent,
  switchResetModal,
  switchCorrectVisability,
  setLengths,
} = questionsSlice.actions;

export default questionsSlice.reducer;
