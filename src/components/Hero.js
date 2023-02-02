import Image from "next/image";
import styled from "styled-components";
import heroimage from "../assets/images/earth-gb512373bb_1280 1.png";
import herodrone from "../assets/images/hero-drone 1.png";
import campaigLines from "../assets/images/hero-campaig-lines.png";
import downarrow from "../assets/images/Group 2.png";
import kpmgLogo from "../assets/images/kpmg-logo.png";
import mercedes from "../assets/images/mercedes.png";
import pinterest from "../assets/images/pinterest.png";
import { GiStarsStack } from "react-icons/gi";
import Button from "./Button";
import GradientIcon from "./GradientIcon";
import LineGradient from "./LineGradient";

const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <Image src={heroimage} alt={"earth hero"} />
      </ImageContainer>
      <HeroCampaign>
        <div>
          <HeroDrone src={herodrone} alt={"hero drone"} />
          <HeroContentContainer>
            <LineContainer>
              <LineImage>
                <Image src={campaigLines} alt={"campaign lines"} priority />
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
                knowledge in Networking, Cyber Security, Cloud and Data Science.
              </SubHeading>
              <ButtonGroup>
                <Button title="Start Learning Now" />
                <Button title="Join the next Live Cohort" variant={"outline"} />
              </ButtonGroup>
              <DataCompany>
                <JoinCompany>
                  Join the world leading data driven companies
                  <Image src={downarrow} alt="" />
                </JoinCompany>
                <DataCompanyImages>
                  <Image src={kpmgLogo} alt="" />
                  <Image src={mercedes} alt="" />
                  <Image src={pinterest} alt="" />
                </DataCompanyImages>
              </DataCompany>
            </HeroDetails>
          </HeroContentContainer>
        </div>
      </HeroCampaign>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.header`
  max-width: 100vw;
  background-image: linear-gradient(
    rgba(13, 17, 23, 0.1) 0%,
    rgba(13, 17, 23, 0.9) 30%,
    rgba(13, 17, 23) 45%
  );
`;

const ImageContainer = styled.div`
  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
    overflow: hidden;
    z-index: -1;
    position: absolute;
    top: 0;
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
`;

const HeroDrone = styled(Image)`
  position: absolute;
  right: 0;
  padding-right: 3rem;
  object-fit: contain;
  height: auto;
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
`;

const HeroDetails = styled.div`
  flex: 1;
  margin-top: 10rem;
  padding-top: 2rem;
  isolation: isolate;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 65px;
  color: white;
  width: 80%;
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 55px;
  color: #8b949e;
  width: 80%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-block: 2.5rem;
`;

const DataCompany = styled.div`
  color: #8b949e;
  padding-block: 2rem;
`;

const JoinCompany = styled.p`
  font-weight: 400;
  font-size: 24px;
  margin-block: 2rem;
  img {
    margin-inline: 1rem;
  }
`;

const DataCompanyImages = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
