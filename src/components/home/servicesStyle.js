import styled from "styled-components";
import { QUERIES } from "../../constants";

export const GradientContainer = styled.div`
  display: flex;
  align-items: center;
  /* position: relative; */
  gap: 10px;
`;

export const CurveContainer = styled.div`
  margin-right: -1.4rem;
  img {
    height: 300px;
    width: auto;
    object-fit: contain;
    transform: translateY(7rem);
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const Content = styled.div`
  margin-bottom: 4rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 2rem;
  }
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

export const TextContent = styled.div``;

export const ImageContent = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: var(--font-size-xl);
  line-height: 35px;
  @media ${QUERIES.phoneAndSmaller} {
    line-height: 1.3;
  }
`;

export const Start = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  :hover {
    text-decoration-line: underline;
    transition: all 0.5s;
  }
`;

export const BottomContent = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const QualityText = styled.p`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-block: 10px;
  width: 50%;
`;

export const SubQualityText = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-top: 0;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
  }
`;
