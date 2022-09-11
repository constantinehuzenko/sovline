/* eslint-disable react/no-danger */
import { AnswersBlock } from "components/AnswersBlock/AnswersBlock";
import { CodeBlock } from "components/CodeBock/CodeBlock";
import { ExplanationBlock } from "components/ExplanationBlock/ExplanationBlock";
import { Wrapper } from "components/Wrapper/Wrapper";
import { useMemo } from "react";
import { DynamicContentTypes } from "types/model";
import { useQuizUrlState } from "utils/hooks/useQuizUrlState.hook";

export const QuizPage = () => {
  const { currentQuestion, currentContent, isStateValid } = useQuizUrlState();

  const content: Record<DynamicContentTypes, JSX.Element> = useMemo(
    () => ({
      question: (
        <>
          <h2
            dangerouslySetInnerHTML={{
              __html: currentQuestion?.header || "",
            }}
          />
          <CodeBlock code={currentQuestion?.question} />
        </>
      ),
      answer: (
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
      {isStateValid ? (
        <>
          {content[currentContent as DynamicContentTypes]}
          <AnswersBlock />
        </>
      ) : (
        <div>error</div>
      )}
    </Wrapper>
  );
};
