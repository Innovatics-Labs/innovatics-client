import React from "react";
import styled from "styled-components";

const DescriptionForm = ({ description, updateFields }) => {
  return (
    <div>
      <Title>Tell Us about You</Title>
      <TextArea
        value={description}
        placeholder="Write short Description about who you are"
        name="description"
        id="description"
        cols="40"
        rows="8"
        onChange={(e) => updateFields({ description: e.target.value })}
      ></TextArea>
    </div>
  );
};

export default DescriptionForm;

const Title = styled.p`
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin-block: 22;
`;

const TextArea = styled.textarea`
  background: rgba(13, 17, 23, 0.5);
  border: 1px solid #8691a6;
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  color: #8691a6;
`;
