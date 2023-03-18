import styled from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";
import { Animate } from "../Animations/AnimateIn";

const WhyInnovatics = () => {
  return (
    <Container>
      <Content>
        <Title>Why Innovatics?</Title>
        <Subtitle>
          Our experienced trainers use hands-on, interactive learning methods to
          ensure that you not only understand the concepts but can apply them in
          real-world scenarios. Our training programs are designed to equip you
          with the knowledge and skills you need to succeed in the tech
          industry.
        </Subtitle>
        <CardList>
          <Card>
            <CardTitle color="#fad740">Content Depth</CardTitle>
            <Text>
              Bootcamp level training—on demand. Train on your own time for as
              little as $39 a month.
            </Text>
          </Card>
          <Card>
            <CardTitle color="#bb85ff">Expert Instructors</CardTitle>
            <Text>
              Purpose built curriculum curated to the needs of teams and
              enterprises. Learn the skills that will drive innovation.
            </Text>
          </Card>
          <Card>
            <CardTitle color="#66c19a">Hands-On</CardTitle>
            <Text>
              You can&apos;t innovate without doing. Each of our learning paths
              contain real world, hands-on lab scenarios so you can practice
              what you&apos;ve learned.
            </Text>
          </Card>
          <Card>
            <CardTitle color="#8B90FF">Career Oriented</CardTitle>
            <Text>
              Certifications and Training focus on roles—not technology—so you
              and your teams can scale to the roles necessary to drive your
              organization forward.
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
  padding: var(--container-padding);
`;

const Title = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: ${WEIGHTS.semiBold};
  text-align: center;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--mid-grey);
  font-size: 24px;
  color: #6d7080;
  text-align: center;
  max-width: 65ch;
  margin-inline: auto;
  line-height: 1.5;

  @media ${QUERIES.phoneAndSmaller} {
    max-width: revert;
    width: 100%;
  }
`;

const Card = styled.div`
  padding: 2rem;
  background: linear-gradient(144.05deg, #2d2e33, #202121);
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  color: white;
  border-radius: 19px;

  :nth-of-type(1) {
    :hover {
      background: no-repeat
        url("https://ine.com/assets/backgrounds/learning-areas/networking.jpg");
      background-size: cover;
    }
  }
  :nth-of-type(3) {
    :hover {
      background: no-repeat
        url("https://ine.com/assets/backgrounds/learning-areas/data-science.jpg");
      background-size: cover;
    }
  }

  :nth-of-type(4) {
    :hover {
      background: no-repeat
        url("https://ine.com/assets/backgrounds/learning-areas/cloud.jpg");
      background-size: cover;
    }
  }

  :nth-of-type(2) {
    :hover {
      background: no-repeat
        url("https://ine.com/assets/backgrounds/learning-areas/cyber-security.jpg");
      background-size: cover;
    }
  }
`;

const Content = styled.div`
  margin-bottom: 4rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 2rem;
  }
`;

const CardList = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
  }
`;

const Text = styled.p`
  font-size: var(--font-size-md);
`;

const CardTitle = styled.h4`
  color: ${({ color }) => color};
  font-weight: 500;
  font-size: var(--font-size-xl);
`;

const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;
