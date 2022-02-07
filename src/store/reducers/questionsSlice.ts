/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DynamicContentTypes, IQuestionItem, IStore } from "types/model";

const initialState: IStore["questions"] = {
  list: {
    ru: null,
    en: null,
  },
  currentQuestion: null,
  currentContent: "questions",
  openResetModal: false,
  isCorrectVisible: false,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Array<IQuestionItem>>) => {
      state.list = { en: null, ru: action.payload };
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
  },
});

export const {
  setQuestions,
  setCurrentQuestion,
  setCurrentContent,
  switchResetModal,
  switchCorrectVisability,
} = questionsSlice.actions;

export default questionsSlice.reducer;
