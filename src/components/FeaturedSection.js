import React from "react";
import styled from "styled-components";
import Image from "next/image";

import InsetSection from "./InsetSection";
import LineGradient from "./LineGradient";
import RedCurve from "../assets/images/curve-gradient-red.png";
import Button from "./Button";
import { TextWithColor } from "./Practicality";

const FeaturedSection = () => {
  return (
    <InsetSection>
      <GradientContainer>
        <LineGradient
          colorFrom={`#EA604500 , #EA6045CF, #EA6045`}
          colorTo={`#EA6045D2, #EA604500 `}
        />
        <CurveContainer>
          <Image src={RedCurve} alt="" />
        </CurveContainer>
      </GradientContainer>
      <BottomContent>
        <Button
          title={"Why Innovatics?"}
          variant={"outline"}
          color={"white"}
          borderColor={"#EA6045"}
          size={`18px`}
          rounded
        />
        <QualityText>
          <TextWithColor color="#EA6045">99.9% Quality</TextWithColor>
        </QualityText>
        <SubQualityText>
          on all courses until August 29th 2023. Hurry Now!
        </SubQualityText>
      </BottomContent>
    </InsetSection>
  );
};

export default FeaturedSection;

const GradientContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CurveContainer = styled.div`
  height: 50%;
  margin-right: -2rem;
  img {
    height: 100%;
    object-fit: contain;
  }
`;

const BottomContent = styled.div`
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
`;
