import { DynamicContentTypes } from "types/model";
import { useQuizUrlState } from "utils/hooks/useQuizUrlState.hook";
import { ControlButtonStyled } from "./ControlButton.styled";

export const ControlButton = () => {
  const { setParams, currentContent, currentQuestionIndex } = useQuizUrlState();

  const Buttons: Record<DynamicContentTypes, JSX.Element> = {
    question: (
      <button
        type="button"
        onClick={() => {
          setParams("currentContent", "answer");
        }}
      >
        🎯 SHOW ANSWERS
      </button>
    ),

    answer: (
      <button
        type="button"
        onClick={() => {
          setParams("currentContent", "explanation");
        }}
      >
        🚀 SHOW EXPLANATION
      </button>
    ),

    explanation: (
      <button
        type="button"
        onClick={() => {
          setParams("currentQuestion", (currentQuestionIndex + 1).toString());
          setParams("currentContent", "question");
        }}
      >
        ⚔️ NEXT QUESTION
      </button>
    ),
  };

  return (
    <ControlButtonStyled>
      {Buttons[currentContent as DynamicContentTypes]}
    </ControlButtonStyled>
  );
};
