import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

import Button from "../Button";
import UnstyledButton from "../UnstyledButton";
import LineGradient from "../LineGradient";
import InsetSection from "../InsetSection";
import { TextWithColor } from "./Practicality";
import hands from "../../assets/images/hands.png";
import BlueCurve from "../../assets/images/curve-gradient-blue.png";
import {
  GradientContainer,
  CurveContainer,
  Content,
  TopContent,
  TextContent,
  ImageContent,
  Title,
  Start,
  BottomContent,
  QualityText,
  SubQualityText,
} from "./servicesStyle";
import { Animate } from "../Animations/AnimateIn";

const Consulting = () => {
  return (
    <InsetSection bgImage={"/galaxy.png"}>
      <GradientContainer>
        <LineGradient
          colorFrom={`#10C75900, #8B90FFCF, #8B90FF`}
          colorTo={`#8B90FFD2, #10C75900`}
        />
        <CurveContainer>
          <Image src={BlueCurve} alt="" />
        </CurveContainer>
      </GradientContainer>
      <Content>
        <TopContent>
          <TextContent>
            <Title>
              <Animate.SlideInLeft>
                <TextWithColor color="#8B90FF">
                  Our team of experts
                </TextWithColor>{" "}
                has years of experience in the tech industry, and we are here to
                help you with any challenges you may face.
              </Animate.SlideInLeft>
            </Title>
            <Start>
              <UnstyledButton>Start learning</UnstyledButton>
              <MdKeyboardArrowRight color={"#8691A6"} size={24} />
            </Start>
          </TextContent>
          <ImageContent>
            <Animate.SlideInRight>
              <Image src={hands} alt={""} sizes="100vw" />
            </Animate.SlideInRight>
          </ImageContent>
        </TopContent>
        <BottomContent>
          <Animate.SlideInLeft>
            <Button
              title={"Why Innovatics?"}
              variant={"outline"}
              borderColor={"#8B90FF"}
              size={`18px`}
              rounded
            />
            <QualityText>
              <TextWithColor color="#8B90FF">
                Consultation and Contracting
              </TextWithColor>
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

export default Consulting;
