import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import siteMetadata from "../../data/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import OAuth from "../../components/OAuth";

import {
  Container,
  FormContainer,
  Title,
  Form,
  Input,
  FormActions,
  OR,
  ForgotText,
  NoAccountContainer,
  SignInAction,
} from "../../components/GlobalStyles/authStyle";
import { WEIGHTS } from "../../constants";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [errors, setErrors] = useState({});
  const [loggedInUser, setLoggedInUser] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

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

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsDisabled(false);
    }
  }, [email, password]);

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
              <SignInAction
                onClick={onSubmit}
                type="submit"
                disabled={isDisabled}
              >
                Sign In
              </SignInAction>
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

export const ErrorSpan = styled.span`
  color: red;
  padding-block: 5px;
  display: inline-block;
`;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  width: 100%;
`;
