import styled from "styled-components";
import { BsCollectionPlay } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";

import travels from "../../assets/images/travels.png";
import exploring from "../../assets/images/exploring.png";
import landscape from "../../assets/images/landscape.png";
import ServiceHero from "../../components/services/Hero";
import LineGradient from "../../components/LineGradient";
import { GradientDivider } from "../services/career-change";
import { DetailSection, ServiceContent } from "../services/training";
import {
  ServiceTitle,
  ServiceDescription,
  ServiceCardContent,
  ServiceCardContainer,
  ImageContainer,
} from "../../components/services/ServiceCard";
import Button from "../../components/Button";
import Image from "next/image";
import { QUERIES } from "../../constants";
import JoinDiscord from "../../components/JoinDiscord";

const Community = () => {
  return (
    <div>
      <ServiceHero
        bgImage="/digitization.png"
        headline="Tech Community"
        subtitle={
          "we are always looking for talented and motivated individuals to join our team."
        }
      />
      <DetailSection>
        <ServiceContent>
          <GradientDivider>
            <LineGradient
              height="100px"
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </GradientDivider>
          <div>
            <CommunityCardContainer reverse>
              <ImageContainer>
                <Image src={travels} alt="" sizes="100vw" />
              </ImageContainer>
              <CommunityCardContent>
                <CommunityTitle>
                  Community is worthwhile in itself
                </CommunityTitle>
                <CommunityDescription>
                  Join our community today and let us help you achieve your
                  goals in the exciting world of technology!
                </CommunityDescription>
                <Button
                  bgColor={"linear-gradient(90deg, #578DFF 0%, #DD56FF 100%)"}
                  title="Join Now"
                />
              </CommunityCardContent>
            </CommunityCardContainer>
            <CommunityCardContainer>
              <ImageContainer>
                <Image src={exploring} alt="" sizes="100vw" />
              </ImageContainer>
              <CommunityCardContent>
                <CommunityTitle>
                  Life is either a daring adventure or nothing
                </CommunityTitle>
                <CommunityDescription>
                  Welcome to our community page! We are a company that offers
                  comprehensive services in the field of technology, including
                  training, job placement, consulting, and innovation. Our
                  mission is to help individuals and businesses thrive in the
                  ever-evolving world of technology.
                </CommunityDescription>
              </CommunityCardContent>
            </CommunityCardContainer>
          </div>
          <GradientDivider>
            <LineGradient
              height="70px"
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </GradientDivider>
          <ExperienceWithus>
            <h4>What you’ll experience with us!</h4>
            <GradientDivider>
              <LineGradient
                height="50px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <ExperienceList>
              <ExperienceItem>
                <ExperienceTitle>
                  <BsCollectionPlay size={24} />
                  Training
                </ExperienceTitle>
                <p>
                  Our training programs are designed to equip individuals with
                  the necessary skills to succeed in the technology industry.
                </p>
              </ExperienceItem>
              <ExperienceItem>
                <ExperienceTitle>
                  <IoBookOutline size={24} />
                  Placement
                </ExperienceTitle>
                <p>
                  Whether you are a recent graduate or a seasoned professional,
                  we can help you find the right job in the technology industry.
                </p>
              </ExperienceItem>
              <ExperienceItem>
                <ExperienceTitle>
                  <BiSupport size={24} />
                  Consulting
                </ExperienceTitle>
                <p>
                  Our team of experts has years of experience in technology
                  consulting and can help your business stay ahead of the curve.
                </p>
              </ExperienceItem>
            </ExperienceList>
          </ExperienceWithus>
          <CommunityCardContainer reverse>
            <ImageContainer>
              <Image src={landscape} alt="" sizes="100vw" />
            </ImageContainer>
            <CommunityCardContent>
              <CommunityTitle>We’d Love to Hear from You</CommunityTitle>
              <CommunityDescription>
                Please submit your information and a advent representative will
                get in touch with you
              </CommunityDescription>
              <Apply>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email here"
                />
                <Button
                  bgColor={"linear-gradient(90deg, #578DFF 0%, #DD56FF 100%)"}
                  title="Apply Now"
                />
              </Apply>
            </CommunityCardContent>
          </CommunityCardContainer>
        </ServiceContent>
      </DetailSection>
      <JoinDiscord />
    </div>
  );
};

export default Community;

const CommunityCardContainer = styled(ServiceCardContainer)`
  button {
    border: none;
  }
  ${({ reverse }) => reverse && `flex-direction:row-reverse;`}
  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const CommunityCardContent = styled.div`
  flex: 1;
  align-self: center;
`;

const CommunityImageContainer = styled(ImageContainer)``;

const CommunityTitle = styled(ServiceTitle)`
  font-size: clamp(1.75rem, 3.214vw + 0.545rem, 3.1rem);
`;

const CommunityDescription = styled(ServiceDescription)``;

const ExperienceWithus = styled.div`
  text-align: center;

  h4 {
    font-weight: 700;
    font-size: 36px;
  }
`;
const ExperienceList = styled.ul`
  display: flex;
  text-align: left;
  gap: 2rem;
  list-style: none;
  padding-left: 0;
  @media ${QUERIES.tabletAndSmaller} {
    flex-wrap: wrap;
    text-align: center;
  }
`;
const ExperienceItem = styled.li``;
const ExperienceTitle = styled.p`
  font-weight: 700;
  font-size: 26px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
  }
`;

const Apply = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  button {
    border: none;
  }

  input {
    min-height: 50px;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: transparent;
    color: #828282;
    text-align: center;
  }
`;
