import Image from "next/image";
import styled from "styled-components";
import { BsCollectionPlay } from "react-icons/bs";

import Button from "../Button";
import LineGradient from "../LineGradient";
import rocket from "../../assets/images/rocket.png";
import { QUERIES } from "../../constants";

const OnDemandSection = () => {
  return (
    <Container>
      <GradientContainer>
        <Gradient>
          <LineGradient
            colorFrom={"#FC69AF00"}
            colorTo={"#EC674C,#FFA28B"}
            height={"250px"}
          />
        </Gradient>
        <ImageContainer>
          <Image src={rocket} alt="" sizes="100vw" />
        </ImageContainer>
      </GradientContainer>
      <CardsContainer>
        <Card>
          <Top>
            <Icon>
              <BsCollectionPlay size={24} />
            </Icon>
            <p>Consultation & Contracting </p>
          </Top>
          <Text>
            Our experienced consultants work with you to identify and analyze
            your business needs, and provide tailor-made solutions that meet
            your specific requirements.
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
            Our job placement program provides guidance and support to help you
            identify and pursue job opportunities that align with your skills
            and experience.
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
            Our training program is designed to provide a high-quality learning
            experience that equips you with the skills and knowledge necessary
            to succeed in your chosen field.
          </Text>
          <Button title={"Learn More"} variant="outline" />
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default OnDemandSection;

const Container = styled.div`
  max-width: 100vw;
  background: #0d1117;
  padding: 3rem var(--container-padding);
  padding-bottom: 0px;
  display: flex;
  align-items: flex-end;
  gap: 2rem;

  @media ${QUERIES.tabletAndSmaller} {
    flex-wrap: wrap;
  }
`;

const GradientContainer = styled.div`
  display: flex;
  @media ${QUERIES.tabletAndSmaller} {
    order: 2;
    flex: 1;
  }
`;

const Gradient = styled.div`
  align-self: flex-end;
  margin-bottom: 1.5rem;
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
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

const ImageContainer = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      /* object-fit: cover; */
    }
  }
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
