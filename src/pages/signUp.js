import Link from "next/link";
import styled from "styled-components";
import {
  Container,
  FormContainer,
  Title,
  Form,
  Input,
  FormActions,
  OR,
  ForgotText,
  FormButton,
  SignInButton,
  NoAccountContainer,
} from "../components/GlobalStyles/authStyle";

const signUp = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Sign up to start learning</Title>
        <Form>
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </Form>
        <FormActions>
          <ForgotContainer>
            <ForgotText>Forgot password?</ForgotText>
            <SignInButton
              title={"Sign Up"}
              bgColor={"#979797"}
              color={"#0D1117"}
            />
          </ForgotContainer>
          <OR>OR</OR>
          <FormButton
            variant={"outline"}
            title={"Continue with Google"}
            color={"#8691A6"}
          />
          <NoAccountContainer>
            Already a member?
            <span>
              <Link href={"signIn"}>Signin</Link>
            </span>
          </NoAccountContainer>
        </FormActions>
      </FormContainer>
    </Container>
  );
};

export default signUp;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  width: 100%;
  gap: 1.5rem;
`;
