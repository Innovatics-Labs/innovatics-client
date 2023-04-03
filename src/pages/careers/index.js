import React from "react";
import LineGradient from "../../components/LineGradient";
import ServiceHero from "../../components/services/Hero";
import { GradientDivider } from "../services/career-change";
import { DetailSection } from "../services/training";

const Careers = () => {
  return (
    <div>
      <ServiceHero
        bgImage="/digitization.png"
        headline="Join Us"
        subtitle={
          "we are always looking for talented and motivated individuals to join our team."
        }
      />
      <DetailSection>
        <GradientDivider>
          <LineGradient
            height="100px"
            colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
            colorTo="hsla(144, 85%, 42%, 0)"
          />
        </GradientDivider>
      </DetailSection>
    </div>
  );
};

export default Careers;
