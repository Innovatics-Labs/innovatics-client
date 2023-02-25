import Image from "next/image";
import { useState } from "react";
import styled, { css } from "styled-components";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { MdSportsHandball } from "react-icons/md";

import profileBanner from "../../assets/images/profile-banner.png";
import Button from "../../components/Button";
import { db } from "../../../firebaseConfig";
import { QUERIES } from "../../constants";
import Select from "../../components/Select/Select";

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    mobile: "09023435506",
    about:
      "My aspiration is to continue providing reliable and helpful support to users. my aspiration is to continue providing reliable and helpful support to users...",
  });

  const { name, email, mobile, about } = formData;

  const [sortId, setSortId] = useState("newest");

  const onCancel = () => {
    setFormData({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      mobile: "09023435506",
      about:
        "My aspiration is to continue providing reliable and helpful support to users. my aspiration is to continue providing reliable and helpful support to users...",
    });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (auth.currentUser.displayName !== name) {
        // Update display name in fb
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // Update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not update profile details");
    }
  };

  return (
    <Container>
      <Header>
        <ImageContainer>
          <Image src={profileBanner} alt="profile banner" priority />
        </ImageContainer>
        <IntroContainer>
          <IconContainer>
            <MdSportsHandball size={55} color={"white"} />
          </IconContainer>
          <Title>Profile Settings</Title>
        </IntroContainer>
      </Header>
      <Details>
        <TabHeader>
          <TabList>
            <Tab active>My Details</Tab>
            <Tab>Learnings</Tab>
            <Tab>Certifications</Tab>
            <Tab>Plan</Tab>
            <Tab>Community</Tab>
          </TabList>
        </TabHeader>
        <FormSection>
          <FormContainer>
            <FormField>
              <Label>Full Name</Label>
              <Input
                type="text"
                id="name"
                className={!changeDetails ? "profileName" : "profileNameActive"}
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />
            </FormField>
            <FormField>
              <Label>Email</Label>
              <Input
                type="email"
                id="email"
                disabled={!changeDetails}
                value={email}
                onChange={onChange}
              />
            </FormField>
            <FormField>
              <Label>Phone</Label>
              <Input
                type="tel"
                id="mobile"
                disabled={!changeDetails}
                value={mobile}
                onChange={onChange}
              />
            </FormField>
            <FormField>
              <Label>About Me</Label>
              <TextArea
                name="about"
                disabled={!changeDetails}
                id="about"
                cols="30"
                rows="10"
                placeholder=""
              >
                {about}
              </TextArea>
            </FormField>
          </FormContainer>
          <EditActions>
            {changeDetails && (
              <Button
                onClick={() => {
                  onCancel();
                  setChangeDetails((prevState) => !prevState);
                }}
                title={"Cancel"}
                color={"#fff"}
                variant="outline"
              />
            )}
            <Button
              width={!changeDetails && "100%"}
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
              title={changeDetails ? "Save" : "Edit"}
              bgColor={changeDetails ? "#6E40C9" : "#fff"}
              color={changeDetails ? "#fff" : "#0D1117"}
            />
          </EditActions>
        </FormSection>
        {/* <Select
          label="Sort"
          value={sortId}
          onChange={(ev) => setSortId(ev.target.value)}
        >
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
        </Select> */}
      </Details>
    </Container>
  );
};

export default Profile;

const Container = styled.div``;
const Header = styled.header`
  position: relative;
`;

const ImageContainer = styled.div`
  /* overflow: hidden; */
  img {
    object-fit: cover;
    width: 100%;
    max-height: 300px;
    min-height: 200px;
    height: auto;
  }
`;

const IntroContainer = styled.div`
  padding: 0.5rem var(--container-padding);
  display: flex;
  color: white;
  gap: 1.5rem;
  background: #0d1117;
  width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  }
`;

const IconContainer = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  border: 5px solid #ffffff;
  border-radius: 100%;
  background: linear-gradient(180deg, #8b90ff 0%, #eb73ff 100%);
  transform: translateY(-50%);
  /* position: relative;
  bottom: 50px; */

  svg {
    transform: rotate(-30deg);
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-block: 10px;
`;

const Details = styled.div`
  padding: 2rem var(--container-padding);
  background: #0d1117;
`;

const TabHeader = styled.div`
  background: #0d1117;
  color: white;
  border-bottom: 1px solid #8691a6;
`;

const TabList = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-left: 0;
  align-items: center;
`;

const Tab = styled.li`
  font-weight: 500;
  font-size: var(--font-size-md);

  ${({ active }) =>
    active &&
    css`
      background: #fff;
      color: #0d1117;
      border-radius: 100px;
      padding: 0.7rem 1.2rem;
    `}
`;

const FormSection = styled.main`
  display: flex;
  margin-block: 2rem;
  gap: 2rem;
  justify-content: space-between;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  }
`;

const FormContainer = styled.div``;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  width: 350px;
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(13, 17, 23, 0.5);
  border: 1px solid #8691a6;
  border-radius: 10px;
  width: 100%;

  :not(:disabled) {
    color: #8691a6;
  }
`;

const EditActions = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  @media ${QUERIES.tabletAndSmaller} {
    gap: 1.5rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  background: rgba(13, 17, 23, 0.5);
  border: 1px solid #8691a6;
  border-radius: 10px;
  width: 100%;
  padding: 1rem;
  color: #8691a6;
`;
