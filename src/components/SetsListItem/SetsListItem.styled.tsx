import styled from "styled-components";

export const StyledSetsListItem = styled.div<{ locked: boolean }>`
  background-color: #192434;
  margin-top: 16px;
  padding: 16px;
  border-radius: 16px;
  opacity: ${({ locked }) => (locked ? 1 : 0.4)};
  filter: ${({ locked }) => (locked ? "blur(0)" : "blur(1.5px)")};

  & > h3 {
    margin-bottom: 8px;
  }

  & > span {
    line-height: 24px;
    min-width: 18px;
    width: 100%;
    color: white;
    margin: 0 4px 0 0;
    padding: 2px 8px;
    border-radius: 16px;
    background: #8975ff46;
  }

  & > div {
    opacity: 0.3;
    margin-top: 8px;
  }
`;

export const StyledLockWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
