import styled from "styled-components";
import Button from "./Button";
import { MaxwidthContainer } from "./GlobalStyles";

const JoinDiscord = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Button
          title={"Join the Discord COMMUNITY"}
          bgColor="white"
          color={"#0D1117"}
        />
      </Container>
    </BackgroundContainer>
  );
};

export default JoinDiscord;

const BackgroundContainer = styled.section`
  background: #0d1117;
  padding: 4rem var(--container-padding);
`;

const Container = styled(MaxwidthContainer)`
  text-align: center;
  width: fit-content;
`;
