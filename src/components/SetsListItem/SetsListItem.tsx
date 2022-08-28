import { LockSvg } from "assets/svg/LockSvg";
import { Children } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <StyledLockWrapper>
      <StyledSetsListItem
        locked={available}
        onClick={() => {
          searchParams.set("currentQuestion", "0");
          searchParams.set("currentContent", "question");
          setSearchParams(searchParams);
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
