import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  animation: ${slideIn} 0.5s forwards;
  transform: translateX(100%);
`;

const SlideInFromRight = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ threshold: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible) {
      containerRef.current.style.transform = "translateX(0)";
    }
  }, [isVisible]);

  return (
    <Wrapper ref={ref}>
      <Container ref={containerRef}>{children}</Container>
    </Wrapper>
  );
};

export default SlideInFromRight;
