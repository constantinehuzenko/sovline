/* eslint-disable global-require */
import { ProgressCounter } from "components/ProgressCounter/ProgressCounter";
import { useLocation } from "react-router-dom";
import { data } from "store/data";
import { useQuizUrlState } from "utils/hooks/useQuizUrlState.hook";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
  const { pathname } = useLocation();
  const { currentQuestionIndex } = useQuizUrlState();

  return (
    <StyledHeader>
      <div>
        <img src={require("../../assets/png/logo113.png")} alt="logo" />
        {pathname === "/quiz" && (
          <ProgressCounter count={currentQuestionIndex} length={data.length} />
        )}
      </div>
    </StyledHeader>
  );
};
