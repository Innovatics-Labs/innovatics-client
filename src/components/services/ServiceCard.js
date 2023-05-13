import Image from 'next/image';
import styled from 'styled-components';
import { QUERIES, WEIGHTS } from '../../constants';
import Button from '../Button';
import circuit from '../../assets/images/circuit-board.png';
import Link from 'next/link';

const ServiceCard = ({
  img,
  title,
  description,
  reverse,
  linkUrl,
  action = true,
}) => {
  return (
    <>
      <ServiceCardContainer reverse={reverse}>
        <ImageContainer>
          <Image src={img ? img : circuit} alt='' sizes='100vw' />
        </ImageContainer>
        <ServiceCardContent>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceDescription>{description}</ServiceDescription>
          {/* {action && <Button variant={"outline"} title="Learn More" />} */}
        </ServiceCardContent>
      </ServiceCardContainer>
    </>
  );
};

export default ServiceCard;

export const ServiceCardContainer = styled.article`
  display: flex;
  gap: 2rem;
  margin-block: 3rem;
  flex-wrap: wrap;

  ${({ reverse }) => reverse && `flex-direction:row-reverse;`}

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

export const ServiceCardContent = styled.div`
  flex: 1;
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;

  img {
    object-fit: cover;
    height: auto;
    width: 100%;
  }

  @media ${QUERIES.tabletAndSmaller} {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ServiceTitle = styled.h4`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-xl);
  margin-top: 0;
`;

export const ServiceDescription = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-md);
  line-height: 1.5;
`;
