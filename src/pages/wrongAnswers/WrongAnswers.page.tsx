/* eslint-disable react/no-danger */
import {
  AnswersContainer,
  AnswersItem,
  ListOfAnswers,
} from "components/AnswersBlock/AnswersBlock.styled";
import { CodeBlock } from "components/CodeBock/CodeBlock";
import { ControlButtonStyled } from "components/ControlButton/ControlButton.styled";
import { ExplanationBlock } from "components/ExplanationBlock/ExplanationBlock";
import { Wrapper } from "components/Wrapper/Wrapper";
import { useNavigate } from "react-router-dom";
import { data } from "store/data";

export const WrongAnswers = () => {
  const getLocalStore = localStorage.getItem("HackYI_APP_wrong");
  const parseLocalStore = getLocalStore && JSON.parse(getLocalStore);

  const getDataOfWrong = data?.filter((el) => {
    return parseLocalStore?.includes(el.id);
  });

  const navigate = useNavigate();

  return (
    <Wrapper>
      {getDataOfWrong?.length ? (
        <>
          {getDataOfWrong?.map((el) => (
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
                      <button key={correct.id} type="button">
                        👍{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: correct.text || "",
                          }}
                        />
                      </button>
                    ))}
                </AnswersItem>
                <ExplanationBlock explanation={el?.explanation} />
              </details>
            </div>
          ))}
          <AnswersContainer>
            <ListOfAnswers>
              <ControlButtonStyled>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("HackYI_APP_wrong");
                    localStorage.removeItem("HackYI_APP_last");
                    navigate("/");
                  }}
                >
                  🧼 RESET
                </button>
              </ControlButtonStyled>
            </ListOfAnswers>
          </AnswersContainer>
        </>
      ) : (
        <h4>Nothing here yet...</h4>
      )}
    </Wrapper>
  );
};
