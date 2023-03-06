import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import siteMetadata from "../../data/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import Button from "../../components/Button";
import { QUERIES } from "../../constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import UnstyledButton from "../../components/UnstyledButton";
import OAuth from "../../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [errors, setErrors] = useState({});
  const [loggedInUser, setLoggedInUser] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const isDisabled = Object.keys(errors).length > 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    setLoading(true);
    setErrors(errors);
    try {
      if (Object.keys(errors).length === 0) {
        // Perform submit logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setLoading(false);
        setLoggedInUser(userCredential.user);
        if (userCredential.user) {
          router.push("/dashboard");
        }
      }
    } catch (error) {
      toast.error("Bad User Credentials");
    }
  };

  return (
    <>
      <HeadSeo
        title={`Sign In | ${siteMetadata.companyName} `}
        description={"Sign in to continue"}
        canonicalUrl={`${siteMetadata.siteUrl}/signIn`}
        ogType={"website"}
      />
      <Container>
        <FormContainer>
          <Title>Sign in to continue</Title>
          <Form>
            <label htmlFor="email">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
              />
              {errors.email && <ErrorSpan>{errors.email}</ErrorSpan>}
            </label>
            <label htmlFor="password">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
              />
              {errors.password && <ErrorSpan>{errors.password}</ErrorSpan>}
            </label>
          </Form>
          <FormActions>
            <ForgotContainer>
              <ForgotText>Forgot password?</ForgotText>
              <SignInButton
                onClick={onSubmit}
                type="submit"
                title={"Sign In"}
                bgColor={"#979797"}
                color={"#0D1117"}
                disabled={isDisabled}
              />
            </ForgotContainer>
            <OR>OR</OR>
            <OAuth />
            <NoAccountContainer>
              Don’t Have an account?
              <span>
                <Link href={"signUp"}>Signup for free</Link>
              </span>
            </NoAccountContainer>
          </FormActions>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignIn;

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

const FormContainer = styled.div``;

const Title = styled.h3`
  font-weight: 600;
  font-size: clamp(1.25rem, 1.429vw + 0.464rem, 1.75rem);
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
  color: white;
`;

export const ErrorSpan = styled.span`
  color: red;
  padding-block: 5px;
  display: inline-block;
`;

const FormActions = styled.div`
  margin-block: 2rem;
  display: grid;
  place-items: center;
`;

const SignInButton = styled(Button)`
  display: flex;
  align-items: center;
`;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  width: 100%;
`;

const ForgotText = styled(UnstyledButton)`
  font-weight: 500;
  font-size: var(--font-size-md);
  color: white;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
  }
`;

const OR = styled.p`
  text-align: center;
  color: white;
  margin-block: 2rem;
  font-weight: 500;
  font-size: var(--font-size-md);
`;

const NoAccountContainer = styled.p`
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
