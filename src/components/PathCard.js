import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

import { QUERIES } from "../constants";
import Data from "../assets/svg/data.svg";
import Coding from "../assets/svg/coding.svg";
import Cyber from "../assets/svg/cyber-security.svg";
import Server from "../assets/svg/server.svg";

let colors = ["#44E986", "#FFA28B", "#FAD740", "#8B90FF"];
let icon = [Data, Coding, Cyber, Server];

const PathCard = ({ number, comingSoon, topic, id, index }) => {
  const IconComponent = icon[index];

  return (
    <Card as={Link} href={`/academic-paths/${id}`}>
      <GradientContainer>
        <Gradient>
          <IconComponent size={30} color={colors[index]} />
        </Gradient>
      </GradientContainer>
      <Content>
        <div>
          <Number color={colors[index]}>{number}.</Number>
          <Topic>{topic}</Topic>
        </div>
        <Arrow>
          <BsArrowRight size={35} />
          {comingSoon && <p>Coming Soon</p>}
        </Arrow>
      </Content>
    </Card>
  );
};

export default PathCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: linear-gradient(rgba(13, 17, 22), rgba(13, 17, 22));
  border-radius: 9px;
  gap: 4rem;
  flex: 1;

  :nth-of-type(1) {
    /* border-top-left-radius: 19px;
    border-bottom-left-radius: 19px; */
    :hover {
      background: no-repeat url("/data-science.png");
      background-size: cover;
    }
  }
  :nth-of-type(2) {
    :hover {
      background: no-repeat url("/cyber-security.png");
      background-size: cover;
    }
  }
  :nth-of-type(3) {
    :hover {
      background: no-repeat url("/networking.png");
      background-size: cover;
    }
  }

  :nth-of-type(4) {
    /* border-top-right-radius: 19px;
    border-bottom-right-radius: 19px; */
    :hover {
      background: no-repeat url("/cloud.png");
      background-size: cover;
    }
  }

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: row;
    filter: drop-shadow(0px 0px 57px rgba(62, 63, 73, 0.25));
    backdrop-filter: blur(10px);
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 2rem;
  }
`;

const GradientContainer = styled.div``;

const Gradient = styled.div`
  width: fit-content;
  background: linear-gradient(
    136.43deg,
    rgba(62, 63, 73, 0.7) 2.37%,
    rgba(62, 63, 73, 0) 100%
  );
  border-radius: 12px;
  padding: 0.7rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    flex-direction: revert;
    width: 100%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Topic = styled.p`
  font-weight: 500;
  font-size: clamp(1.2rem, 1.429vw + 0.464rem, 1.75rem);
  color: white;
  margin: auto 0;
  /* width: 50%; */
  line-height: 40px;
`;

const Number = styled.p`
  font-weight: 400;
  font-size: var(--font-size-2md);
  color: ${({ color }) => color};
  margin-block: 0px;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8691a6;
  img {
    object-fit: cover;
    /* width: 100%;
    height: auto; */
  }
`;
