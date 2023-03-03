import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

import Button from "../Button";
import UnstyledButton from "../UnstyledButton";
import LineGradient from "../LineGradient";
import InsetSection from "../InsetSection";
import { TextWithColor } from "./Practicality";
import labRunning from "../../assets/images/labRunningLarg.png";
import GreenCurve from "../../assets/images/curve-gradient-green.png";
import { QUERIES } from "../../constants";
import { Animate } from "../Animations/AnimateIn";

const WhyInnovatics = () => {
  return (
    <InsetSection bgImage={"/galaxy.png"}>
      <GradientContainer>
        <LineGradient
          colorFrom={`#10C75900, #10C759CF, #10C759`}
          colorTo={`#10C759D2, #10C75900`}
        />
        <CurveContainer>
          <Image src={GreenCurve} alt="" />
        </CurveContainer>
      </GradientContainer>
      <Content>
        <TopContent>
          <TextContent>
            <Title>
              <Animate.SlideInLeft>
                <TextWithColor color="#44E986">Python Lab</TextWithColor> for
                you to exercise what you learnt from our expert instructor-led
                video trainings.
              </Animate.SlideInLeft>
            </Title>
            <Start>
              <UnstyledButton>Start learning</UnstyledButton>
              <MdKeyboardArrowRight color={"#8691A6"} size={24} />
            </Start>
          </TextContent>
          <ImageContent>
            <Animate.SlideInRight>
              <Image src={labRunning} alt={""} sizes="100vw" />
            </Animate.SlideInRight>
          </ImageContent>
        </TopContent>
        <BottomContent>
          <Animate.SlideInLeft>
            <Button
              title={"Why Innovatics?"}
              variant={"outline"}
              borderColor={"#44E986"}
              size={`18px`}
              rounded
            />
            <QualityText>
              <TextWithColor color="#44E986">99.9% Quality</TextWithColor>
            </QualityText>
            <SubQualityText>
              education that makes you a Pro at what you do
            </SubQualityText>
          </Animate.SlideInLeft>
        </BottomContent>
      </Content>
    </InsetSection>
  );
};

export default WhyInnovatics;

const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  /* position: relative; */
  gap: 10px;
`;

const CurveContainer = styled.div`
  margin-right: -1.4rem;
  img {
    height: 300px;
    width: auto;
    object-fit: contain;
    transform: translateY(7rem);
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const Content = styled.div`
  margin-bottom: 4rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 2rem;
  }
`;

const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div``;

const ImageContent = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: var(--font-size-xl);
  line-height: 35px;
  @media ${QUERIES.phoneAndSmaller} {
    line-height: 1.3;
  }
`;

const Start = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  :hover {
    text-decoration-line: underline;
    transition: all 0.5s;
  }
`;

const BottomContent = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const QualityText = styled.p`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-block: 10px;
`;

const SubQualityText = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-top: 0;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
  }
`;
