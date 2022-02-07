import { chooseCurrentQuestion } from "services/questionsThunk";
import { setCurrentContent } from "store/reducers/questionsSlice";
import styled from "styled-components";
import { DynamicContentTypes } from "types/model";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";

const ControlButtonStyled = styled.li`
  height: 48px;
  margin: 8px 0;
  list-style: none;
  user-select: none;
  > button {
    padding: 12px;
    text-align: left;
    color: white;
    background: #192434;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    border: 0;
    box-shadow: 0 0 1px 2px #2600ff;
  }
`;

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
