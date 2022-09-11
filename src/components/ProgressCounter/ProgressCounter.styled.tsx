import styled from "styled-components";

export const StyledCounter = styled.div<{
  length: number;
  count: number;
  size: "small" | "long";
}>`
  width: ${({ size }) => (size === "small" ? "70px" : "unset")};
  height: ${({ size }) => (size === "small" ? "24px" : "18px")};
  border-radius: 24px;
  background: black;
  position: relative;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 0 1px 2px #2600ff;
  font-size: 8px;
  background: #2600ff;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    opacity: 1;
    position: absolute;
    content: "";
    transition: 0.2s;
    background: #192434;

    width: 100%;
    height: 100%;
    right: ${({ length, count }) => -(100 / length) * count}%;
  }
`;
