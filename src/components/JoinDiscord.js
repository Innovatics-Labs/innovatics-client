import styled from "styled-components";
import Button from "./Button";

const JoinDiscord = () => {
  return (
    <Container>
      <Button
        title={"Join the Discord COMMUNITY"}
        bgColor="white"
        color={"#0D1117"}
      />
    </Container>
  );
};

export default JoinDiscord;

const Container = styled.div`
  background: #0d1117;
  padding: 3rem var(--container-padding);
  text-align: center;
`;
