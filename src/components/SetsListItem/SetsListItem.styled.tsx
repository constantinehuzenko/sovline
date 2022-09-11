import styled from "styled-components";

export const StyledSetsListItem = styled.div<{ locked: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #192434;
  margin-top: 16px;
  padding: 16px;
  border-radius: 16px;
  opacity: ${({ locked }) => (locked ? 1 : 0.4)};
  filter: ${({ locked }) => (locked ? "blur(0)" : "blur(1.5px)")};

  & > h3 {
    margin-bottom: 8px;
  }

  h5 {
    margin-bottom: 8px;
    opacity: 0.2;
  }

  & > div {
    margin-bottom: 8px;
  }

  & > a {
    background: yellow;
    pointer-events: ${({ locked }) => (locked ? "none" : "unset")};
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

export const StyledHash = styled.div`
  & > span {
    line-height: 24px;
    min-width: 18px;
    color: white;
    margin: 0 4px 0 0;
    padding: 2px 8px;
    border-radius: 16px;
    background: #8975ff46;
  }
`;
