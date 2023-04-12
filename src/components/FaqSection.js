import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import styled, { keyframes } from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { QUERIES } from "../constants";

const FaqSection = ({ withBg }) => {
  return (
    <Container withBg={withBg}>
      <Heading>FAQs</Heading>
      <SubHeading>
        Before reaching out to our support team, you may find the answer to your
        question in our FAQs section. We&apos;ve compiled a list of common
        questions and concerns that our customers have had in the past, along
        with detailed answers and solutions and Job Placement Service:
      </SubHeading>
      <div>
        <AccordionRoot className="AccordionRoot">
          <AccordionItemStyled className="AccordionItem">
            <AccordionHeader className="AccordionHeader">
              <AccordionTrigger className="AccordionTrigger">
                Q: What services do you offer?
                <BiChevronDown className="AccordionChevron" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="AccordionContent">
              A: We offer a range of services including training, job placement,
              innovation, and consulting in the fields of data science, cloud
              engineering, software engineering, and networking.
            </AccordionContent>
          </AccordionItemStyled>
          <AccordionItemStyled className="AccordionItem">
            <AccordionHeader className="AccordionHeader">
              <AccordionTrigger className="AccordionTrigger">
                Q: What networking certifications do you offer training for?
                <BiChevronDown className="AccordionChevron" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="AccordionContent">
              A: We offer training for some of the most respected certifications
              in the industry. We are most known for our Cisco certification
              training, including CCNA, CCIE, and CCIE Data Center. We created
              Learning Paths that organizes our training courses into roadmaps
              that will guide you through our suggested learning journey to
              ensure efficient studying and success on your exams.
            </AccordionContent>
          </AccordionItemStyled>
          <AccordionItemStyled className="AccordionItem">
            <AccordionHeader className="AccordionHeader">
              <AccordionTrigger className="AccordionTrigger">
                Q: What if I need training for my organization?
                <BiChevronDown className="AccordionChevron" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="AccordionContent">
              A: Whether you are looking for training for your team or entire
              organization, our Business plans provide all the tools you need to
              stay on the cutting edge of the latest technologies. Contact us to
              learn more about our Business plans, get a quote, or request a
              demo.
            </AccordionContent>
          </AccordionItemStyled>
          <AccordionItemStyled className="AccordionItem">
            <AccordionHeader className="AccordionHeader">
              <AccordionTrigger className="AccordionTrigger">
                Q: What are the most in-demand programming languages?
                <BiChevronDown className="AccordionChevron" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="AccordionContent">
              A: Python is the most common language used in Data Science for its
              flexibility and broad applicability (Data Analysis, Machine
              Learning, Data Processing, even Web Development and system
              scripting). Python is followed by R, which is more popular in some
              finance positions or heavy-duty data applications. We also have
              Julia and D which are more niche/academic languages. C++ is far
              less common in Data Science, but it&apos;s used to train
              heavy-performance Machine Learning models.
            </AccordionContent>
          </AccordionItemStyled>
        </AccordionRoot>
      </div>
    </Container>
  );
};

export default FaqSection;

const Container = styled.div`
  text-align: center;
  ${({ withBg }) =>
    withBg &&
    `background-color: #121212;
     background-image: url("/bg-grad.png");`}
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  display: grid;
  place-items: center;
  padding: 3rem;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 1.5rem;
  }
`;

const AccordionRoot = styled(Accordion)`
  border-radius: 6px;
  max-width: 70%;
  background-color: white;
  box-shadow: 0 2px 10px #121212;
  margin-block: 3rem;
  text-align: left;
  margin-inline: auto;
  @media ${QUERIES.phoneAndSmaller} {
    max-width: revert;
  }
`;

const AccordionItemStyled = styled(AccordionItem)`
  overflow: hidden;
  margin-top: 1px;

  :first-child {
    margin-top: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  :focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px black;
  }
`;

const slideDown = keyframes`
    from {
      height: 0px;
    }
    to {
      height: 80px;
    
  }`;

const slideUp = keyframes`
    from {
      height: 80px;
    }
    to {
      height: 0px;
    
  }`;

const AccordionContent = styled(AccordionPanel)`
  padding: 20px;
  overflow: hidden;
  font-size: 15px;
  color: rgb(111, 110, 119);
  background-color: rgb(249, 248, 249);

  &[data-reach-accordion-panel][data-state="open"] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-reach-accordion-panel][data-state="collapsed"] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;
const AccordionHeader = styled.h4`
  all: unset;
  display: flex;
  line-height: 1.5;
`;

const AccordionTrigger = styled(AccordionButton)`
  all: unset;
  font-family: inherit;
  background-color: transparent;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  line-height: 1;
  color: rgb(87, 70, 175);
  box-shadow: rgb(228, 226, 228) 0px 1px 0px;
  background-color: white;

  :hover {
    background-color: rgb(249, 248, 249);
  }
`;

const Heading = styled.h4`
  font-size: var(--font-size-xl);
`;
const SubHeading = styled.p`
  max-width: 70ch;
  line-height: 1.5;
`;
