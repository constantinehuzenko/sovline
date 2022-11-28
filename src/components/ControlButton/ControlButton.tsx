import { useNavigate } from "react-router-dom";
import { DynamicContentTypes } from "types/model";
import { useQuizUrlState } from "utils/hooks/useQuizUrlState.hook";
import { ControlButtonStyled } from "./ControlButton.styled";

export const ControlButton = ({
  handleIsCorrectVisible,
}: {
  // eslint-disable-next-line react/require-default-props
  handleIsCorrectVisible?: () => void;
}) => {
  const { setParams, currentContent, currentQuestionIndex } = useQuizUrlState();
  const navigate = useNavigate();

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
          if (currentQuestionIndex < 50) {
            setParams("currentQuestion", (currentQuestionIndex + 1).toString());
            setParams("currentContent", "question");
            handleIsCorrectVisible?.();
            localStorage.setItem(
              "sovline_app_last",
              JSON.stringify(currentQuestionIndex + 1)
            );
          } else {
            navigate("/wrong-answers");
          }
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
