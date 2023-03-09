import Image from "next/image";
import React from "react";
import styled from "styled-components";
import downarrow from "../assets/images/Group 2.png";
import kpmgLogo from "../assets/images/kpmg-logo.png";
import mercedes from "../assets/images/mercedes.png";
import pinterest from "../assets/images/pinterest.png";

const OurCustomers = () => {
  return (
    <div>
      <DataCompany>
        <JoinCompany>
          <span>Join the world leading data driven companies</span>
          <Image src={downarrow} alt="" />
        </JoinCompany>
        <DataCompanyImages>
          <Image src={kpmgLogo} alt="" sizes="100vw" />
          <Image src={mercedes} alt="" sizes="100vw" />
          <Image src={pinterest} alt="" sizes="100vw" />
        </DataCompanyImages>
      </DataCompany>
    </div>
  );
};

export default OurCustomers;

const DataCompany = styled.div`
  color: #8b949e;
  padding-block: 2rem;
  margin-bottom: 1rem;
`;

const JoinCompany = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: clamp(0.875rem, 1.19vw + 0.429rem, 1.5rem);
  margin-block: clamp(1rem, 1.19vw + 0.429rem, 2rem);
  img {
    margin-inline: 1rem;
  }
`;

const DataCompanyImages = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;
