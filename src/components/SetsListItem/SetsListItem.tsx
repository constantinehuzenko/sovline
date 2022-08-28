import { LockSvg } from "assets/svg/LockSvg";
import { Children } from "react";
import { useQuizUrlState } from "utils/hooks/useQuizUrlState.hook";
import { StyledLockWrapper, StyledSetsListItem } from "./SetsListItem.styled";

export const SetsListItem = ({
  name,
  hashtagsList,
  author,
  available,
}: {
  name: string;
  hashtagsList: Array<string>;
  author: string;
  available: boolean;
}) => {
  const { setParams } = useQuizUrlState();

  return (
    <StyledLockWrapper>
      <StyledSetsListItem
        locked={available}
        onClick={() => {
          setParams("currentQuestion", "0");
          setParams("currentContent", "question");
        }}
      >
        <h3>{name}</h3>
        {Children.toArray(
          hashtagsList.map((item, i) => <span id={item + i}>#{item}</span>)
        )}
        <div>{author}</div>
      </StyledSetsListItem>

      {!available && <LockSvg size={35} color="#a3c9fe" />}
    </StyledLockWrapper>
  );
};
