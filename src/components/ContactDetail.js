import React from "react";
import styled from "styled-components";

const ContactDetail = () => {
  return (
    <Contact>
      <p>
        <span>Monday - Friday</span> 8:00 AM - 5:00 PM Eastern Time
      </p>
      <p>
        <span>Phone</span> +1-678-209-9780
      </p>
      <p>
        <span>Email</span> info@innovatics.ai
      </p>
    </Contact>
  );
};

export default ContactDetail;

const Contact = styled.div`
  color: white;
  align-self: flex-end;
  span {
    font-weight: 500;
    font-size: 18px;
    color: #8691a6;
  }
`;
