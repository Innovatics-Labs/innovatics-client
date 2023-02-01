import Image from "next/legacy/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

import Button from "./Button";
import LineGradient from "./LineGradient";
import { TextWithColor } from "./Practicality";
import labRunning from "../assets/images/labRunningLarg.png";

const InsetSection = ({ children }) => {
  return (
    <Container>
      <div>
        <LineGradient
          colorFrom={`#10C75900 0%, #10C759CF 81.25%, #10C759 100%`}
          colorTo={`#10C759D2 83.25%, #10C75900 0%`}
        />
      </div>
      <Content>
        <TopContent>
          <TextContent>
            <Title>
              <TextWithColor color="#44E986">Python Lab</TextWithColor> for you
              to exercise what you learnt from our expert instructor-led video
              trainings.
            </Title>
            <Start>
              <span>Start learning</span>
              <MdKeyboardArrowRight color={"#8691A6"} size={24} />
            </Start>
          </TextContent>
          <div>
            <Image src={labRunning} alt={""} responsive />
          </div>
        </TopContent>
      </Content>
    </Container>
  );
};

export default InsetSection;

const Container = styled.section`
  padding: 2rem var(--container-padding);
  position: relative;
  overflow: hidden;
  height: 500px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: white;
  background-image: linear-gradient(
    90deg,
    rgba(13, 17, 23, 1) 40%,
    rgba(13, 17, 23, 0.3) 45%
  );
  box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);
  background-repeat: no-repeat;

  ::before {
    content: "";
    position: absolute;
    width: 992px;
    height: 1486px;
    left: 603px;
    top: -281px;
    z-index: -1;
    background-image: url("/galaxy.png");
    background-repeat: no-repeat;
    box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);
    transform: rotate(-90deg);
  }
`;

const Content = styled.div``;

const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-inline: 2rem;
`;

const TextContent = styled.div`
  /* width: 60%; */
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 27px;
  line-height: 35px;
`;

const Start = styled.p`
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
