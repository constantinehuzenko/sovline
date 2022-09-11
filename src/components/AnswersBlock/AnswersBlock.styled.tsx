import styled from "styled-components";

export const AnswersContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

export const ListOfAnswers = styled.ul`
  position: relative;
  padding: 0 8px;
  width: 100%;
  max-width: 620px;
`;

export const AnswersItem = styled.li`
  margin: 8px 0;
  list-style: none;
  user-select: none;
  background: #131c28;
  box-shadow: 0 0 1px 1px #131c28;
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
        line-height: 20px;
        color: white;
        padding: 0.5px 2.5px;
        border-radius: 3px;
        background: #2600ff47;
      }
    }
  }
`;
