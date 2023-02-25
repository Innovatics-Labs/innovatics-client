import React from "react";
import styled from "styled-components";

const DescriptionForm = ({ description, updateFields }) => {
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
        Tell Us about You
      </p>
      <TextArea
        value={description}
        placeholder="Write short Description about who you are"
        name="description"
        id="description"
        cols="50"
        rows="10"
        onChange={(e) => updateFields({ description: e.target.value })}
      ></TextArea>
    </div>
  );
};

export default DescriptionForm;

const TextArea = styled.textarea`
  background: rgba(13, 17, 23, 0.5);
  border: 1px solid #8691a6;
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
`;
