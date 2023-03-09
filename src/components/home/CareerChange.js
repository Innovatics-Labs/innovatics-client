import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

import Button from "../Button";
import UnstyledButton from "../UnstyledButton";
import LineGradient from "../LineGradient";
import InsetSection from "../InsetSection";
import { TextWithColor } from "./Practicality";
import cloud from "../../assets/images/cloud.png";
import PurpleCurve from "../../assets/images/curve-gradient-purple.png";
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

const CareerChange = () => {
  return (
    <InsetSection bgImage={"/galaxy.png"}>
      <GradientContainer>
        <LineGradient
          colorFrom={`#DD56FF00, #DD56FFCF, #DD56FF`}
          colorTo={`#DD56FFD2, #DD56FF00`}
        />
        <CurveContainer>
          <Image src={PurpleCurve} alt="" />
        </CurveContainer>
      </GradientContainer>
      <Content>
        <TopContent>
          <TextContent>
            <Title>
              <Animate.SlideInLeft>
                <TextWithColor color="#DD56FF">
                  Our career change and job placement
                </TextWithColor>{" "}
                services provide you with the resources and support you need to
                succeed.
              </Animate.SlideInLeft>
            </Title>
            <Start>
              <UnstyledButton>Start learning</UnstyledButton>
              <MdKeyboardArrowRight color={"#8691A6"} size={24} />
            </Start>
          </TextContent>
          <ImageContent>
            <Animate.SlideInRight>
              <Image src={cloud} alt={""} sizes="100vw" />
            </Animate.SlideInRight>
          </ImageContent>
        </TopContent>
        <BottomContent>
          <Animate.SlideInLeft>
            <Button
              title={"Why Innovatics?"}
              variant={"outline"}
              borderColor={"#DD56FF"}
              size={`18px`}
              rounded
            />
            <QualityText>
              <TextWithColor color="#DD56FF">
                Career Changes and Job Placement
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

export default CareerChange;
