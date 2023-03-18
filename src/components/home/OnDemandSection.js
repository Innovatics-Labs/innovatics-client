import styled from "styled-components";
import { BsCollectionPlay } from "react-icons/bs";

import Button from "../Button";
import { QUERIES, WEIGHTS } from "../../constants";
import { MaxwidthContainer } from "../GlobalStyles";
import YouTubeFrame from "../YoutubeEmbed";
import Link from "next/link";

const OnDemandSection = () => {
  return (
    <BackgroundContainer>
      <MaxwidthContainer>
        <Container>
          <YouTubeFrame video="QRZ_l7cVzzU" width="300" height="300" />
          <TextIntro>
            <Title>Nail Your Next Project</Title>
            <Subtitle>
              Take your technical training into your own hands and stay engaged
              with our learn-by-doing platform where you can put your skills to
              the test with hands-on exercises, quizzes, and labs.
            </Subtitle>
          </TextIntro>
          <CardsContainer>
            <Card>
              <Top>
                <Icon>
                  <BsCollectionPlay size={24} />
                </Icon>
                <p>Consultation & Contracting </p>
              </Top>
              <Text>
                Our experienced consultants work with you to identify and
                analyze your business needs, and provide tailor-made solutions
                that meet your specific requirements.
              </Text>
              <Button title={"Learn More"} variant="outline" />
            </Card>
            <Card>
              <Top>
                <Icon>
                  <BsCollectionPlay size={24} />
                </Icon>
                <p>Career Change & Job Placements</p>
              </Top>
              <Text>
                Our job placement program provides guidance and support to help
                you identify and pursue job opportunities that align with your
                skills and experience.
              </Text>
              <Button title={"Learn More"} variant="outline" />
            </Card>
            <Card>
              <Top>
                <Icon>
                  <BsCollectionPlay size={24} />
                </Icon>
                <p>Innovation & Development</p>
              </Top>
              <Text>
                Our innovation and development services provide cutting-edge
                solutions to complex problems using advanced technologies.
              </Text>
              <Button title={"Learn More"} variant="outline" />
            </Card>
            <Card>
              <Top>
                <Icon>
                  <BsCollectionPlay size={24} />
                </Icon>
                <p>Training</p>
              </Top>
              <Text>
                Our training program is designed to provide a high-quality
                learning experience that equips you with the skills and
                knowledge necessary to succeed in your chosen field.
              </Text>
              <Button
                // as={Link}
                // href="/services/training"
                title={"Learn More"}
                variant="outline"
              />
            </Card>
          </CardsContainer>
        </Container>
      </MaxwidthContainer>
    </BackgroundContainer>
  );
};

export default OnDemandSection;

const BackgroundContainer = styled.section`
  max-width: 100vw;
  background: #0d1117;
`;

const Container = styled.div`
  padding: 3rem var(--container-padding);
  padding-bottom: 0px;
  gap: 2rem;
`;

const TextIntro = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 2.5rem;
  width: 70vw;
  margin-inline: auto;
  line-height: 1.2;
`;

const Title = styled.h2`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-2xl);
  color: white;
`;

const Subtitle = styled.p`
  color: var(--mid-grey);
  font-size: var(--font-size-md);
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
  padding-bottom: 2rem;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    order: 1;
  }
`;

const Card = styled.div`
  padding: 2rem;
  background: linear-gradient(
    -286deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0) 98.21%
  );
  color: white;
  border-radius: 19px;
`;

const Top = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const Icon = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border-radius: 5px;
  padding: 10px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-block: 2rem;
`;
