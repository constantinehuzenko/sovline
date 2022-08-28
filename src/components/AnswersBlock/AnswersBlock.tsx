/* eslint-disable react/no-danger */
import { ControlButton } from "components/ControlButton/ControlButton";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { data } from "store/data";
import {
  AnswersContainer,
  AnswersItem,
  ListOfAnswers,
} from "./AnswersBlock.styled";

const addWrong = (id: string) => {
  const getLocalStore = localStorage.getItem("HackYI_APP_wrong");
  const parseLocalStore = getLocalStore && JSON.parse(getLocalStore);

  if (parseLocalStore) {
    localStorage.setItem(
      "HackYI_APP_wrong",
      JSON.stringify([...parseLocalStore, id])
    );
  } else {
    localStorage.setItem("HackYI_APP_wrong", JSON.stringify([id]));
  }
};

export const AnswersBlock = () => {
  const [isCorrectVisible, setIsCorrectVisible] = useState(false);
  const [searchParams] = useSearchParams();

  const elementIndex = Number(searchParams.get("currentQuestion"));
  const currentQuestion = data[elementIndex as number];
  const currentContent = searchParams.get("currentContent");

  return (
    <AnswersContainer>
      <ListOfAnswers>
        {currentContent === "answer" &&
          currentQuestion?.testVariants?.map((el) => (
            <AnswersItem
              isVisible={isCorrectVisible}
              isCorrect={el.isCorrect}
              key={el.text}
            >
              <button
                type="button"
                onClick={() => {
                  if (!el.isCorrect) {
                    addWrong(currentQuestion.id);
                  }
                  setIsCorrectVisible(true);
                }}
              >
                {isCorrectVisible && (el.isCorrect ? "👍 " : "💩 ")}
                <span dangerouslySetInnerHTML={{ __html: el.text || "" }} />
              </button>
            </AnswersItem>
          ))}
        <ControlButton />
      </ListOfAnswers>
    </AnswersContainer>
  );
};
