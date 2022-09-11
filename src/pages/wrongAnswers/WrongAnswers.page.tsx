/* eslint-disable react/no-danger */
import { AnswersItem } from "components/AnswersBlock/AnswersBlock.styled";
import { CodeBlock } from "components/CodeBock/CodeBlock";
import { ExplanationBlock } from "components/ExplanationBlock/ExplanationBlock";
import { Wrapper } from "components/Wrapper/Wrapper";
import { data } from "store/data";

export const WrongAnswers = () => {
  const getLocalStore = localStorage.getItem("HackYI_APP_wrong");
  const parseLocalStore = getLocalStore && JSON.parse(getLocalStore);

  const getDataOfWrong = data.filter((el) => {
    return parseLocalStore.includes(el.id);
  });

  return (
    <Wrapper>
      {getDataOfWrong.length &&
        getDataOfWrong?.map((el) => (
          <div key={el.id} style={{ marginBottom: "40px" }}>
            <h4
              dangerouslySetInnerHTML={{
                __html: `❌ ${el?.header}` || "",
              }}
            />
            <CodeBlock code={el?.question} />

            <details>
              <summary>explanation</summary>
              <AnswersItem isCorrect={false} isVisible={false}>
                {el?.testVariants
                  ?.filter((variant) => variant.isCorrect)
                  ?.map((correct) => (
                    <button type="button">
                      👍{" "}
                      <span
                        dangerouslySetInnerHTML={{ __html: correct.text || "" }}
                      />
                    </button>
                  ))}
              </AnswersItem>
              <ExplanationBlock explanation={el?.explanation} />
            </details>
          </div>
        ))}
    </Wrapper>
  );
};
