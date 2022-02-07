import { data } from "store/data";
import {
  setCurrentContent,
  setCurrentQuestion,
  setQuestions,
  switchCorrectVisability,
  switchResetModal,
} from "store/reducers/questionsSlice";
import { AppDispatch, RootState } from "store/store";
import { IQuestionItem } from "types/model";
import { randomNumber } from "utils/randomNumber";

const APP_NAME = "HYI_APP";

const checkCurrentQuestion = (
  watchedList: Array<IQuestionItem>,
  randomQuestion: IQuestionItem
) =>
  watchedList.map((el) =>
    el.id === randomQuestion.id ? { ...el, watched: true } : el
  );

export const setLocalStore = () => (dispatch: AppDispatch) => {
  dispatch(setQuestions(data));
  localStorage.setItem(APP_NAME, JSON.stringify(data));
};

export const chooseCurrentQuestion =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(switchCorrectVisability(false));

    const questionsList = getState().questions.list.ru;
    const watchedList = questionsList?.filter((question) => !question.watched);
    const watchedListLength = watchedList?.length;

    if (!!watchedListLength && watchedList && questionsList) {
      const random = randomNumber(0, watchedListLength - 1);
      const randomQuestion = watchedList?.[random];

      dispatch(setQuestions(checkCurrentQuestion(watchedList, randomQuestion)));
      dispatch(setCurrentQuestion(randomQuestion));
      dispatch(setCurrentContent("questions"));
      localStorage.setItem(
        APP_NAME,
        JSON.stringify(checkCurrentQuestion(questionsList, randomQuestion))
      );

      dispatch(switchResetModal(false));
      return;
    }
    dispatch(setLocalStore());
    dispatch(switchResetModal(true));
  };

export const syncReduxAndLocalStore = () => (dispatch: AppDispatch) => {
  const getLocalStore = localStorage.getItem(APP_NAME);
  const parseLocalStore = getLocalStore && JSON.parse(getLocalStore);

  if (parseLocalStore) {
    dispatch(setQuestions(parseLocalStore));
  } else {
    dispatch(setLocalStore());
  }

  dispatch(chooseCurrentQuestion());
};
