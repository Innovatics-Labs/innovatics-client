import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

import Button from "../Button";
import UnstyledButton from "../UnstyledButton";
import LineGradient from "../LineGradient";
import InsetSection from "../InsetSection";
import { TextWithColor } from "./Practicality";
import bulb from "../../assets/images/lightbulb.png";
import RedCurve from "../../assets/images/curve-gradient-red.png";
import { Animate } from "../Animations/AnimateIn";
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

const InnovationService = () => {
  return (
    <InsetSection bgImage={"/galaxy.png"}>
      <GradientContainer>
        <LineGradient
          colorFrom={`#10C75900, #EA6045CF, #EA6045`}
          colorTo={`#EA6045D2, #10C75900`}
        />
        <CurveContainer>
          <Image src={RedCurve} alt="" />
        </CurveContainer>
      </GradientContainer>
      <Content>
        <TopContent>
          <TextContent>
            <Title>
              <Animate.SlideInLeft>
                <TextWithColor color="#EA6045">
                  Our innovation and development services
                </TextWithColor>{" "}
                help you identify opportunities for growth and stay at the
                forefront of industry trends.
              </Animate.SlideInLeft>
            </Title>
            <Start>
              <UnstyledButton>Start learning</UnstyledButton>
              <MdKeyboardArrowRight color={"#8691A6"} size={24} />
            </Start>
          </TextContent>
          <ImageContent>
            <Animate.SlideInRight>
              <Image src={bulb} alt={""} sizes="100vw" />
            </Animate.SlideInRight>
          </ImageContent>
        </TopContent>
        <BottomContent>
          <Animate.SlideInLeft>
            <Button
              title={"Why Innovatics?"}
              variant={"outline"}
              borderColor={"#EA6045"}
              size={`18px`}
              rounded
            />
            <QualityText>
              <TextWithColor color="#EA6045">
                Innovation and Development
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

export default InnovationService;
