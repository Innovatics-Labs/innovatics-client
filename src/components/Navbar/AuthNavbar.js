import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch, BiLogOutCircle } from "react-icons/bi";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Button from "../Button";
import { QUERIES } from "../../constants";
import { AuthContext } from "../../context/AuthContext";

const AuthNavbar = ({ loading, auth }) => {
  const route = useRouter();
  const { userData } = useContext(AuthContext);
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const signOutHandler = async () => {
    if (!loading) {
      await signOut(auth);
      route.push("/");
    }
  };

  return (
    <>
      <AuthNavContainer>
        <IconContainer>
          <Link href={{ pathname: "/search", query: { name: "data" } }}>
            <BiSearch />
          </Link>
        </IconContainer>
        <IconContainer>
          <User href={"/dashboard/profile"}>
            <FaRegUserCircle />
          </User>
        </IconContainer>
        <UnstyledButton as={IconContainer} onClick={open}>
          <GiHamburgerMenu />
        </UnstyledButton>
      </AuthNavContainer>
      <NavOverlay isOpen={showDialog} onDismiss={close}>
        <NavContent>
          <CloseLogout>
            <CloseButton onClick={close}>X</CloseButton>
            <Logout onClick={signOutHandler}>
              <BiLogOutCircle />
              Logout
            </Logout>
          </CloseLogout>
          <NavDetails>
            <Top>
              <User href={"/dashboard/profile"}>
                <FaRegUserCircle size={38} />
              </User>
              <Name>{userData.userName}</Name>
              <Email>Email: {userData.userEmail}</Email>
            </Top>
            <NavItems>
              <NavItem>
                <Link href="/dashboard">Dashboard</Link>
              </NavItem>
              <NavItem>
                <Link href="/academic-paths">Academic Paths</Link>
              </NavItem>
              <NavItem>
                <Link href="/bookmarks">Bookmarks</Link>
              </NavItem>
              <NavItem>
                <Link href="/certifications">Certifications</Link>
              </NavItem>
              <NavItem>
                <Link href="/bootcamps">Bootcamps</Link>
              </NavItem>
              <NavItem>
                <Link href="/courses">Courses</Link>
              </NavItem>
            </NavItems>
            <SettingsBtn
              title={"More Setting"}
              bgColor="white"
              color={"#0D1117"}
            />
          </NavDetails>
        </NavContent>
      </NavOverlay>
    </>
  );
};

export default AuthNavbar;

const AuthNavContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
  color: white;
  padding-left: 0;
  font-size: var(--font-size-md);
  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
  }
`;

const User = styled(Link)`
  display: inline-block;
  border-radius: 50%;
  padding: 0.5rem;
  background: linear-gradient(180deg, #8b90ff 0%, #eb73ff 100%);
`;

const IconContainer = styled.li`
  svg {
    font-size: 25px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    svg {
      font-size: 20px;
    }
  }
`;

const NavOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const NavContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  color: white;
  width: 500px;
  height: 100%;
  overflow-y: scroll;
  background: white;
  padding: 32px;
  background: linear-gradient(286.85deg, #040d21 0%, #3e3f49 98.21%);
  box-shadow: 0px 0px 106.452px rgba(246, 249, 253, 0.25);
  border-radius: 30px 0px 0px 30px;

  @media ${QUERIES.tabletAndSmaller} {
    width: 300px;
  }
`;

const CloseButton = styled(UnstyledButton)`
  padding: 16px;
`;

const CloseLogout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;

const Logout = styled(UnstyledButton)`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const NavDetails = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  gap: 1.3rem;
  align-items: center;
`;

const NavItems = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const NavItem = styled.li`
  border-bottom: 1px solid #8691a6;
  padding-bottom: 10px;
  :not(:last-of-type) {
    margin-bottom: 0.6rem;
  }
`;

const Top = styled.div`
  text-align: center;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: var(--font-size-md);
  margin-block: 10px;
`;

const Email = styled.p`
  margin-block: 2px;
  font-size: 0.8rem;
  color: #8691a6;
`;

const SettingsBtn = styled(Button)`
  border-radius: 100px;
`;
