import Image from "next/image";
import styled from "styled-components";
import { GiStarsStack } from "react-icons/gi";

import { QUERIES } from "../../constants";
import Button from "../Button";
import { MaxwidthContainer } from "../GlobalStyles";
import GradientIcon from "../GradientIcon";
import LineGradient from "../LineGradient";
import heroimage from "../../assets/images/earth-gb512373bb_1280 1.png";
import herodrone from "../../assets/images/hero-drone 1.png";
import campaigLines from "../../assets/images/hero-campaig-lines.png";
import downarrow from "../../assets/images/Group 2.png";
import kpmgLogo from "../../assets/images/kpmg-logo.png";
import mercedes from "../../assets/images/mercedes.png";
import pinterest from "../../assets/images/pinterest.png";
import { Animate } from "../Animations/AnimateIn";

const Hero = () => {
  return (
    <HeroContainer>
      <MaxwidthContainer>
        <ImageContainer>
          <Image src={heroimage} alt={"earth hero"} />
        </ImageContainer>
        <HeroCampaign>
          <div>
            <HeroDrone src={herodrone} alt={"hero drone"} />
            <HeroContentContainer>
              <LineContainer>
                <LineImage>
                  <Image
                    src={campaigLines}
                    alt={"campaign lines"}
                    priority
                    sizes="100vw"
                  />
                </LineImage>
                <GradientIcon
                  IconComponent={<GiStarsStack size={40} color={"#fff"} />}
                  bgColor="#dd7df7"
                />
                <LineGradient colorFrom={"#dd7df7"} colorTo={"#10c759"} />
              </LineContainer>
              <HeroDetails>
                <Heading>Hands-On Virtual Labs</Heading>
                <SubHeading>
                  Take along with Learn from expert instructors and prove your
                  knowledge in Networking, Cyber Security, Cloud and Data
                  Science.
                </SubHeading>
                <ButtonGroup>
                  <Button title="Start Learning Now" />
                  <Button
                    title="Join the next Live Cohort"
                    variant={"outline"}
                  />
                </ButtonGroup>
                <DataCompany>
                  <JoinCompany>
                    <span>Join the world leading data driven companies</span>
                    <Image src={downarrow} alt="" />
                  </JoinCompany>
                  <DataCompanyImages>
                    <Image src={kpmgLogo} alt="" sizes="100vw" />
                    <Image src={mercedes} alt="" sizes="100vw" />
                    <Image src={pinterest} alt="" sizes="100vw" />
                  </DataCompanyImages>
                </DataCompany>
              </HeroDetails>
            </HeroContentContainer>
          </div>
        </HeroCampaign>
      </MaxwidthContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.header`
  background-image: linear-gradient(
    rgba(13, 17, 23, 0.1) 0%,
    rgba(13, 17, 23, 0.9) 30%,
    rgba(13, 17, 23) 45%
  );
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  img {
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    /* height: auto; */
  }
`;

const HeroCampaign = styled.section`
  padding-inline: var(--container-padding);
  margin-top: 5rem;
  position: relative;
  padding-bottom: 10px;
`;

const HeroContentContainer = styled.div`
  display: flex;
  @media ${QUERIES.tabletAndSmaller} {
    gap: 1.5rem;
  }
`;

const HeroDrone = styled(Image)`
  position: absolute;
  right: 0;
  padding-right: 3rem;
  object-fit: contain;
  height: auto;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  position: relative;
  gap: 1.5rem;
  width: 9%;
  margin: 0 auto;
`;

const LineImage = styled.div`
  margin: 0 auto;
  align-self: flex-end;
  transform: translateX(1rem);

  @media ${QUERIES.tabletAndSmaller} {
    width: 70vw;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const HeroDetails = styled.div`
  flex: 1;
  margin-top: 10rem;
  padding-top: 2rem;
  isolation: isolate;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 5rem;
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: var(--font-size-4xl);
  color: white;
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: var(--font-size-xl);
  line-height: clamp(1.6rem, 5vw - 1rem, 3.438rem);
  color: #8b949e;
  max-width: 85%;
  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
    width: 70vw;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-block: clamp(1rem, 1.19vw + 0.429rem, 2rem);
  flex-wrap: wrap;
  @media ${QUERIES.tabletAndSmaller} {
    button {
      width: 100%;
      padding: 10px;
    }
  }
`;

const DataCompany = styled.div`
  color: #8b949e;
  padding-block: 2rem;
  margin-bottom: 1rem;
`;

const JoinCompany = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: clamp(0.875rem, 1.19vw + 0.429rem, 1.5rem);
  margin-block: clamp(1rem, 1.19vw + 0.429rem, 2rem);
  img {
    margin-inline: 1rem;
  }
`;

const DataCompanyImages = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;
