import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { MdSportsHandball } from "react-icons/md";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import profileBanner from "../../assets/images/profile-banner.png";
import Button from "../../components/Button";
import { auth, db } from "../../../firebaseConfig";
import { QUERIES } from "../../constants";
import AuthRoute from "../../HOC/authRoute";
import { toast } from "react-toastify";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import { AuthContext } from "../../context/AuthContext";
import LearningsTab from "../../components/dash-profile/LearningsTab";
import CertificationsTab from "../../components/dash-profile/CertificationsTab";
import PlanTab from "../../components/dash-profile/PlanTab";

const Profile = () => {
  const [changeDetails, setChangeDetails] = useState(false);
  const { userData } = useContext(AuthContext);
  const [user, loading, error] = useDocumentOnce(
    doc(db, "users", userData.userId),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [formData, setFormData] = useState({
    name: userData.userName,
    email: userData.userEmail,
    mobile: "",
    about: "",
  });

  const { name, email, mobile, about } = formData;

  const [sortId, setSortId] = useState("newest");

  const onCancel = () => {
    setFormData({
      ...formData,
      name: userData.userName,
      about: user.data().about,
      mobile: user.data().mobile,
    });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async () => {
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
          mobile,
          about,
        });
        toast.success("Successfully update profile details");
      }
    } catch (error) {
      console.log(error);
      toast.error("Could not update profile details");
    }
  };

  useEffect(() => {
    if (user) {
      setFormData((prev) => {
        const previous = prev;
        return {
          ...previous,
          about: user.data().about,
          mobile: user.data().mobile,
        };
      });
      // console.log({ user: user.data() });
    }
  }, [user]);

  return (
    <AuthRoute>
      <Container>
        <Header>
          <ImageContainer>
            <Image src={profileBanner} alt="profile banner" priority />
          </ImageContainer>
          <MaxwidthContainer>
            <IntroContainer>
              <IconContainer>
                <MdSportsHandball color={"white"} />
              </IconContainer>
              <Title>Profile Settings</Title>
            </IntroContainer>
          </MaxwidthContainer>
        </Header>
        <MaxwidthContainer>
          <Details>
            <Tabs>
              <TabHeader>
                <StyledTabList>
                  <StyledTab>My Details</StyledTab>
                  <StyledTab>Learnings</StyledTab>
                  <StyledTab>Certifications</StyledTab>
                  <StyledTab>Plan</StyledTab>
                </StyledTabList>
              </TabHeader>
              <TabPanels>
                <TabPanel>
                  <FormSection>
                    {user && (
                      <FormContainer>
                        <FormField>
                          <Label>Full Name</Label>
                          <Input
                            type="text"
                            id="name"
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
                            disabled={true}
                            value={email}
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
                            value={about}
                            placeholder="About me"
                            onChange={onChange}
                          ></TextArea>
                        </FormField>
                      </FormContainer>
                    )}
                    <EditActions>
                      {user && changeDetails && (
                        <Button
                          width={"100%"}
                          onClick={() => {
                            onCancel();
                            setChangeDetails((prevState) => !prevState);
                          }}
                          title={"Cancel"}
                          color={"#fff"}
                          variant="outline"
                        />
                      )}
                      {user && (
                        <Button
                          width={"100%"}
                          onClick={() => {
                            changeDetails && onSubmit();
                            setChangeDetails((prevState) => !prevState);
                          }}
                          title={changeDetails ? "Save" : "Edit"}
                          bgColor={changeDetails ? "#6E40C9" : "#fff"}
                          color={changeDetails ? "#fff" : "#0D1117"}
                        />
                      )}
                    </EditActions>
                  </FormSection>
                </TabPanel>
                <TabPanel>
                  <LearningsTab />
                </TabPanel>
                <TabPanel>
                  <CertificationsTab />
                </TabPanel>
                <TabPanel>
                  <PlanTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Details>
        </MaxwidthContainer>
      </Container>
    </AuthRoute>
  );
};

export default Profile;

const Container = styled.div`
  background: #0d1117;
`;

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

  /* @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  } */
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
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
    font-size: 60px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 90px;
    height: 90px;

    svg {
      transform: rotate(-30deg);
      font-size: 50px;
    }
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

const StyledTabList = styled(TabList)`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 1rem;
  padding-left: 0;
  align-items: center;
`;

const StyledTab = styled(Tab)`
  font-weight: 500;
  font-size: var(--font-size-md);
  all: unset;
  cursor: pointer;

  &[data-reach-tab][data-selected] {
    background: #fff;
    color: #0d1117;
    border-radius: 100px;
    padding: 0.7rem 1.2rem;
  }
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

const FormContainer = styled.div`
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
  width: 500px;
  @media ${QUERIES.tabletAndSmaller} {
    width: 80%;
  }
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
