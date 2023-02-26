import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

import { db, auth } from "../../../firebaseConfig";
import siteMetadata from "../../data/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
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
} from "../../components/GlobalStyles/authStyle";
import OAuth from "../../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData, mobile: "", address: "", about: "" };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      router.push("/complete-profile");
    } catch (error) {
      toast.error("Something went wrong with registration");
      console.log(error);
    }
  };

  return (
    <>
      <HeadSeo
        title={`Sign In | ${siteMetadata.companyName} `}
        description={"Sign up to start learning"}
        canonicalUrl={`${siteMetadata.siteUrl}/signUp`}
        ogType={"website"}
      />
      <Container>
        <FormContainer>
          <Title>Sign up to start learning</Title>
          <Form>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={onChange}
              value={name}
              required
            />
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              onChange={onChange}
              value={email}
            />
            <Input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              onChange={onChange}
              value={password}
            />
          </Form>
          <FormActions>
            <ForgotContainer>
              <ForgotText>Forgot password?</ForgotText>
              <SignInButton
                type="submit"
                title={"Sign Up"}
                bgColor={"#979797"}
                color={"#0D1117"}
                onClick={onSubmit}
              />
            </ForgotContainer>
            <OR>OR</OR>
            <OAuth />
            <NoAccountContainer>
              Already a member?
              <span>
                <Link href={"signIn"}>Signin</Link>
              </span>
            </NoAccountContainer>
          </FormActions>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignUp;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  width: 100%;
  gap: 1.5rem;
`;
