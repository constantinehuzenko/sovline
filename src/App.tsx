import { useEffect } from "react";
import { setQuestionsToLocalStore } from "store/reducers/questionsSlice";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "utils/hooks/redux";

const CodeBlock = styled.div`
  pre {
    overflow: auto;
    background-color: #192434;
    padding: 16px;
    border-radius: 16px;
    code {
      color: #ffffff;
    }
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
`;

export const App = () => {
  const { list, current } = useAppSelector((state) => state.questions);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setQuestionsToLocalStore());
  }, []);

  return (
    <div>
      <h1>{current?.header}</h1>
      <CodeBlock
        dangerouslySetInnerHTML={{ __html: current?.question || "" }}
      />
    </div>
  );
};
