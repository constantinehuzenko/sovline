import { useSearchParams } from "react-router-dom";
import { data } from "store/data";
import { DynamicContentTypes } from "types/model";
import { ControlButtonStyled } from "./ControlButton.styled";

export const ControlButton = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentContent = searchParams.get("currentContent");
  // searchParams.set()

  const elementIndex = Number(searchParams.get("currentQuestion"));
  // const currentQuestion = data[elementIndex as number];

  const Buttons: Record<DynamicContentTypes, JSX.Element> = {
    question: (
      <button
        type="button"
        onClick={() => {
          searchParams.set("currentContent", "answer");
          setSearchParams(searchParams);
        }}
      >
        🎯 SHOW ANSWERS
      </button>
    ),

    answer: (
      <button
        type="button"
        onClick={() => {
          searchParams.set("currentContent", "explanation");
          setSearchParams(searchParams);
        }}
      >
        🚀 SHOW EXPLANATION
      </button>
    ),

    explanation: (
      <button
        type="button"
        onClick={() => {
          searchParams.set("currentQuestion", (elementIndex + 1).toString());
          searchParams.set("currentContent", "question");
          setSearchParams(searchParams);
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
