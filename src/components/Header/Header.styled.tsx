import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0px;
  background-color: #192434;
  z-index: 10;

  box-shadow: 0 0 1px 1px #131c28;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 620px;
    padding: 0 8px;
  }

  img {
    width: 180px;
    margin: 8px 0;
  }
`;
