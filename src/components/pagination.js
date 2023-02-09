import styled from "styled-components";
import { GrayTitle } from "../pages/dashboard-sc";

const Pagination = () => {
  return (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <p>
          <GrayTitle>RECOMMENDED PREV:</GrayTitle>
        </p>
        <RecommendedTitle>None</RecommendedTitle>
      </div>
      <div>
        <p>
          <GrayTitle>RECOMMENDED NEXT</GrayTitle>
        </p>
        <RecommendedTitle>Advance Python Data Scientist</RecommendedTitle>
      </div>
    </Container>
  );
};

export default Pagination;

const Container = styled.article`
  flex: 1;
  margin-block: 2rem;
`;

const RecommendedTitle = styled.p`
  font-weight: 500;
  font-size: 1.7rem;
  color: white;
`;
