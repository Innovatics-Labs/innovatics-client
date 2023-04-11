import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Select from "./Select";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [sortId, setSortId] = useState("support");
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_16ca93j",
        "template_kyz9jqu",
        formRef.current,
        "M4uZtU2Eize04iEE6"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            formRef.current.reset();
            toast.success(`${result.text}:Message Sent`);
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Bad User Credentials");
        }
      );
  };

  return (
    <Container>
      <form ref={formRef} onSubmit={sendEmail}>
        <Label htmlFor="">
          <p>FIRST NAME</p>
          <Input
            type="text"
            placeholder="AbdullLah"
            name="firstName"
            required
          />
        </Label>
        <Label htmlFor="">
          <p>LAST NAME</p>
          <Input type="text" placeholder="Umar" name="lastName" required />
        </Label>
        <Label htmlFor="">
          <p>EMAIL</p>
          <Input
            type="email"
            placeholder="abdullahumar@gmail.com"
            name="userEmail"
            required
          />
        </Label>
        <Label htmlFor="">
          <p>PHONE NUMBER</p>
          <Input type="tel" placeholder="000 000 0000" name="userPhone" />
        </Label>
        <Label>
          <p>TYPE OF INQUIRY</p>
          <Inquiry
            name="queryType"
            label=""
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="support" name="support">
              Support Inquiry
            </option>
            <option value="sales" name="sales">
              Sales Inquiry
            </option>
            <option value="billing" name="billing">
              Billing Inquiry
            </option>
          </Inquiry>
        </Label>
        <Label>
          <p>MESSAGE</p>
          <Message name="message" required id="" cols="30" rows="10" />
        </Label>
        <Button
          type="submit"
          value="Send"
          title={"Send"}
          variant="outline"
          borderColor={"#8691A6"}
          color="#8691A6"
        />
      </form>
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
  color: white;
`;
