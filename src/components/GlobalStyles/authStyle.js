import styled from "styled-components";
import { QUERIES } from "../../constants";
import Button from "../Button";

export const Container = styled.section`
  background: linear-gradient(90deg, rgba(13, 17, 23, 0.3) 0%, #0d1117 47.99%),
    url("/galaxy.png");
  display: grid;
  place-items: center;
  padding: 3rem;
  /* height: 100%; */
  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 2rem;
  }
`;

export const FormContainer = styled.div`
  /* width: 40%; */
  /* @media ${QUERIES.tabletAndSmaller} {
    width: 60%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  } */
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: var(--font-size-lg);
  color: white;
  text-align: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  background: rgba(13, 17, 23, 0.5);
  border: 1px solid #8691a6;
  border-radius: 10px;
  padding: 1.3rem;
  width: 100%;
`;

export const FormActions = styled.div`
  margin-block: 2rem;
  display: grid;
  place-items: center;
`;

export const SignInButton = styled(Button)`
  display: flex;
  align-items: center;
`;

export const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  width: 100%;
`;

export const ForgotText = styled.p`
  font-weight: 500;
  font-size: var(--font-size-md);
  color: white;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
  }
`;

export const OR = styled.p`
  text-align: center;
  color: white;
  margin-block: 2rem;
  font-weight: 500;
  font-size: var(--font-size-md);
`;

export const FormButton = styled(Button)`
  border-color: #8691a6;
  width: 100%;
`;

export const NoAccountContainer = styled.p`
  font-weight: 500;
  font-size: var(--font-size-md);
  color: white;
  text-align: center;
  span {
    color: #8b90ff;
    display: inline-block;
    padding-inline: 1rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
    span {
      padding-inline: 1rem;
    }
  }
`;
