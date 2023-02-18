import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import { auth } from "../../firebaseConfig";
import UnstyledButton from "./UnstyledButton";
import logo from "../assets/images/logo 1.png";
import { QUERIES } from "../constants";

const Navbar = () => {
  const route = useRouter();
  const [showNav, setShowNav] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleShowNavbar = () => {
    setShowNav(!showNav);
  };

  const logout = () => {
    if (!loading) {
      signOut(auth);
      route.push("/");
    }
  };

  return (
    <NavContainer pathName={route.pathname}>
      <Container>
        <Logo>
          <Link href={"/"}>
            <Image src={logo} alt="innovatics logo" />
          </Link>
        </Logo>
        <MenuIcon onClick={handleShowNavbar}>
          <GiHamburgerMenu size={26} />
        </MenuIcon>
        <NavElements active={showNav}>
          <NavItems>
            <li>
              <Link href={"/academy"}>Academy</Link>
            </li>
            <li>
              <Link href={"/resources"}>Resources</Link>
            </li>
            <li>
              {!loading && user ? (
                <User href={"/dashboard"}>
                  <FaRegUserCircle size={24} />
                </User>
              ) : (
                <Link href={"/"}>Pricing</Link>
              )}
            </li>
            <SignInButton>
              {!loading && user ? (
                <UnstyledButton onClick={logout}>Logout</UnstyledButton>
              ) : (
                <Link href={"/signIn"}>Sign In</Link>
              )}
            </SignInButton>
          </NavItems>
        </NavElements>
      </Container>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  position: relative;
  background: black;
  ${({ pathName }) =>
    pathName === "/" &&
    css`
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.05);
    `}

  @media ${QUERIES.tabletAndSmaller} {
    z-index: 5;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding-block: 10px;
  max-width: 1400px;
  align-items: center;
  padding-inline: 4rem;
  flex-wrap: wrap;
  @media ${QUERIES.tabletAndSmaller} {
    padding-inline: 2rem;
  }
`;

const NavElements = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    position: absolute;
    right: 0;
    top: 65px;
    background-color: black;
    width: 0;
    height: calc(100vh - 65px);
    transition: all 0.3s ease-in;
    overflow: hidden;

    ${({ active }) => `${active && "width: 200px"}`}
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: white;
  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  align-self: center;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  color: white;
  list-style: none;
  font-size: var(--font-size-md);
  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;
const User = styled(Link)`
  display: inline-block;
  border-radius: 50%;
  padding: 0.5rem;
  background: linear-gradient(180deg, #8b90ff 0%, #eb73ff 100%);
`;

const SignInButton = styled.li`
  border: 1px solid white;
  border-radius: 7px;
  padding: 5px;
  padding-inline: 10px;
`;
