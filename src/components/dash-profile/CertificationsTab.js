import Image from "next/image";
import React from "react";
import medallions from "../../../public/Medallions.png";
import styled from "styled-components";

const CertificationsTab = () => {
  return (
    <Conatiner>
      <NoCertificate>
        <Image src={medallions} alt="medal" />
        <p style={{ fontWeight: 600 }}>No Certification Earned</p>
        <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          Earn medals on all of your quizzes to get certified
        </p>
      </NoCertificate>
    </Conatiner>
  );
};

export default CertificationsTab;

const Conatiner = styled.div`
  color: white;
  padding: 2rem;
  display: grid;
  place-items: center;
`;

const NoCertificate = styled.div`
  text-align: center;

  img {
    margin: auto;
  }
`;
