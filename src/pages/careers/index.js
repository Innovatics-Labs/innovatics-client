import React from "react";
import { FaChartBar, FaGraduationCap } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import styled from "styled-components";
import JoinDiscord from "../../components/JoinDiscord";
import LineGradient from "../../components/LineGradient";
import ServiceHero from "../../components/services/Hero";
import { GradientDivider } from "../services/career-change";
import { DetailSection, ServiceContent } from "../services/training";
import Button from "../../components/Button";
import { BsArrowRight } from "react-icons/bs";
import { QUERIES } from "../../constants";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import Link from "next/link";

const Careers = () => {
  return (
    <div>
      <ServiceHero
        bgImage="/computer-desk-2.png"
        headline="Join Us"
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
          <BenefitsSection>
            <BenefitsIntro>
              <Headline>Benefits</Headline>
              <SubHeading>Why you Should Join Our Awesome Team</SubHeading>
              <Description>
                we want to feel like home when you are working at Innovatics &
                for that we have curated a great set of benefits for you. It all
                starts with the free lunch!
              </Description>
            </BenefitsIntro>
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <BenefitsFeatures>
              <BenefitsList>
                <BenefitsItem>
                  <FeatureIcon>
                    <RiTeamLine />
                  </FeatureIcon>
                  <h5>Team work</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                </BenefitsItem>
                <BenefitsItem>
                  <FeatureIcon>
                    <IoReload />
                  </FeatureIcon>
                  <h5>Secured Future</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                </BenefitsItem>
                <BenefitsItem>
                  <FeatureIcon>
                    <FaGraduationCap />
                  </FeatureIcon>
                  <h5>Learning Opportunity</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                </BenefitsItem>
                <BenefitsItem>
                  <FeatureIcon>
                    <FaChartBar />
                  </FeatureIcon>
                  <h5>Upgrade Skills</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry.
                  </p>
                </BenefitsItem>
              </BenefitsList>
            </BenefitsFeatures>
          </BenefitsSection>
        </ServiceContent>
      </DetailSection>
      <OpeningsSection>
        <GradientDivider>
          <LineGradient
            height="100px"
            colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
            colorTo="hsla(144, 85%, 42%, 0)"
          />
        </GradientDivider>
        <div style={{ color: "black", textAlign: "center" }}>
          <Headline>Come join us</Headline>
          <SubHeading>Career Openings</SubHeading>
          <Description>
            We’re always looking for creative, talented self-starters to join
            the JMC family. Check out our open roles below and fill out an
            application.
          </Description>
        </div>
        <div>
          <AvailableOpenings>
            <CareerCategory>
              <CategoryItem active>Engineering (4)</CategoryItem>
              <CategoryItem>HT & Admin</CategoryItem>
              <CategoryItem>Support</CategoryItem>
            </CareerCategory>
            <CategoryJobs>
              <JobListings>
                <Link href="">
                  <JobItem>
                    <li>
                      <p>Java Developer</p>
                    </li>
                    <li>
                      <JobDetailType>Experience</JobDetailType>
                      <p>1 Years</p>
                    </li>
                    <li>
                      <JobDetailType>Deadline</JobDetailType>
                      <p>2021-05-08</p>
                    </li>
                    <li>
                      <BsArrowRight color="#D4D4D4" />
                    </li>
                  </JobItem>
                </Link>
                <Link href="">
                  <JobItem>
                    <li>
                      <p>DevOps Engineer</p>
                    </li>
                    <li>
                      <JobDetailType>Experience</JobDetailType>
                      <p>5 Years</p>
                    </li>
                    <li>
                      <JobDetailType>Deadline</JobDetailType>
                      <p>2021-05-08</p>
                    </li>
                    <li>
                      <BsArrowRight color="#D4D4D4" />
                    </li>
                  </JobItem>
                </Link>
                <Link href="">
                  <JobItem>
                    <li>
                      <p>Data Scientist</p>
                    </li>
                    <li>
                      <JobDetailType>Experience</JobDetailType>
                      <p>2 Years</p>
                    </li>
                    <li>
                      <JobDetailType>Deadline</JobDetailType>
                      <p>2021-05-08</p>
                    </li>
                    <li>
                      <BsArrowRight color="#D4D4D4" />
                    </li>
                  </JobItem>
                </Link>
              </JobListings>
            </CategoryJobs>
          </AvailableOpenings>
        </div>
      </OpeningsSection>
      <ContactFormSection>
        <Contactcontainer>
          <SubHeading>Can’t find what you’re looking for?</SubHeading>
          <Description>
            Experience the live interactive classes with our world-class
            instructors and mentors in the upcoming Bootcamp.
          </Description>
          <MessageContainer>
            <Label htmlFor="">
              <p>EMAIL</p>
              <Input type="email" placeholder="abdullahumar@gmail.com" />
            </Label>
            <Label>
              <p>MESSAGE</p>
              <Message name="" id="" cols="30" rows="10"></Message>
            </Label>
            <Button
              title={"Send"}
              variant="outline"
              borderColor={"white"}
              color="white"
            />
          </MessageContainer>
        </Contactcontainer>
      </ContactFormSection>
      <JoinDiscord />
    </div>
  );
};

export default Careers;

const BenefitsSection = styled.div``;

const BenefitsIntro = styled.div`
  text-align: center;
`;

const Headline = styled.h4`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
`;

const SubHeading = styled.h6`
  font-weight: 700;
  font-size: 36px;
  margin-block: 10px;
`;

const Description = styled.p`
  max-width: 70ch;
  margin-inline: auto;
`;

const BenefitsFeatures = styled.div`
  padding-block: 4rem;
`;

const BenefitsList = styled.ul`
  padding-left: 0;
  width: 70%;
  margin-inline: auto;
  place-items: center;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: revert;
    width: revert;
    text-align: center;
  }
`;

const BenefitsItem = styled.li`
  h4 {
    font-weight: 700;
  }

  p {
    color: gray;
  }
`;

const FeatureIcon = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
  color: gray;
  width: fit-content;
  font-size: 24px;
  @media ${QUERIES.phoneAndSmaller} {
    margin-inline: auto;
  }
`;

const AvailableOpenings = styled(MaxwidthContainer)`
  margin-block: 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: revert;
    gap: 2rem;
  }
`;

const CareerCategory = styled.ul`
  list-style: none;
  color: #0d1117;
  width: fit-content;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    justify-content: center;
    padding-left: 0;
    gap: 1rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    justify-content: revert;
  }
`;

const CategoryItem = styled.li`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  cursor: pointer;
  ${({ active }) => active && `color: #10C759;`}
`;

const CategoryJobs = styled.div``;

const JobListings = styled.div`
  flex: 1;
  width: 100%;
`;

const JobItem = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  gap: 2rem;
  list-style: none;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  align-items: center;
  li {
    font-weight: 500;
    font-size: 24px;
    color: #0d1117;
  }

  @media ${QUERIES.tabletAndSmaller} {
    li {
      font-size: 20px;
    }
  }
  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const JobDetailType = styled.span`
  color: #d4d4d4;
  font-size: 16px;
`;

const ContactFormSection = styled.section`
  background: linear-gradient(90deg, #6567c3 0%, #5f5aff 100%);
`;

const Contactcontainer = styled(MaxwidthContainer)`
  padding: 4rem;
  display: grid;
  place-items: center;

  ${SubHeading},${Description} {
    color: white;
    text-align: center;
  }
`;

const MessageContainer = styled.div`
  width: min(400px, 100%);
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  width: 100%;
  padding: 0.5rem;
  color: white;

  ::placeholder {
    color: white;
    opacity: 0.2;
  }
`;

const Message = styled.textarea`
  border: 1px solid white;
  background-color: transparent;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1.5rem;
  p {
    font-weight: 500;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
  }
`;

const OpeningsSection = styled.section`
  padding: 2rem var(--container-padding);
`;
