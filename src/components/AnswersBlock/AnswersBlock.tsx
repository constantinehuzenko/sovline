/* eslint-disable react/no-danger */
import { ControlButton } from "components/ControlButton/ControlButton";
import { switchCorrectVisability } from "store/reducers/questionsSlice";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";
import {
  AnswersContainer,
  AnswersItem,
  ListOfAnswers,
} from "./AnswersBlock.styled";

export const AnswersBlock = () => {
  const dispatch = useAppDispatch();
  const { currentQuestion, currentContent, isCorrectVisible } = useAppSelector(
    (state) => state.questions
  );

  return (
    <AnswersContainer>
      <ListOfAnswers>
        {currentContent === "answers" &&
          currentQuestion?.testVariants?.map((el) => (
            <AnswersItem
              isVisible={isCorrectVisible}
              isCorrect={el.isCorrect}
              key={el.text}
            >
              <button
                type="button"
                onClick={() => dispatch(switchCorrectVisability(true))}
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
