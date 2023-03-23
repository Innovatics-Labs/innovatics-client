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
      <TextContent>
        <QualityText>
          <TextWithColor color="white">
            Watch our INNOVATICS LIVE videos
          </TextWithColor>
        </QualityText>
        <SubQualityText>
          Check out our INNOVATICS Live to see what hot topics we’re talking
          about next! Don’t forget to follow us on social media for a heads up
          on when we go live with breaking news events or other announcements.
        </SubQualityText>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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

const TextContent = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  flex-wrap: wrap;
  margin-inline: auto;
  justify-content: space-between;
  gap: 1.5rem;
  padding-bottom: 2rem;
  /* @media ${QUERIES.phoneAndSmaller} {
    margin-left: 2rem;
  } */
`;

const QualityText = styled.p`
  font-weight: 600;
  font-size: clamp(1.5rem, 4.881vw + -0.33rem, 3rem);
  margin-block: 10px;
`;

const SubQualityText = styled.p`
  margin-top: 0;

  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  }
`;
