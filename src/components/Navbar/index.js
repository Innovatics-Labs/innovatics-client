import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import styled, { css } from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../../firebaseConfig";
import logo from "../../assets/images/logo 1.png";
import { QUERIES } from "../../constants";
import AuthNavbar from "./AuthNavbar";
import useToggle from "../../hooks/useToggle";
import MenuButton from "../MenuButton";

const Navbar = () => {
  const route = useRouter();
  const [showNav, setShowNav] = useToggle();
  const [user, loading, error] = useAuthState(auth);

  const handleShowNavbar = useCallback(() => {
    setShowNav();
  }, [setShowNav]);

  useEffect(() => {
    // subscribe
    route.events.on("routeChangeStart", handleShowNavbar);

    // unsubscribe
    return () => route.events.off("routeChangeStart", handleShowNavbar);
  }, [handleShowNavbar, route.events]);

  return (
    <NavContainer pathName={route.pathname} active={showNav}>
      <Container user={user}>
        <Logo>
          <Link href={`${user ? "/dashboard" : "/"}`}>
            <Image src={logo} alt="innovatics logo" sizes="100vw" />
          </Link>
        </Logo>
        {!loading && user ? (
          <AuthNavbar loading={loading} auth={auth} />
        ) : (
          <>
            <MenuIcon onClick={handleShowNavbar}>
              {showNav ? <GiCancel size={26} /> : <GiHamburgerMenu size={26} />}
            </MenuIcon>
            <NavElements active={showNav}>
              <NavItems>
                <MenuButton />
                <MenuItem>
                  <Link href={"/bootcamps"}>Bootcamps</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/community"}>Resources</Link>
                </MenuItem>
              </NavItems>
              <NavItems>
                <MenuItem>
                  <Link href={"/signIn"}>Sign In</Link>
                </MenuItem>
                <SignInButton>
                  <Link href={"/faqs"}>Request Information</Link>
                </SignInButton>
                <MenuItem
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    borderRadius: "8px",
                    color: "#121212",
                    padding: "8px 16px",
                  }}
                >
                  <Link href={"/signUp"}>Get Started Now</Link>
                </MenuItem>
              </NavItems>
            </NavElements>
          </>
        )}
      </Container>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  background: black;
  height: var(--navbar-height);
  ${({ pathName }) =>
    pathName === "/" &&
    css`
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.05);
      background-image: var(--glass-dark);
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: var(--z-navbar);
    `}

  @media (max-width:1140px) {
    ${({ active }) => `${active && "z-index: 5"}`}
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding-block: 10px;
  max-width: var(--max-page-width);
  align-items: center;
  padding-inline: 4rem;
  gap: 1.5rem;
  ${({ user }) => user && `justify-content: space-between;`}
  /* flex-wrap: wrap; */

  @media (max-width: 1140px) {
    justify-content: space-between;
    height: 100%;
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-inline: 2rem;
  }
`;

const NavElements = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 1140px) {
    position: absolute;
    right: 0;
    top: 85px;
    background-color: #121212;
    background-image: url("/bg-grad.png");
    background-size: cover;
    width: 0;
    height: calc(100vh - var(--navbar-height));
    transition: all 0.3s ease-in;
    overflow: hidden;
    flex-direction: column;
    justify-content: initial;
    padding-block: 2rem;

    ${({ active }) => `${active && "width: 300px"}`}
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: white;

  @media (max-width: 1140px) {
    display: block;
    cursor: pointer;
    margin-block: auto;
  }
`;

const Logo = styled.div`
  align-self: center;
  @media ${QUERIES.phoneAndSmaller} {
    /* img {
      width: 100%;
      height: auto;
    } */
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  color: white;
  list-style: none;
  padding-left: 0;
  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: flex-start;
    padding-inline: 2rem;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  & > a {
    text-decoration: none;
    height: 100%;
  }
`;

const SignInButton = styled.li`
  border: 1px solid white;
  border-radius: 7px;
  padding: 8px 16px;
`;
