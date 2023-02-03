import React from "react";
import styled from "styled-components";
import Image from "next/image";

import InsetSection from "./InsetSection";
import LineGradient from "./LineGradient";
import BlueCurve from "../assets/images/curve-gradient-blue.png";
import Button from "./Button";
import { TextWithColor } from "./Practicality";

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
        <Button
          title={"Featured Courses"}
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
`;

const TextContent = styled.div`
  align-self: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const QualityText = styled.p`
  font-weight: 600;
  font-size: 50px;
  margin-block: 10px;
`;

const SubQualityText = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-top: 0;
  width: 70%;
`;
