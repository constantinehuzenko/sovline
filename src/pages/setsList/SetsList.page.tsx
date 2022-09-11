import { SetsListItem } from "components/SetsListItem/SetsListItem";
import { Wrapper } from "components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { setsData } from "store/setsData";
import styled from "styled-components";

export const StyledLink = styled(Link)<{ locked: "none" | "unset" }>`
  color: #fff;
  text-decoration: none;
  pointer-events: ${({ locked }) => locked};
`;

export const SetsList = () => {
  const lastItem = Number(localStorage.getItem("HackYI_APP_last"));

  return (
    <Wrapper>
      {setsData.map((el) => (
        <StyledLink
          key={el.id}
          to={`/quiz?currentQuestion=${lastItem || 0}&currentContent=question`}
          locked={!el?.available ? "none" : "unset"}
        >
          <SetsListItem
            author={el.author}
            available={el.available}
            name={el.name}
            hashtagsList={el.hashtagsList}
          />
        </StyledLink>
      ))}
    </Wrapper>
  );
};
