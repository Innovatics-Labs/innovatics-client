import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../../assets/images/logo 1.png";
import programming from "../../assets/images/programming 1.png";
import Image from "next/image";
import { MaxwidthContainer } from "../GlobalStyles";
import Button from "../Button";
import Link from "next/link";
import { Switch, Input, Slider } from "../course/TopicResourceCard";
import useToggle from "../../hooks/useToggle";

const Lab = ({ title, labUrl, isOpen, onDismiss }) => {
  const [isMarkFinished, setIsMarkFinished] = useToggle();

  return (
    <MaxwidthContainer>
      <LabOverlay isOpen={isOpen} onDismiss={onDismiss}>
        <LabContent>
          <MaxwidthContainer>
            <Header>
              <Back onClick={onDismiss}>
                <IoMdArrowRoundBack size={20} color="white" />
                <span>Back</span>
              </Back>
              <HeaderContent>
                <Image src={Logo} alt="Innovatics Logo" />
              </HeaderContent>
            </Header>
            <Content>
              <LabDetails>
                <LabTitle>{title}</LabTitle>
                <LabDescription>
                  In this project, you’ll be using giving some questions
                  regarding what you have learned in the python class to
                  ascertain your understanding of the course. Click Start lab to
                  launch the Notebook, Wish you the best!
                </LabDescription>
                <ImageContainer>
                  <Image src={programming} alt="" sizes="100vw" />
                </ImageContainer>
              </LabDetails>
              <StartLabContainer>
                <LabRunningCard>
                  <RunningMark>
                    <Running>Lab Running</Running>
                    <Mark>
                      MARK FINISHED{" "}
                      <Switch className="switch">
                        <Input
                          type="checkbox"
                          checked={isMarkFinished}
                          onClick={setIsMarkFinished}
                        />
                        <Slider className="slider round" />
                      </Switch>
                    </Mark>
                  </RunningMark>
                  <Timer>TIME RUNNING: 00:00:00</Timer>
                  <Warning>
                    Please keep this window open while you’re working on the
                    lab. Lab that don’t register activity will be automatically
                    be stopped.
                  </Warning>
                  <Start href={labUrl} target="_blank">
                    Start Lab
                  </Start>
                </LabRunningCard>
              </StartLabContainer>
            </Content>
          </MaxwidthContainer>
        </LabContent>
      </LabOverlay>
    </MaxwidthContainer>
  );
};

export default Lab;

const LabOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-backdrop);
  overflow-y: auto;
`;

const LabContent = styled(DialogContent)`
  height: 100%;
  width: 100%;
  /* padding: 0; */
`;

const Header = styled.div`
  background: #000000;
  padding-inline: 2rem;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  gap: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 1rem;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Back = styled.p`
  border: 1px solid white;
  display: flex;
  gap: 0.5rem;
  height: 100%;
  align-items: center;
  padding: 0.5rem 2rem;
  margin-block: 0;
  cursor: pointer;
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0.5rem 1.5rem;
  }
`;

const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: revert;
    width: 100%;
  }
`;

const LabDetails = styled.div`
  padding: 3rem;
  color: white;
  background: linear-gradient(
    286deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(62, 63, 73, 0.8) 98.21%
  );
  @media ${QUERIES.phoneAndSmaller} {
    padding: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

const LabTitle = styled.h3`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-2md);
`;

const LabDescription = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-md);
  line-height: 1.5;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: var(--font-size-base);
  }
`;

const StartLabContainer = styled.div`
  padding: 2rem;
  background: url("/galaxy.png");
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);

  @media ${QUERIES.phoneAndSmaller} {
    padding: 1.5rem;
  }
`;

const LabRunningCard = styled.div`
  color: white;
  font-weight: ${WEIGHTS.medium};
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  background: linear-gradient(
    286.85deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0.4) 98.21%
  );
  filter: drop-shadow(0px 0px 55.7225px rgba(62, 63, 73, 0.25));
  border-radius: 9.28709px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const RunningMark = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const Running = styled.p`
  font-weight: ${WEIGHTS.semiBold};
  @media ${QUERIES.phoneAndSmaller} {
    margin-block: 5px;
  }
`;

const Mark = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-block: 5px;
  }
`;

const Timer = styled.p`
  color: #d3d9e0;
`;

const Warning = styled.p`
  color: #8691a6;
`;

const Start = styled(Link)`
  color: #8691a6;
  border: 1.3px solid #36373a;
  border-radius: 92px;
  padding: 10px;
  display: inline-block;
`;
