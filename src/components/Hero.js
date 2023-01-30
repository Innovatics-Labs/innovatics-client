import Image from "next/image";
import styled from "styled-components";
import heroimage from "../assets/images/earth-gb512373bb_1280 1.png";

const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <Image src={heroimage} alt={"earth hero"} />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  overflow: hidden;
`;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    top: 0;
  }
`;
