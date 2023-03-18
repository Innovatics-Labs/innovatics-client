import styled, { keyframes } from "styled-components";
import { FiChevronRight } from "react-icons/fi";
import { QUERIES } from "../../constants";
import Button from "../Button";
import { MaxwidthContainer } from "../GlobalStyles";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroContainer>
      <MaxwidthContainer>
        <HeroCampaign>
          <div>
            <HeroContentContainer>
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
                    title="Explore other services"
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("/herostatic3.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeroCampaign = styled.section`
  padding-inline: var(--container-padding);
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
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: #8b949e;
  max-width: 50ch;
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
