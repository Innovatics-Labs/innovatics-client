import React from "react";
import styled from "styled-components";

const ContactDetails = ({ mobile, address, updateFields }) => {
  return (
    <div>
      <p
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: "16px",
          marginBlock: 22,
        }}
      >
        Add contact details
      </p>
      <Form>
        <Input
          type="text"
          name="phone"
          value={mobile}
          id=""
          placeholder="Phone"
          onChange={(e) => updateFields({ mobile: e.target.value })}
        />
        <Input
          type="text"
          name="address"
          value={address}
          id=""
          placeholder="Address"
          onChange={(e) => updateFields({ address: e.target.value })}
        />
      </Form>
    </div>
  );
};

export default ContactDetails;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  background: rgba(13, 17, 23, 0.5);
  border: 1px solid #8691a6;
  border-radius: 10px;
  padding: 1.3rem;
  width: 100%;
`;
