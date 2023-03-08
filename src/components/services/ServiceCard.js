import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHTS } from "../../constants";
import Button from "../Button";
import circuit from "../../assets/images/circuit-board.png";

const ServiceCard = ({ img, title, description, reverse, linkUrl }) => {
  return (
    <>
      <ServiceCardContainer reverse={reverse}>
        <Image src={img ? img : circuit} alt="" sizes="100vw" />
        <ServiceCardContent>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceDescription>{description}</ServiceDescription>
          <Button variant={"outline"} title="Learn More" />
        </ServiceCardContent>
      </ServiceCardContainer>
    </>
  );
};

export default ServiceCard;

const ServiceCardContainer = styled.article`
  display: flex;
  gap: 2rem;
  margin-block: 3rem;
  flex-wrap: wrap;

  img {
    flex: 1;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndSmaller} {
    flex-wrap: wrap;
  }

  ${({ reverse }) => reverse && `flex-direction:row-reverse;`}
`;

const ServiceCardContent = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h4`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-xl);
  margin-top: 0;
`;
const ServiceDescription = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-md);
  line-height: 1.5;
`;
