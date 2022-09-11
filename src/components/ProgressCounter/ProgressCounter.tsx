import { StyledCounter } from "./ProgressCounter.styled";

export const ProgressCounter = ({
  count,
  length,
  size,
}: {
  count: number;
  length: number;
  size: "small" | "long";
}) => (
  <StyledCounter count={count} length={length} size={size}>
    <span>
      {count}/{length}
    </span>
  </StyledCounter>
);
