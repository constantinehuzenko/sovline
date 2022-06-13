/* eslint-disable react/no-danger */
import { AnswersBlock } from "components/AnswersBlock/AnswersBlock";
import { CodeBlock } from "components/CodeBock/CodeBlock";
import { ExplanationBlock } from "components/ExplanationBlock/ExplanationBlock";
import { Wrapper } from "components/Wrapper/Wrapper";
import { useMemo } from "react";
import { DynamicContentTypes } from "types/model";
import { useAppSelector } from "utils/hooks/redux";

export const QuizPage = () => {
  const { currentQuestion, currentContent, openResetModal } = useAppSelector(
    (state) => state.questions
  );

  const content: Record<DynamicContentTypes, JSX.Element> = useMemo(
    () => ({
      questions: (
        <>
          <h2
            // dangerouslySetInnerHTML={{
            //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //   // @ts-ignore
            //   __html: currentQuestion.header.some || "",
            // }}
            dangerouslySetInnerHTML={{
              __html: currentQuestion?.header || "",
            }}
          />
          <CodeBlock code={currentQuestion?.question} />
        </>
      ),
      answers: (
        <>
          <h2
            dangerouslySetInnerHTML={{ __html: currentQuestion?.header || "" }}
          />
          <CodeBlock code={currentQuestion?.question} />
        </>
      ),
      explanation: (
        <>
          <h2
            dangerouslySetInnerHTML={{ __html: currentQuestion?.header || "" }}
          />
          <CodeBlock code={currentQuestion?.question} />
          <ExplanationBlock explanation={currentQuestion?.explanation} />
        </>
      ),
    }),
    [currentQuestion]
  );

  return (
    <Wrapper>
      {/* <Link to="1">some</Link> */}
      {openResetModal ? (
        <h1>Your questions run out😭 Start Again?</h1>
      ) : (
        content[currentContent]
      )}
      <AnswersBlock />
    </Wrapper>
  );
};
