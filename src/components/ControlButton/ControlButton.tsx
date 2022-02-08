import { chooseCurrentQuestion } from "services/questionsThunk";
import { setCurrentContent } from "store/reducers/questionsSlice";
import { DynamicContentTypes } from "types/model";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import { ControlButtonStyled } from "./ControlButton.styled";

export const ControlButton = () => {
  const dispatch = useAppDispatch();
  const { currentContent } = useAppSelector((state) => state.questions);

  const Buttons: Record<DynamicContentTypes, JSX.Element> = {
    questions: (
      <button
        type="button"
        onClick={() => dispatch(setCurrentContent("answers"))}
      >
        🎯 SHOW ANSWERS
      </button>
    ),

    answers: (
      <button
        type="button"
        onClick={() => dispatch(setCurrentContent("explanation"))}
      >
        🚀 SHOW EXPLANATION
      </button>
    ),

    explanation: (
      <button type="button" onClick={() => dispatch(chooseCurrentQuestion())}>
        ⚔️ NEXT QUESTION
      </button>
    ),
  };

  return <ControlButtonStyled>{Buttons[currentContent]}</ControlButtonStyled>;
};
