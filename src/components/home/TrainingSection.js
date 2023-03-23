import styled from "styled-components";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

import PricingPlanCard from "../PricingPlanCard";
import { QUERIES } from "../../constants";
import { MaxwidthContainer } from "../GlobalStyles";
import trainingIcon from "../../assets/images/mock-training-icon.png";
import Button from "../Button";

const TrainingSection = () => {
  return (
    <BackgroundContainer>
      <Container>
        <TopContainer>
          <TextContent>
            <Image src={trainingIcon} alt="training" />
            <Title>Looking for training for your team?</Title>
            <SubTitle>
              Our training programs are designed to equip you with the knowledge
              and skills you need to succeed in the tech industry.
            </SubTitle>
            <Start>
              <Button
                bgColor={
                  "linear-gradient(145.35deg, rgba(62, 63, 73, 0.7) 4.67%, #3E3F49 95.66%)"
                }
                color="white"
                title={"Get Started Now"}
              />
              <Button title={"Learn more"} variant="outline" />
            </Start>
          </TextContent>
        </TopContainer>
        <PricingContainer>
          <PricingPlanCard planType={"Basic"} planPrice={"$35"} />
          <PricingPlanCard planType={"Standard"} planPrice={"$285"} />
          <PricingPlanCard planType={"Premium"} planPrice={"$735"} />
        </PricingContainer>
      </Container>
    </BackgroundContainer>
  );
};

export default TrainingSection;
const BackgroundContainer = styled.section`
  max-width: 100vw;
  background: #0d1117 url("/bg-grad.png");
  background-repeat: no-repeat;
  background-position: top;
`;

const Container = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const TextContent = styled.div`
  color: white;
  margin-block: 40px;

  img {
    margin-inline: auto;
  }
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: var(--font-size-2xl);
  margin-block: 1.5rem;
`;

const SubTitle = styled.p`
  font-size: var(--font-size-2md);
  margin-block: 1.5rem;
  text-align: center;
  max-width: 70%;
  margin-inline: auto;
  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: var(--font-size-md);
  }
`;

const Start = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    gap: 1rem;
    button {
      width: 100%;
    }
  }
`;

const PricingContainer = styled.div`
  display: flex;
  gap: 35px;
  margin-block: 10px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;
