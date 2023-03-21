import Image from "next/image";
import Link from "next/link";
import { BsSun } from "react-icons/bs";
import styled from "styled-components";

import arrow from "../assets/images/arrow.png";
import GradientIcon from "./GradientIcon";

const PathCard = ({ color, number, comingSoon, topic, id, icon }) => {
  const IconComponent = icon;

  return (
    <Card as={Link} href={`/academic-paths/${id}`}>
      <GradientContainer>
        <Gradient>
          <IconComponent size={30} color={color} />
        </Gradient>
      </GradientContainer>
      <div>
        <Number color={color}>{number}.</Number>
        <Topic>{topic}</Topic>
      </div>
      <Arrow>
        <Image src={arrow} alt={""} sizes="100vw" />
        {comingSoon && <p>Coming Soon</p>}
      </Arrow>
    </Card>
  );
};

export default PathCard;

const Card = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 2.3rem;
  background: linear-gradient(rgba(13, 17, 22), rgba(13, 17, 22, 0.8));
  border-radius: 9px;
  gap: 4rem;
  flex: 1;
  filter: drop-shadow(0px 0px 57px rgba(62, 63, 73, 0.25));
`;

const GradientContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Gradient = styled.div`
  background: linear-gradient(
    136.43deg,
    rgba(62, 63, 73, 0.7) 2.37%,
    rgba(62, 63, 73, 0) 100%
  );
  border-radius: 12px;
  padding: 0.7rem;
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
