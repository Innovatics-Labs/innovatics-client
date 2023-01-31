import Image from "next/image";
import React from "react";
import styled from "styled-components";
import galaxy from "../assets/images/galaxy.png";

const InsetSection = ({ children }) => {
  return (
    <Container>
      <h3>Testing Section</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum
        quisquam repellendus dolorum cumque dolores, quaerat suscipit dolorem
        modi hic maxime, debitis nulla reiciendis ratione illum incidunt, sit
        aut omnis.
      </p>
    </Container>
  );
};

export default InsetSection;

const Container = styled.section`
  background: linear-gradient(-90deg, rgba(13, 17, 23, 0.5) 0%, #0d1117 75.99%),
    url("/galaxy.png");
  height: 500px;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 10px;
`;

const ImageBg = styled.div`
  background: url("./galaxy.png");
  box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);
`;
