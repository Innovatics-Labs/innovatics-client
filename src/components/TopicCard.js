import Image from "next/image";
import { BsSun } from "react-icons/bs";
import styled from "styled-components";

import arrow from "../assets/images/arrow.png";
import GradientIcon from "./GradientIcon";

const TopicCard = ({ color, number, comingSoon, topic }) => {
  return (
    <Card>
      <GradientContainer>
        <GradientIcon
          IconComponent={<BsSun size={30} color={color} />}
          bgColor={color}
        />
        <Number color={color}>{number}</Number>
      </GradientContainer>
      <Topic>{topic}</Topic>
      <Arrow>
        <Image src={arrow} alt={""} />
        {comingSoon && <p>Coming Soon</p>}
      </Arrow>
    </Card>
  );
};

export default TopicCard;

const Card = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 2.3rem;
  background: linear-gradient(rgba(13, 17, 22), rgba(13, 17, 22, 0.8));
  border-radius: 9px;
  gap: 4rem;
  flex: 1;
  filter: blur(0.48px) drop-shadow(0px 0px 57px rgba(62, 63, 73, 0.25));
`;

const GradientContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Topic = styled.p`
  font-weight: 500;
  font-size: 28px;
  color: white;
  margin: auto 0;
  width: 50%;
  line-height: 40px;
`;

const Number = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: ${({ color }) => color};
  margin-block: 0px;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #8691a6;
`;
