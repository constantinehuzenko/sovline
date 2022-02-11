import { ControlButtonStyled } from "components/ControlButton/ControlButton.styled";
import { useState } from "react";
import styled from "styled-components";
import {
  CodeLanguagesList,
  CodeLanguagesListType,
  IQuestionItem,
  QuestionModel,
} from "types/model";
import { uniqId } from "utils/uniqId";

const TextareaStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  padding: 0 8px;

  > textarea {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: #192434;
    color: white;
    resize: none;
    border: none;
    border-radius: 16px;
  }

  > button {
    display: flex;
    width: 100%;
  }
`;

enum CorrectAnswers {
  A = 0,
  B = 1,
  C = 2,
  D = 3,
  E = 4,
  F = 5,
}

type CorrectAnswersList = keyof typeof CorrectAnswers;

export const AddQuiz = () => {
  const [value, setValue] = useState("");

  const addNewQuiz = (str: string) => {
    const getQuestionsArray = str
      .match(/######[\s\S]*?---/gm)
      ?.map((el) => el.replace(/[^`]`([^`][\s\S]*?)`/gm, " <code>$1</code> "))
      ?.map((el) => el.replace(/\*\*([\s\S]*?)\*\*/gm, " <strong>$1</strong> "))
      ?.map((el) => el.replace(/__([\s\S]*?)__/gm, " <strong>$1</strong> "))
      ?.map((el) => el.replace(/_([\s\S]*?)_/gm, " <em>$1</iem> "));

    const properArray: Array<IQuestionItem> | null | undefined =
      getQuestionsArray?.map((el) => {
        const getCorrectAnswerLetter = el
          .match(/####.Ответ:.\w/gm)?.[0]
          .replace(/(####.Ответ:.)(\w)/gm, "$2");

        const correctAnswerOrder =
          getCorrectAnswerLetter &&
          CorrectAnswers[getCorrectAnswerLetter as CorrectAnswersList];

        const getCodeLangType = el
          .match(/`{3}.*[^\n]/gm)?.[0]
          .replace(/(```)(.*?)/gm, "$2");

        const getProperLangType =
          CodeLanguagesList[getCodeLangType as CodeLanguagesListType];

        return {
          id: uniqId(),
          codeLanguage: getProperLangType || CodeLanguagesList.javascript,
          questionModel: QuestionModel.quiz,
          header: el
            .match(/#{5}.\d*?..*\n/gm)?.[0]
            .replace(/(#{6}.*)(\..)(.*)(\n)/gm, "$3"),
          question: el
            .match(/```[\s\S]*?\n[\s\S]*?```/gm)?.[0]
            .replace(/(```[\s\S]*?\n)([\s\S]*?)(```)/gm, "$2"),
          testVariants: el.match(/-.\w:.[\s\S]*?\n/gm)?.map((answer, i) => ({
            id: uniqId(),
            text: answer.replace(/(-.\w:.)([\s\S]*?)(\n)/gm, "$2").trim(),
            isCorrect: i === correctAnswerOrder,
          })),
          explanation: el
            .match(/<details>[\s\S]*?<\/details>/gm)?.[0]
            .replace(
              /([\s\S]*?#{4}.Ответ:.\w\n\n)([\s\S]*?)(<\/p>[\s\S]*?)/gm,
              "$2"
            ),
          watched: false,
          isMarked: false,
          rate: 0,
        };
      });
    // eslint-disable-next-line no-console
    console.log(properArray);
  };

  return (
    <TextareaStyled>
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        <ControlButtonStyled onClick={() => addNewQuiz(value)}>
          <button type="button">add new quiz</button>
        </ControlButtonStyled>
      </ul>
    </TextareaStyled>
  );
};
