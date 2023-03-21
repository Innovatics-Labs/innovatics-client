import styled from "styled-components";
import { BsCollectionPlay } from "react-icons/bs";

import Button from "../Button";
import { QUERIES, WEIGHTS } from "../../constants";
import { MaxwidthContainer } from "../GlobalStyles";
import player from "../../assets/images/player.png";
import platform from "../../assets/images/platform.png";

import Link from "next/link";
import Image from "next/image";
import RadialGradient from "../gradients/RadialGradient";

const OurPlatform = () => {
  return (
    <BackgroundContainer>
      <MaxwidthContainer>
        <Container>
          <RadialGradient
            top="50px"
            right="20px"
            gradient="rgba(239, 16, 80, 0.7) 0%, rgba(192, 8, 61, 0.7) 27.56%, rgba(231, 15, 77, 0.315) 38%, rgba(238, 133, 163, 0.364) 75.01%, rgba(232, 14, 76, 0.7) 100%"
          />
          <RadialGradient
            gradient=" #074BC9 17.55%, #074BC9 27.56%, rgba(7, 75, 201, 0.45) 49.89%, rgba(7, 75, 201, 0.52) 56.53%, #074BC9 65.69%"
            top="200px"
            right="172px"
          />
          <RadialGradient
            top="40%"
            left="350px"
            gradient="rgba(239, 16, 80, 0.7) 0%, rgba(192, 8, 61, 0.7) 27.56%, rgba(231, 15, 77, 0.315) 38%, rgba(238, 133, 163, 0.364) 75.01%, rgba(232, 14, 76, 0.7) 100%"
          />
          <RadialGradient
            top="50%"
            left="200px"
            gradient="rgba(239, 16, 80, 0.7) 0%, rgba(192, 8, 61, 0.7) 27.56%, rgba(231, 15, 77, 0.315) 38%, rgba(238, 133, 163, 0.364) 75.01%, rgba(232, 14, 76, 0.7) 100%"
          />
          <RadialGradient
            top="80%"
            right="50px"
            gradient="rgba(239, 16, 80, 0.7) 0%, rgba(192, 8, 61, 0.7) 27.56%, rgba(231, 15, 77, 0.315) 38%, rgba(238, 133, 163, 0.364) 75.01%, rgba(232, 14, 76, 0.7) 100%"
          />
          <Player>
            <Image src={player} alt="" />
          </Player>
          <Content>
            <ContentImage>
              <Image src={platform} alt="" />
            </ContentImage>
            <CardSection>
              <TextIntro>
                <Title>Hands-On Practical Experience</Title>
                <Subtitle>
                  Our training programs are designed to equip you with the
                  knowledge and skills you need to succeed in the tech industry.
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
                    analyze your business needs, and provide tailor-made
                    solutions that meet your specific requirements.
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
                    Our job placement program provides guidance and support to
                    help you identify and pursue job opportunities that align
                    with your skills and experience.
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
            </CardSection>
          </Content>
        </Container>
      </MaxwidthContainer>
    </BackgroundContainer>
  );
};

export default OurPlatform;

const BackgroundContainer = styled.section`
  max-width: 100vw;
  background: #0d1117;
  background: rgba(18, 18, 18);
  padding-bottom: 7rem;
`;

const Container = styled.div`
  padding: 3rem var(--container-padding);
  padding-bottom: 0px;
  gap: 2rem;
  position: relative;
  isolation: isolate;
`;

const Player = styled.div`
  margin-inline: auto;
  transform: translateY(-40%);
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    height: auto;
  }
`;

const TextIntro = styled.div`
  color: white;
  margin-bottom: 2.5rem;
  margin-inline: auto;
  line-height: 1.2;
`;

const Title = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-2xl);
  color: white;
`;

const Subtitle = styled.p`
  color: var(--mid-grey);
  font-size: var(--font-size-md);
`;

const Content = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  display: flex;
  justify-content: space-around;
  gap: 3rem;
`;

const ContentImage = styled.div`
  align-self: center;
`;

const CardSection = styled.div``;

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
  /* background: linear-gradient(
    -286deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0) 98.21%
  ); */
  background: linear-gradient(
    145.35deg,
    rgba(62, 63, 73, 0.7) 4.67%,
    rgba(62, 63, 73, 0) 95.66%
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
