import { LockSvg } from "assets/svg/LockSvg";
import { ProgressCounter } from "components/ProgressCounter/ProgressCounter";
import { Children } from "react";
import {
  StyledHash,
  StyledLockWrapper,
  StyledSetsListItem,
} from "./SetsListItem.styled";

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
  const lastItem = Number(localStorage.getItem("HackYI_APP_last"));

  return (
    <StyledLockWrapper>
      <StyledSetsListItem locked={available}>
        <h3>{name}</h3>
        <StyledHash>
          {Children.toArray(
            hashtagsList.map((item, i) => <span id={item + i}>#{item}</span>)
          )}
        </StyledHash>
        <h5>{author}</h5>
        {available ? (
          <ProgressCounter count={lastItem || 0} length={50} size="long" />
        ) : (
          <ProgressCounter count={0} length={50} size="long" />
        )}
      </StyledSetsListItem>

      {!available && <LockSvg size={35} color="#a3c9fe" />}
    </StyledLockWrapper>
  );
};
