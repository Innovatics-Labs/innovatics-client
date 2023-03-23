import Image from "next/image";
import styled from "styled-components";
import { MaxwidthContainer } from "../GlobalStyles";
import LineGradient from "../LineGradient";
import Newsletter from "../Newsletter";
import RedCurve from "../../assets/images/curve-gradient-red.png";
import Button from "../Button";
import { TextWithColor } from "./Practicality";
import { QUERIES } from "../../constants";
import { Animate } from "../Animations/AnimateIn";
import { QualityText, TextContent, SubQualityText } from "./FeaturedSection";
import ContactDetail from "../ContactDetail";

const Newslettersection = () => {
  return (
    <Container>
      <Content>
        <Top>
          <TextContent>
            <Title>LET’S GET IN TOUCH</Title>
            <QualityText>Have a question? We’re here to help!</QualityText>
            <SubHeading>
              Whether you’d like more information on our training materials or
              are interested in a free demo, please contact us at any time.
            </SubHeading>
          </TextContent>
        </Top>
        <Bottom>
          <ContactDetail />
          <Newsletter />
        </Bottom>
      </Content>
    </Container>
  );
};

export default Newslettersection;

const Container = styled.section`
  background: linear-gradient(
      90.44deg,
      rgba(13, 17, 23, 0.3) 0.46%,
      #0d1117 44.88%
    ),
    url("galaxy.png");
`;

const Content = styled(MaxwidthContainer)`
  padding: var(--container-padding);
`;

const Top = styled.div`
  max-width: 60%;
  color: white;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 18px;
  color: var(--mid-grey);
`;

const SubHeading = styled.p`
  color: white;
  font-size: 18px;
  color: var(--mid-grey);
`;

const Bottom = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); */
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;
