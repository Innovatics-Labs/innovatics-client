import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Select from "./Select";

const Newsletter = () => {
  const [sortId, setSortId] = useState("support");
  return (
    <Container>
      <div>
        <Label htmlFor="">
          <p>FIRST NAME</p>
          <Input type="text" placeholder="AbdullLah" />
        </Label>
        <Label htmlFor="">
          <p>LAST NAME</p>
          <Input type="text" placeholder="Umar" />
        </Label>
        <Label htmlFor="">
          <p>EMAIL</p>
          <Input type="email" placeholder="abdullahumar@gmail.com" />
        </Label>
        <Label htmlFor="">
          <p>PHONE NUMBER</p>
          <Input type="tel" placeholder="000 000 0000" />
        </Label>

        <Label>
          <p>TYPE OF INQUIRY</p>
          <Inquiry
            label=""
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="support">Support Inquiry</option>
            <option value="support">Sales Inquiry</option>
            <option value="support">Billing Inquiry</option>
          </Inquiry>
        </Label>
        <Label>
          <p>MESSAGE</p>
          <Message name="" id="" cols="30" rows="10"></Message>
        </Label>
        <Button
          title={"Send"}
          variant="outline"
          borderColor={"#8691A6"}
          color="#8691A6"
        />
      </div>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  width: min(400px, 100%);
  margin-block: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1.5rem;
  p {
    font-weight: 500;
    font-size: 18px;
    color: #fc69af;
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #8691a6;
  background-color: transparent;
  width: 100%;
  padding: 0.5rem;
  color: white;
`;

const Inquiry = styled.select`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #8691a6;
  color: #8691a6;
  width: 100%;
`;

const Message = styled.textarea`
  border: 1px solid #8691a6;
  background-color: transparent;
  width: 100%;
`;
