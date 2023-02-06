import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Standardplan from "../assets/svg/standardplan.svg";
import Button from "./Button";

const PricingPlanCard = ({ planType, planPrice }) => {
  return (
    <Card>
      <Top>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <PlanType>{planType}</PlanType>
          <Standardplan />
        </div>
        <Price>
          <Amount>{planPrice}</Amount>
          <Per>/month</Per>
        </Price>
      </Top>
      <Divider />
      <Bottom>
        <PlanFeature>
          <li>
            Access to all Introductory learning Paths including MLMC and Cloud
            Fundamentals
          </li>
          <li>500+ Hands-on labs associated with the learnings paths</li>
          <li>Github and AWS projects for intro courses</li>
          <li>Free bootcamp vouchers </li>
        </PlanFeature>
        <Actions>
          <Button
            title={"Add to Cart"}
            variant="outline"
            width={"100%"}
            size={"20px"}
          />
          <Link href={"/"}>Learn More</Link>
        </Actions>
      </Bottom>
    </Card>
  );
};

export default PricingPlanCard;

const Card = styled.div`
  color: #ffffff;
  /* width: 300px; */
  padding: 25px;
  background: linear-gradient(
    -286.85deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0) 98.21%
  );
  filter: blur(0.483065px) drop-shadow(0px 0px 57.9677px rgba(62, 63, 73, 0.25));
  border-radius: 9.6px;
`;

const Top = styled.div``;

const PlanType = styled.p`
  font-size: 30px;
  margin-block: 10px;
`;

const Price = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Amount = styled.p`
  font-weight: 600;
  font-size: 37px;
  margin-block: 10px;
`;

const Per = styled.p`
  font-size: 18px;
`;

const Divider = styled.div`
  margin-block: 1rem;
  background: linear-gradient(90deg, #ffffff 0%, rgba(62, 63, 73, 0) 98.21%);
  height: 2px;
`;

const Bottom = styled.div``;

const PlanFeature = styled.ul`
  list-style-image: url("/checkmark.png");
  list-style-type: none;
  /* padding: 0; */

  li {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 15px;
  }
`;

const Actions = styled.div`
  text-align: center;
  margin-block: 1.5rem;

  a {
    font-weight: 500;
    font-size: 18px;
    margin-top: 2rem;
    display: inline-block;
  }
`;
