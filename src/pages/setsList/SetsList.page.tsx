import { SetsListItem } from "components/SetsListItem/SetsListItem";
import { Wrapper } from "components/Wrapper/Wrapper";
import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import { setsData } from "store/setsData";
import styled from "styled-components";
import { useQuizUrlState } from "utils/hooks/useQuizUrlState.hook";

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

export const SetsList = () => {
  const { setParams } = useQuizUrlState();

  useEffect(() => {
    setParams("", "");
  }, []);

  return (
    <Wrapper>
      <h2>Community sets</h2>
      {Children.toArray(
        setsData.map((el) => (
          <StyledLink
            to={
              el.available
                ? "/quiz?currentQuestion=0&currentContent=question"
                : "/"
            }
          >
            <SetsListItem
              author={el.author}
              available={el.available}
              name={el.name}
              hashtagsList={el.hashtagsList}
            />
          </StyledLink>
        ))
      )}
    </Wrapper>
  );
};
