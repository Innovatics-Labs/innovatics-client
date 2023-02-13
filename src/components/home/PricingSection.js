import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import LineGradient from "../LineGradient";
import GradientIcon from "../GradientIcon";
import { TextWithColor } from "./Practicality";
import PricingPlanCard from "../PricingPlanCard";
import { QUERIES } from "../../constants";

const PricingSection = () => {
  return (
    <Container>
      <TopContainer>
        <GradientStyleContainer>
          <LineGradient colorFrom={"#FC69AF00"} colorTo={"#8B90FF"} />
          <GradientIcon
            IconComponent={<BsCodeSlash size={30} color="#8B90FF" />}
            bgColor={"#8B90FF"}
          />
          <LineGradient colorFrom={"#8B90FF"} colorTo={"#FC69AF00"} />
        </GradientStyleContainer>
        <TextContent>
          <Title>Pricings</Title>
          <SubTitle>
            <TextWithColor color="#8B90FF">
              Affordable monthly and annual subscriptions.{" "}
            </TextWithColor>
            Start learning the next Big things.
          </SubTitle>
          <Start>
            <span>Learn more</span>
            <MdKeyboardArrowRight color={"#8691A6"} size={24} />
          </Start>
        </TextContent>
      </TopContainer>
      <PricingContainer>
        <PricingPlanCard planType={"Basic"} planPrice={"$35"} />
        <PricingPlanCard planType={"Standard"} planPrice={"$285"} />
        <PricingPlanCard planType={"Premium"} planPrice={"$735"} />
      </PricingContainer>
    </Container>
  );
};

export default PricingSection;

const Container = styled.section`
  max-width: 100vw;
  background: #0d1117;
  padding: 2rem var(--container-padding);
`;

const TopContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const GradientStyleContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 50px auto 1fr;
`;

const TextContent = styled.div`
  font-weight: 600;
  color: white;
  margin-block: 40px;
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: var(--font-size-2xl);
  margin-block: 1.5rem;
`;

const SubTitle = styled.p`
  font-size: var(--font-size-3xl);
  margin-block: 1.5rem;
  max-width: 70%;
  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
  }
`;

const Start = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PricingContainer = styled.div`
  display: flex;
  gap: 35px;
  margin-block: 10px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;
