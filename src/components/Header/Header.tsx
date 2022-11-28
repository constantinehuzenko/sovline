/* eslint-disable global-require */
import { ProgressCounter } from "components/ProgressCounter/ProgressCounter";
import { StyledLink } from "pages/setsList/SetsList.page";
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
        <StyledLink to="/" locked="unset">
          <h1>sovline</h1>
        </StyledLink>
        {pathname === "/quiz" && (
          <StyledLink to="/wrong-answers" locked="unset">
            <ProgressCounter
              count={currentQuestionIndex}
              length={data.length - 1}
              size="small"
            />
          </StyledLink>
        )}
      </div>
    </StyledHeader>
  );
};
