import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import useElementOnScreen from "../../hooks";

const defaultStyles = {
  transition: "700ms ease-in-out",
};

const AnimateIn = ({ from, to, children }) => {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
    >
      {children}
    </div>
  );
};

const FadeIn = ({ children }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);

const FadeUp = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
  >
    {children}
  </AnimateIn>
);

const ScaleIn = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }}>
    {children}
  </AnimateIn>
);

const SlideInLeft = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateX(-20px)", opacity: "0" }}
    to={{ transform: "translateX(0)", opacity: "1" }}
  >
    {children}
  </AnimateIn>
);

const SlideInRight = ({ children }) => (
  <Wrapper>
    <SlideInR
      from={{ transform: "translateX(100%)", opacity: "0" }}
      to={{ transform: "translateX(0)", opacity: "1" }}
    >
      {children}
    </SlideInR>
  </Wrapper>
);

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

const SlideInR = styled(AnimateIn)`
  animation: ${slideIn} 0.5s forwards;
  transform: translateX(100%);
`;

export const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  SlideInRight,
  SlideInLeft,
};
