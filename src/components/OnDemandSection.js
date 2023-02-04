import styled from "styled-components";
import { BsCollectionPlay } from "react-icons/bs";
import Button from "./Button";
import Image from "next/image";
import rocket from "../assets/images/rocket.png";
import LineGradient from "./LineGradient";

const OnDemandSection = () => {
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Gradient>
          <LineGradient
            colorFrom={"#FC69AF00"}
            colorTo={"#EC674C,#FFA28B"}
            height={"250px"}
          />
        </Gradient>
        <Image src={rocket} alt="" priority />
      </div>
      <CardsContainer>
        <Card>
          <Top>
            <Icon>
              <BsCollectionPlay size={24} />
            </Icon>
            <p>On-Demand</p>
          </Top>
          <Text>
            Access to all Introductory learning Paths including MLMC and Cloud
            is the learn Fundamentals
          </Text>
          <Button title={"Learn More"} variant="outline" />
        </Card>
        <Card>
          <Top>
            <Icon>
              <BsCollectionPlay size={24} />
            </Icon>
            <p>On-Demand</p>
          </Top>
          <Text>
            Access to all Introductory learning Paths including MLMC and Cloud
            is the learn Fundamentals
          </Text>
          <Button title={"Learn More"} variant="outline" />
        </Card>
        <Card>
          <Top>
            <Icon>
              <BsCollectionPlay size={24} />
            </Icon>
            <p>On-Demand</p>
          </Top>
          <Text>
            Access to all Introductory learning Paths including MLMC and Cloud
            is the learn Fundamentals
          </Text>
          <Button title={"Learn More"} variant="outline" />
        </Card>
        <Card>
          <Top>
            <Icon>
              <BsCollectionPlay size={24} />
            </Icon>
            <p>On-Demand</p>
          </Top>
          <Text>
            Access to all Introductory learning Paths including MLMC and Cloud
            is the learn Fundamentals
          </Text>
          <Button title={"Learn More"} variant="outline" />
        </Card>
      </CardsContainer>
    </Container>
  );
};

export default OnDemandSection;

const Container = styled.div`
  background: #0d1117;
  padding: 3rem var(--container-padding);
  padding-bottom: 0px;
  display: flex;
  gap: 2rem;
`;

const Gradient = styled.div`
  align-self: flex-end;
  margin-bottom: 1.5rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
  flex: 1;
`;

const Card = styled.div`
  padding: 2rem;
  background: linear-gradient(
    -286deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0) 98.21%
  );
  color: white;
  border-radius: 19px;
`;

const Top = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const Icon = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border-radius: 5px;
  padding: 10px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-block: 2rem;
`;
