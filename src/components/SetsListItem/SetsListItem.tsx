import { LockSvg } from "assets/svg/LockSvg";
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
}) => (
  <StyledLockWrapper>
    <StyledSetsListItem locked={available}>
      <h3>{name}</h3>
      {hashtagsList.map((el) => (
        <span key={el}>#{el}</span>
      ))}
      <div>{author}</div>
    </StyledSetsListItem>

    {!available && <LockSvg size={45} color="#fff" />}
  </StyledLockWrapper>
);
