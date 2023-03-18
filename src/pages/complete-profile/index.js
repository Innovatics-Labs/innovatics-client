import { useRouter } from "next/router";
import { useState } from "react";
import { MdSportsHandball } from "react-icons/md";
import styled from "styled-components";
import { auth, db } from "../../../firebaseConfig";
import { doc, updateDoc, getDoc, serverTimestamp } from "firebase/firestore";

import Button from "../../components/Button";
import {
  ContactDetails,
  DescriptionForm,
} from "../../components/completeprofile";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { Container } from "../../components/GlobalStyles/authStyle";
import AuthRoute from "../../HOC/authRoute";

const INITIAL_DATA = {
  mobile: "",
  address: "",
  about: "",
};

const CompleteProfile = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const router = useRouter();

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <ContactDetails key={1} {...data} updateFields={updateFields} />,
      <DescriptionForm key={2} {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isLastStep) return;

    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(userRef);
      if (auth.currentUser && docSnap.exists()) {
        // Update in firestore
        await updateDoc(userRef, {
          ...data,
        });
        alert("Successful Account Creation");
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not update profile details");
    }
  };

  return (
    <AuthRoute>
      <Container>
        <FormContainer>
          <Header>
            <IconContainer>
              <MdSportsHandball size={42} color={"white"} />
            </IconContainer>
            <div>
              <Title>Complete your profile</Title>
              <SubTitle>
                Finish setting up your profile to customize your experience
              </SubTitle>
            </div>
          </Header>
          <Divider>
            <Ellipse active={currentStepIndex === 0} />
            <Ellipse active={currentStepIndex === 1} />
            <hr />
          </Divider>
          <div>
            <Step>
              {currentStepIndex + 1} of {steps.length}
            </Step>
            {step}
          </div>
          <FormActions>
            {!isFirstStep ? (
              <Button
                type="button"
                title={"Back"}
                onClick={back}
                variant={"outline"}
                color="#8691A6"
              />
            ) : (
              <Button
                onClick={() => router.push("/dashboard")}
                title={"Skip"}
                variant={"outline"}
                color="#8691A6"
              />
            )}
            {isLastStep ? (
              <Button
                onClick={onSubmit}
                type="submit"
                title={"Finish"}
                bgColor={"#979797"}
                color={"rgba(13, 17, 23, 0.5);"}
              />
            ) : (
              <Button
                type="button"
                onClick={next}
                title={"Continue"}
                bgColor={"#979797"}
                color={"rgba(13, 17, 23, 0.5);"}
              />
            )}
          </FormActions>
        </FormContainer>
      </Container>
    </AuthRoute>
  );
};

export default CompleteProfile;

const FormContainer = styled.div`
  padding: 2rem 4rem;
  background: linear-gradient(
    -286.85deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0) 98.21%
  );
  /* filter: drop-shadow(0px 0px 106px rgba(62, 63, 73, 0.25)); */
  box-shadow: 0px 0px 60px rgba(62, 63, 73, 0.25);
  border-radius: 17.7419px;
`;

const Header = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  margin-bottom: 1rem;
  gap: 10px;
`;

const IconContainer = styled.div`
  width: 100;
  height: 100;
  padding: 0.8rem;
  border-radius: 100%;
  background: linear-gradient(180deg, #8b90ff 0%, #eb73ff 100%);

  svg {
    transform: rotate(-30deg);
  }
`;

const SubTitle = styled.p`
  font-weight: 500;
  color: #8691a6;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: white;
  margin-bottom: 5px;
`;

const Ellipse = styled.span`
  margin-inline: 5px;
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 100%;
  background: ${({ active }) => (active ? "#ffffff" : `#8691A6`)};
  display: inline-block;
`;

const Step = styled.p`
  background: linear-gradient(270deg, #6e40c9 0%, #f90107 100%, #f90107 100%);
  border-radius: 100px;
  font-weight: 500;
  font-size: 14px;
  width: fit-content;
  padding: 4px 8px;
  color: #ffffff;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 2rem;
`;

const Divider = styled.div`
  margin-block: 1rem;
  text-align: center;
  hr {
    border: 1px solid rgba(134, 145, 166, 0.3);
  }
`;
