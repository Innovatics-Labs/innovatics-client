import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import LineGradient from "../LineGradient";
import GradientIcon from "../GradientIcon";
import { TextWithColor } from "./Practicality";
import { MaxwidthContainer } from "../GlobalStyles";
import { Animate } from "../Animations/AnimateIn";

const CareerTalksSection = () => {
  return (
    <BackgroundContainer>
      <Container>
        <GradientStyleContainer>
          <LineGradient colorFrom={"#FC69AF00"} colorTo={"#FC69AF"} />
          <GradientIcon
            IconComponent={<BsCodeSlash size={30} color="#FC69AF" />}
            bgColor={"#FC69AF"}
          />
          <LineGradient colorFrom={"#FC69AF"} colorTo={"#FC69AF00"} />
        </GradientStyleContainer>
        <Animate.SlideInLeft>
          <TextContent>
            <Title>Career Talks</Title>
            <SubTitle>
              <TextWithColor color="#FC69AF">
                Join our weekend career talks with intensive mentorship.{" "}
              </TextWithColor>
              Join the race to catch the ace.
            </SubTitle>
            <Start>
              <span>Learn more</span>
              <MdKeyboardArrowRight color={"#8691A6"} size={24} />
            </Start>
          </TextContent>
        </Animate.SlideInLeft>
      </Container>
    </BackgroundContainer>
  );
};

export default CareerTalksSection;

const BackgroundContainer = styled.section`
  background: #0d1117;
`;

const Container = styled(MaxwidthContainer)`
  display: flex;
  gap: 2.5rem;
  padding: 2rem var(--container-padding);
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
  line-height: 35px;
`;

const SubTitle = styled.p`
  font-size: clamp(0.875rem, 2.143vw + 0.071rem, 2rem);
  margin-block: 1.5rem;
  width: min(40ch, 100%);
`;

const Start = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
