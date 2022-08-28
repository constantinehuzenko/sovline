import { StyledCounter } from "./ProgressCounter.styled";

export const ProgressCounter = ({
  count,
  length,
}: {
  count: number;
  length: number;
}) => (
  <StyledCounter to="/wrong-answers" count={count} length={length}>
    <span>
      {count}/{length}
    </span>
  </StyledCounter>
);
