import styled from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";
import { Animate } from "../Animations/AnimateIn";

const cardTitleColor = ["#66c19a", "#FFA28B", "#fad740", "#8B90FF"];

const WhyInnovatics = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>Why Innovatics?</Title>
          <TagLine>We have the Best Solution for your Developement</TagLine>
          <Subtitle>
            Our mission is to help individuals and businesses achieve their
            goals through the latest technologies and tools. Whether you are
            looking to learn new skills, consult with experts, or find your next
            job, we are here to support you every step of the way.
          </Subtitle>
        </TextContainer>
        <CardList>
          <Card>
            <CardTitle color={cardTitleColor[0]}>Hands-On Training</CardTitle>
            <Text>
              Hands-on, interactive learning methods to ensure that you not only
              understand the concepts but can apply them in real-world
              scenarios.
            </Text>
          </Card>
          <Card>
            <CardTitle color={cardTitleColor[1]}>
              Consultation & Contract
            </CardTitle>
            <Text>
              Complete projects on time and on budget, with a team of skilled
              professionals at your disposal. we provide the resources and
              support you need.
            </Text>
          </Card>
          <Card>
            <CardTitle color={cardTitleColor[2]}>
              Innovation & Development
            </CardTitle>
            <Text>
              We work with you to develop custom solutions tailored to your
              specific needs, whether you are looking to optimize your current
              processes or develop new technologies.
            </Text>
          </Card>
          <Card>
            <CardTitle color={cardTitleColor[3]}>Job Placements</CardTitle>
            <Text>
              We offer resume building and interview preparation services, as
              well as connections to top employers in the tech industry.
            </Text>
          </Card>
        </CardList>
      </Content>
    </Container>
  );
};

export default WhyInnovatics;

const Container = styled.section`
  background-color: var(--dusty-grey);
  padding: 10rem var(--container-padding);
  background-image: url("/why-ine-bg-revised 1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const TextContainer = styled.div`
  text-align: center;
  line-height: 1.3;
  margin-inline: auto;
  display: grid;
  place-items: center;
`;

const Title = styled.h2`
  font-size: var(--font-size-2md);
  font-weight: ${WEIGHTS.semiBold};
  color: #8239cd;
  margin-bottom: 10px;
`;

const TagLine = styled.p`
  font-weight: 500;
  font-size: var(--font-size-2xl);
  margin-block: 10px;
  width: 60vw;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: var(--font-size-2md);
  color: #121212;
  text-align: center;
  max-width: 65ch;
  margin-inline: auto;
  line-height: 1.5;

  @media ${QUERIES.phoneAndSmaller} {
    max-width: revert;
    width: 100%;
  }
`;

const Content = styled.div`
  margin-bottom: 4rem;
`;

const CardList = styled.div`
  display: grid;
  justify-items: center;
  margin-inline: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 3rem auto;
  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const Text = styled.p`
  font-size: var(--font-size-md);
`;

const CardTitle = styled.h4`
  color: ${({ color }) => color};
  font-weight: 400;
  font-size: var(--font-size-xl);
`;

const Card = styled.div`
  padding: 2rem;
  background: linear-gradient(144.05deg, #2d2e33, #202121);
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  color: white;
  cursor: pointer;
  transition: all 1s ease-in;
  @media ${QUERIES.tabletAndSmaller} {
    border-radius: 19px;
  }

  :nth-of-type(1) {
    border-top-left-radius: 19px;
    border-bottom-left-radius: 19px;
    :hover {
      background: no-repeat url("/data-science.png");
      background-size: cover;
    }
  }
  :nth-of-type(2) {
    :hover {
      background: no-repeat url("/cyber-security.png");
      background-size: cover;
    }
  }
  :nth-of-type(3) {
    :hover {
      background: no-repeat url("/networking.png");
      background-size: cover;
    }
  }

  :nth-of-type(4) {
    border-top-right-radius: 19px;
    border-bottom-right-radius: 19px;
    :hover {
      background: no-repeat url("/cloud.png");
      background-size: cover;
    }
  }
`;
