import styled from "styled-components";
import Button from "./Button";

const JoinCohort = () => {
  return (
    <Container>
      <Title>Join the next Live Cohort</Title>
      <SubTitle>
        Experience the live interactive classes with our world-class instructors
        and mentors in the upcoming Bootcamp.
      </SubTitle>
      <Button
        title={"Register Now!"}
        bgColor="white"
        color={"#0D1117"}
        fontSize={"18px"}
      />
    </Container>
  );
};

export default JoinCohort;

const Container = styled.section`
  color: white;
  padding: 3rem;
  text-align: center;
  display: grid;
  place-items: center;
  background: linear-gradient(90deg, #578dff 0%, #dd56ff 100%);
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 45px;
  margin-block: 10px;
`;
const SubTitle = styled.p`
  font-weight: 500;
  font-size: 25px;
  width: 80%;
`;
