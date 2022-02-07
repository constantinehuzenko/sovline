/* eslint-disable react/no-danger */
import { ControlButton } from "components/ControlButton/ControlButton";
import { switchCorrectVisability } from "store/reducers/questionsSlice";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";

const AnswersContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const ListOfAnswers = styled.ul`
  position: relative;
  padding: 0 8px;
  width: 100%;
  max-width: 620px;
`;

const AnswersItem = styled.li`
  margin: 8px 0;
  list-style: none;
  user-select: none;
  background: #192434;
  border-radius: 16px;
  box-shadow: ${(props: { isCorrect: boolean; isVisible: boolean }) =>
    props.isVisible &&
    (props.isCorrect ? "0 0 1px 2px green" : "0 0 1px 2px red")};

  > button {
    text-align: left;
    color: white;
    background: #192434;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    border: none;
    padding: 12px;

    > span {
      > code {
        padding: 1px 5px;
        border-radius: 6px;
        background: #2600ff;
      }
    }
  }
`;

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
