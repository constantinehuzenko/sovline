import { AnswersBlock } from "components/AnswersBlock/AnswersBlock";
import { CodeBlock } from "components/CodeBock/CodeBlock";
import { ExplanationBlock } from "components/ExplanationBlock/ExplanationBlock";
import { Wrapper } from "components/Wrapper/Wrapper";
import { DynamicContentTypes } from "types/model";
import { useAppSelector } from "utils/hooks/redux";
import { Link } from "react-router-dom";

export const QuizPage = () => {
  const { currentQuestion, currentContent, openResetModal } = useAppSelector(
    (state) => state.questions
  );

  const content: Record<DynamicContentTypes, JSX.Element> = {
    questions: (
      <>
        <Link to="addNewQuestion">About</Link>

        <h1>{currentQuestion?.header}</h1>
        <CodeBlock code={currentQuestion?.question} />
      </>
    ),
    answers: (
      <>
        <h1>{currentQuestion?.header}</h1>
        <CodeBlock code={currentQuestion?.question} />
      </>
    ),
    explanation: (
      <>
        <h1>{currentQuestion?.header}</h1>
        <CodeBlock code={currentQuestion?.question} />
        <ExplanationBlock explanation={currentQuestion?.explanation} />
      </>
    ),
  };

  return (
    <Wrapper>
      {openResetModal ? (
        <h1>Your questions run out😭 Start Again?</h1>
      ) : (
        content[currentContent]
      )}
      <AnswersBlock />
    </Wrapper>
  );
};
