import styled from "styled-components";
import { QUERIES } from "../constants";
import Button from "./Button";
import { MaxwidthContainer } from "./GlobalStyles";

const JoinCohort = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Title>Join the next Live Cohort</Title>
        <SubTitle>
          Experience the live interactive classes with our world-class
          instructors and mentors in the upcoming Bootcamp.
        </SubTitle>
        <Button
          title={"Register Now!"}
          bgColor="white"
          color={"#0D1117"}
          fontSize={"18px"}
        />
      </Container>
    </BackgroundContainer>
  );
};

export default JoinCohort;

const BackgroundContainer = styled.section`
  background: linear-gradient(90deg, #578dff 0%, #dd56ff 100%);
`;

const Container = styled(MaxwidthContainer)`
  color: white;
  padding: 3rem;
  text-align: center;
  display: grid;
  place-items: center;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-block: 10px;
`;

const SubTitle = styled.p`
  font-weight: 500;
  font-size: var(--font-size-lg);
  line-height: clamp(1.5rem, 1.476vw + 0.946rem, 2.5rem);
  width: 80%;
  @media ${QUERIES.tabletAndSmaller} {
    width: revert;
  }
`;
