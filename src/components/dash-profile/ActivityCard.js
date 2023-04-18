import React from "react";
import styled from "styled-components";
import Data from "../../assets/svg/server.svg";

const ActivityCard = ({ title, index }) => {
  return (
    <Container>
      <IconContainer>
        <Data size={30} color={"#8B90FF"} />
      </IconContainer>
      <Number>{index + 1 || "01"}</Number>
      <Title>{title || "SQL for Data Science"}</Title>
    </Container>
  );
};

export default ActivityCard;

const Container = styled.article`
  width: 200px;
  padding: 1rem;
  background: linear-gradient(
    145.35deg,
    rgba(62, 63, 73, 0.7) 4.67%,
    rgba(62, 63, 73, 0) 95.66%
  );
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;

const IconContainer = styled.div`
  width: fit-content;
  background: linear-gradient(
    136.43deg,
    rgba(62, 63, 73, 0.7) 2.37%,
    rgba(62, 63, 73, 0) 100%
  );
  border-radius: 12px;
  padding: 0.7rem;
`;

const Title = styled.p`
  font-size: var(--font-size-2md);
`;

const Number = styled.p`
  font-size: 20px;
  color: #88a9ff;
`;
