import styled from "styled-components";
import Button from "../components/Button";

const signIn = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Sign up to start learning</Title>
        <Form>
          <Input type="email" name="email" id="" placeholder="Email" />
          <Input type="password" name="password" id="" placeholder="Password" />
        </Form>
        <FormActions>
          <ForgotContainer>
            <ForgotText>Forgot password?</ForgotText>
            <Button title={"Sign In"} bgColor={"#979797"} color={"#0D1117"} />
          </ForgotContainer>
          <p
            style={{
              textAlign: "center",
              color: "white",
              marginBlock: "2rem",
              fontWeight: "500",
              fontSize: "18px ",
            }}
          >
            OR
          </p>
          <FormButton
            variant={"outline"}
            title={"Continue with Google"}
            color={"#8691A6"}
          />
          <NoAccountContainer>
            <p>
              Don’t Have an account? <span>Signup for free</span>
            </p>
          </NoAccountContainer>
        </FormActions>
      </FormContainer>
    </Container>
  );
};

export default signIn;

export const Container = styled.section`
  background: linear-gradient(90deg, rgba(13, 17, 23, 0.3) 0%, #0d1117 47.99%),
    url("/galaxy.png");
  display: grid;
  place-items: center;
  padding: 3rem;
  height: 100%;
`;

const FormContainer = styled.div`
  width: 40%;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 28px;
  color: white;
  text-align: center;
`;

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

const FormActions = styled.div`
  margin-block: 2rem;
  display: grid;
  place-items: center;
`;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  width: 100%;
`;

const ForgotText = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: white;
`;

const FormButton = styled(Button)`
  border-color: #8691a6;
  padding: 10px 128px;
  width: 100%;
`;

const NoAccountContainer = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: white;
  span {
    color: #8b90ff;
  }
`;
