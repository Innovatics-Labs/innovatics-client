import Image from "next/image";
import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";

import LineGradient from "./LineGradient";
import GradientIcon from "./GradientIcon";
import jupyterLab from "../assets/images/JupyterLab.png";
import codesnippet from "../assets/images/codesnippet.png";
import labRunning from "../assets/images/labRunning.png";

const Practicality = () => {
  return (
    <Container>
      <TopSection>
        <GradientStyleContainer>
          <GradientIcon
            IconComponent={<BsCodeSlash size={30} color="#10C759" />}
            bgColor={"#10C759"}
          />
          <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
        </GradientStyleContainer>
        <TextContent>
          <Title>Practicality</Title>
          <SubTitle>
            <TextWithColor color="#44e986">
              Put to practice what you learn immediately.{" "}
            </TextWithColor>
            We provide you suitable learning environment.
          </SubTitle>
        </TextContent>
      </TopSection>
      <BottomSection>
        <Image src={jupyterLab} alt="" />
        <Code>
          <Image src={codesnippet} alt="" placeholder="blur" />
        </Code>
        <Lab>
          <Image src={labRunning} alt="" placeholder="blur" />
        </Lab>
      </BottomSection>
    </Container>
  );
};

export default Practicality;

const Container = styled.section`
  background: rgba(13, 17, 22);
  padding: 2rem var(--container-padding);
  padding-bottom: 1rem;
`;

const TopSection = styled.section`
  display: flex;
  gap: 2.5rem;
  margin-top: 1rem;
`;

const GradientStyleContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: auto 1fr;
`;

const TextContent = styled.div`
  font-weight: 600;
  color: white;
`;

const Title = styled.h4`
  font-size: 25px;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 40px;
  margin-block: 1.5rem;
  width: 70%;
`;

export const TextWithColor = styled.span`
  color: ${({ color }) => color};
`;

const BottomSection = styled.div`
  margin-top: 1rem;
  position: relative;
`;

const Code = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
`;

const Lab = styled.div`
  position: absolute;
  top: 45%;
  right: 17%;
`;
