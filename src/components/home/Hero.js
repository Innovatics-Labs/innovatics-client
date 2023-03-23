import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { QUERIES } from "../../constants";
import Button from "../Button";
import { MaxwidthContainer } from "../GlobalStyles";
import heroGroup from "../../assets/images/hero-group.png";
import downarrow from "../../assets/images/Group 2.png";
import kpmgLogo from "../../assets/images/kpmg-logo.png";
import mercedes from "../../assets/images/mercedes.png";
import pinterest from "../../assets/images/pinterest.png";
import RadialGradient from "../gradients/RadialGradient";

const Hero = () => {
  return (
    <HeroContainer>
      <MaxwidthContainer>
        <HeroCampaign>
          <RadialGradient top="100px" right="100px" />
          <RadialGradient
            gradient=" #074BC9 17.55%, #074BC9 27.56%, rgba(7, 75, 201, 0.45) 49.89%, rgba(7, 75, 201, 0.52) 56.53%, #074BC9 65.69%"
            top="200px"
            right="350px"
          />
          <HeroContentContainer>
            <HeroDetails>
              <Heading>
                Innovating robust Technical solutions for Businesses
              </Heading>
              <SubHeading>
                We train and provide you opportunities in the vast competitive
                tech space while providing innovative solutions to business that
                needs proficient contractors.
              </SubHeading>
              <ButtonGroup>
                <Button
                  as={Link}
                  href="/signIn"
                  title="Get Started Now"
                  bgColor={"white"}
                  color="#121212"
                  hover={true}
                />
                <Button
                  as={Link}
                  href="/bootcamps"
                  title="Request Information"
                  variant={"outline"}
                />
              </ButtonGroup>
            </HeroDetails>
            <HeroImages>
              <ImagesContainer>
                <Image src={heroGroup} alt="" sizes="100vw" />
              </ImagesContainer>
            </HeroImages>
          </HeroContentContainer>
          {/* <DataCompany>
            <JoinCompany>
              <span>Join the world leading data driven companies</span>
              <Image src={downarrow} alt="" />
            </JoinCompany>
            <DataCompanyImages>
              <Image src={kpmgLogo} alt="" sizes="100vw" />
              <Image src={mercedes} alt="" sizes="100vw" />
              <Image src={pinterest} alt="" sizes="100vw" />
            </DataCompanyImages>
          </DataCompany> */}
        </HeroCampaign>
      </MaxwidthContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.header`
  padding-bottom: var(--container-padding);
  background: linear-gradient(90deg, #7d37c8, #492b8c, #2d215b, #16141c);
`;

const HeroCampaign = styled.section`
  padding-inline: var(--container-padding);
  padding-bottom: 10px;
  position: relative;
  isolation: isolate;
`;

const HeroContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 10rem;
  @media ${QUERIES.tabletAndSmaller} {
    gap: 2rem;
  }
`;

const HeroDetails = styled.div`
  flex: 1;

  padding-top: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 5rem;
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-bottom: 1rem;
  color: white;
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: #ffffff;
  max-width: 50ch;
  margin-bottom: 2.5rem;
  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
    width: 70vw;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: revert;
    width: revert;
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

const HeroImages = styled.div``;

const ImagesContainer = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

const DataCompany = styled.div`
  color: white;
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
