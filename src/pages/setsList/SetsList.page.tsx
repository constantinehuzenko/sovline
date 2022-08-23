import { SetsListItem } from "components/SetsListItem/SetsListItem";
import { Wrapper } from "components/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import { setsData } from "store/setsData";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none; /* no underline */
`;

export const SetsList = () => {
  return (
    <Wrapper>
      <h2>Community sets</h2>
      {/* <Link to="quiz">some</Link>
      <div>some</div> */}
      {setsData.map((el) =>
        el.available ? (
          <StyledLink to="/quiz">
            <SetsListItem
              key={el.name + el.author}
              author={el.author}
              available={el.available}
              name={el.name}
              hashtagsList={el.hashtagsList}
            />
          </StyledLink>
        ) : (
          <SetsListItem
            key={el.name + el.author}
            author={el.author}
            available={el.available}
            name={el.name}
            hashtagsList={el.hashtagsList}
          />
        )
      )}
    </Wrapper>
  );
};
