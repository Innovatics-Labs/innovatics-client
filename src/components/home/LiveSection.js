import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Button from "../Button";
import { TextWithColor } from "./Practicality";
import InsetSection from "../InsetSection";
import LineGradient from "../LineGradient";
import BlueCurve from "../../assets/images/curve-gradient-blue.png";
import { QUERIES } from "../../constants";
import { Animate } from "../Animations/AnimateIn";
import { BsPlayBtn } from "react-icons/bs";

const FeaturedSection = () => {
  return (
    <InsetSection>
      <GradientContainer>
        <LineGradient
          colorFrom={`#8B90FF00 , #8B90FFCF, #8B90FF`}
          colorTo={`#8B90FFD2, #8B90FF00 `}
        />
        <CurveContainer>
          <Image src={BlueCurve} alt="" />
        </CurveContainer>
      </GradientContainer>
      <TextContent>
        <Animate.SlideInLeft>
          <Button
            title={"Live Courses"}
            variant={"outline"}
            color={"white"}
            borderColor={"#8B90FF"}
            size={`18px`}
            rounded
          />
          <QualityText>
            <TextWithColor color="#8B90FF">100% Live</TextWithColor>
          </QualityText>
          <SubQualityText>
            Join our live sessions where we discuss futuristic technologies
          </SubQualityText>
        </Animate.SlideInLeft>
        <div>
          <Button
            title={"Watch Us Live"}
            variant="outline"
            IconLeft={<BsPlayBtn />}
          />
        </div>
      </TextContent>
    </InsetSection>
  );
};

export default FeaturedSection;

const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
`;

const CurveContainer = styled.div`
  height: 50%;
  margin-right: -2rem;
  img {
    height: 100%;
    /* width: auto; */
    object-fit: contain;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const TextContent = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 2rem;
  }
`;

const QualityText = styled.p`
  font-weight: 600;
  font-size: clamp(1.5rem, 4.881vw + -0.33rem, 4.063rem);
  margin-block: 10px;
`;

const SubQualityText = styled.p`
  font-weight: 500;
  font-size: clamp(0.875rem, 1.667vw + 0.25rem, 1.75rem);
  margin-top: 0;
  width: 35ch;

  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  }
`;
