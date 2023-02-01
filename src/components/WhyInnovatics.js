import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

import Button from "./Button";
import LineGradient from "./LineGradient";
import { TextWithColor } from "./Practicality";
import labRunning from "../assets/images/labRunningLarg.png";
import GreenCurve from "../assets/images/curve-gradient-green.png";
import InsetSection from "./InsetSection";

const WhyInnovatics = () => {
  return (
    <InsetSection bgImage={"/galaxy.png"}>
      <GradientContainer>
        <LineGradient
          colorFrom={`#10C75900, #10C759CF, #10C759`}
          colorTo={`#10C759D2 83.25%, #10C75900`}
        />
        <CurveContainer>
          <Image src={GreenCurve} alt="" />
        </CurveContainer>
      </GradientContainer>
      <Content>
        <TopContent>
          <TextContent>
            <Title>
              <TextWithColor color="#44E986">Python Lab</TextWithColor> for you
              to exercise what you learnt from our expert instructor-led video
              trainings.
            </Title>
            <Start>
              <span>Start learning</span>
              <MdKeyboardArrowRight color={"#8691A6"} size={24} />
            </Start>
          </TextContent>
          <div>
            <Image src={labRunning} alt={""} />
          </div>
        </TopContent>
        <BottomContent>
          <Button
            title={"Why Innovatics?"}
            variant={"outline"}
            color={"#44E986"}
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
        </BottomContent>
      </Content>
    </InsetSection>
  );
};

export default WhyInnovatics;

const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 2px;
`;

const CurveContainer = styled.div`
  margin-right: -2rem;
  img {
    height: 300px;
    object-fit: contain;
    transform: translateY(7rem);
  }
`;

const Content = styled.div`
  margin-bottom: 4rem;
`;

const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  /* margin-inline: 2rem; */
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const TextContent = styled.div``;

const Title = styled.h3`
  font-weight: 600;
  font-size: 27px;
  line-height: 35px;
`;

const Start = styled.p`
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const BottomContent = styled.div`
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
