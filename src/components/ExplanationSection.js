import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import LineGradient from "./LineGradient";
import GradientIcon from "./GradientIcon";
import { TextWithColor } from "./home/Practicality";
import { MaxwidthContainer } from "./GlobalStyles";
import { Animate } from "./Animations/AnimateIn";

const ExplanationSection = ({ color, title, subtitle, subwithcolor }) => {
  return (
    <BackgroundContainer>
      <Container>
        <GradientStyleContainer>
          <GradientIcon
            IconComponent={<BsCodeSlash size={30} color={color} />}
            bgColor={color}
          />
          <LineGradient colorFrom={color} colorTo={"#FC69AF00"} />
        </GradientStyleContainer>
        <Animate.SlideInLeft>
          <TextContent>
            <Title>{title}</Title>
            <SubTitle>
              <TextWithColor color={color}>{subwithcolor} </TextWithColor>
              {subtitle}
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

export default ExplanationSection;

const BackgroundContainer = styled.section`
  background: #0d1117;
`;

const Container = styled(MaxwidthContainer)`
  display: flex;
  gap: 2.5rem;
  padding: var(--container-padding);
`;

const GradientStyleContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: auto 1fr;
  margin-block: 1rem;
`;

const TextContent = styled.div`
  font-weight: 600;
  color: white;
  margin-block: 1rem;
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: var(--font-size-2xl);
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 1rem;
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
