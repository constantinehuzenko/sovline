import { AnswersBlock } from "components/AnswersBlock/AnswersBlock";
import { useEffect } from "react";
import { syncReduxAndLocalStore } from "services/questionsThunk";
import styled from "styled-components";
import { DynamicContentTypes } from "types/model";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";

const CodeBlock = styled.div`
  pre {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #192434;
    margin-top: 16px;
    padding: 16px;
    border-radius: 16px;
    code {
      color: #ffffff;
    }
    .hljs-function {
      color: #66d9ef;
    }
    .hljs-keyword {
      color: #f92672;
    }
    .hljs-title {
      color: #2600ff;
    }
    .hljs-params {
      color: #66d9ef;
    }
    .hljs-built_in {
      color: #ffbd37;
    }
    .hljs-string {
      color: #ffbd37;
    }
    .hljs-number {
      color: #a681ff;
    }
  }
`;

const ExplanationBlock = styled.div`
  > code {
    padding: 1px 5px;
    border-radius: 6px;
    background: #2600ff;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 620px;
  padding: 0 8px;
  margin: 0 auto;
`;

const dynamicComponents: Record<DynamicContentTypes, JSX.Element> = {
  questions: <div>question</div>,
  answers: <div>showAnswers</div>,
  explanation: <div>showExplanation</div>,
};

export const App = () => {
  const dispatch = useAppDispatch();
  const { list, currentQuestion, openResetModal, currentContent } =
    useAppSelector((state) => state.questions);

  useEffect(() => {
    dispatch(syncReduxAndLocalStore());
  }, []);

  return (
    <Wrapper>
      {openResetModal ? (
        <h1>Your questions is run out. Continue and reset?</h1>
      ) : (
        <>
          <h1>{currentQuestion?.header}</h1>
          <CodeBlock
            dangerouslySetInnerHTML={{
              __html: currentQuestion?.question || "",
            }}
          />
          {currentContent === "explanation" && (
            <ExplanationBlock
              dangerouslySetInnerHTML={{
                __html: currentQuestion?.explanation || "",
              }}
            />
          )}
        </>
      )}
      <AnswersBlock />
    </Wrapper>
  );
};
