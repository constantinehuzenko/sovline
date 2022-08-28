/* eslint-disable global-require */
import { ProgressCounter } from "components/ProgressCounter/ProgressCounter";
import { useLocation, useSearchParams } from "react-router-dom";
import { data } from "store/data";
import { StyledHeader } from "./Header.styled";

export const Header = () => {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const elementIndex = Number(searchParams.get("currentQuestion"));

  return (
    <StyledHeader>
      <div>
        <img src={require("../../assets/png/logo113.png")} alt="logo" />
        {pathname === "/quiz" && (
          <ProgressCounter count={elementIndex} length={data.length} />
        )}
      </div>
    </StyledHeader>
  );
};
