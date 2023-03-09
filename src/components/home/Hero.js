import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { GiFallingStar } from "react-icons/gi";
import { FiChevronRight } from "react-icons/fi";

import { QUERIES } from "../../constants";
import Button from "../Button";
import { MaxwidthContainer } from "../GlobalStyles";
import GradientIcon from "../GradientIcon";
import LineGradient from "../LineGradient";
import heroimage from "../../assets/images/earth-gb512373bb_1280 1.png";
import herodrone from "../../assets/images/hero-drone 1.png";
import campaigLines from "../../assets/images/hero-campaig-lines.png";
import Link from "next/link";

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
                  IconComponent={<GiFallingStar size={40} color={"#fff"} />}
                  bgColor="#dd7df7"
                />
              </LineContainer>
              <HeroDetails>
                <Heading>Welcome to Innovatics</Heading>
                <SubHeading>
                  A platform where we offer a range of services to help
                  individuals and organizations to excel in the ever-evolving
                  world of technology. We specialize in four key areas: data
                  science, cloud engineering, software engineering, and
                  networking. Whether you are looking to learn new skills,
                  consult with experts, or find your next job, we are here to
                  support you every step of the way.
                </SubHeading>
                <ButtonGroup>
                  <Button
                    as={Link}
                    href="/signIn"
                    title="Start Learning Now"
                    hover={true}
                  />
                  <Button
                    as={Link}
                    href="/bootcamps"
                    IconRight={<FiChevronRight size={20} />}
                    title="Explore  other services"
                    variant={"outline"}
                  />
                </ButtonGroup>
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
  padding-bottom: var(--container-padding);
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

const floatUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeroDrone = styled(Image)`
  position: absolute;
  right: 0;
  padding-right: 3rem;
  object-fit: contain;
  height: auto;
  animation: ${floatUpDown} 2s ease-in-out infinite;

  @media (prefers-reduced-motion) {
    animation: dissolve 2s linear infinite both;
  }

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
  gap: 2rem;
  width: 9%;
  margin: 0 auto;

  svg {
    transform: translateX(-5px);
  }
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
      object-fit: cover;
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
  margin-bottom: 1rem;
  color: white;
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: var(--font-size-2md);
  line-height: 1.5;
  color: #8b949e;
  max-width: 85%;
  margin-bottom: 2.5rem;
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
