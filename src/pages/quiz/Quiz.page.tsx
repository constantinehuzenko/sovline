/* eslint-disable react/no-danger */
import { AnswersBlock } from "components/AnswersBlock/AnswersBlock";
import { CodeBlock } from "components/CodeBock/CodeBlock";
import { ExplanationBlock } from "components/ExplanationBlock/ExplanationBlock";
import { Wrapper } from "components/Wrapper/Wrapper";
import { useEffect, useMemo } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useResolvedPath,
  useSearchParams,
} from "react-router-dom";
import { data } from "store/data";
import { DynamicContentTypes } from "types/model";
import { useAppSelector } from "utils/hooks/redux";

export const QuizPage = () => {
  // const {
  //   // currentQuestion,
  //   // currentContent,
  //   openResetModal,
  //   listLength,
  //   alreadyWatchedLength,
  // } = useAppSelector((state) => state.questions);

  const [searchParams] = useSearchParams();
  const elementIndex = Number(searchParams.get("currentQuestion"));
  const currentQuestion = data[elementIndex as number];

  const currentContent = searchParams.get("currentContent");

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

  const location = useLocation();
  const params = useParams();
  const history = useNavigate();

  useEffect(() => {
    console.log({ location, params, history, searchParams });
    // setSearchParams();
    console.log(searchParams.getAll("s"));
    // console.log({ element });
    // console.log(new URLSearchParams(location.search));
  }, [location]);

  return (
    <Wrapper>
      {/* {openResetModal ? (
        <h1>Your questions run out😭 Start Again?</h1>
      ) : ( */}
      {content[currentContent as DynamicContentTypes]}
      {/* )} */}
      <AnswersBlock />
      {/* {console.log({ history })} */}
    </Wrapper>
  );
};
