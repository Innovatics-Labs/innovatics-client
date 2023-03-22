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
import { MdCancel } from "react-icons/md";

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
      <Container>
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
                <li>
                  <Link href={"/signIn"}>Sign In</Link>
                </li>
                <SignInButton>
                  <Link href={"/academy"}>Request Information</Link>
                </SignInButton>
                <li
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #FFFFFF",
                    borderRadius: "8px",
                    color: "#121212",
                    padding: "5px 13px",
                  }}
                >
                  <Link href={"/resources"}>Get Started Now</Link>
                </li>
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
      height: var(--navbar-height);
      left: 0;
      top: 0;
      z-index: var(--z-navbar);
    `}

  @media ${QUERIES.tabletAndSmaller} {
    ${({ active }) => `${active && "z-index: 5"}`}
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
  gap: 1.5rem;
  /* flex-wrap: wrap; */
  @media ${QUERIES.tabletAndSmaller} {
    padding-inline: 2rem;
  }
`;

const NavElements = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    position: absolute;
    right: 0;
    top: 85px;
    background-color: black;
    width: 0;
    height: calc(100vh - 85px);
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
  font-size: var(--font-size-md);
  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const SignInButton = styled.li`
  border: 1px solid white;
  border-radius: 7px;
  padding: 5px;
  padding-inline: 10px;
`;
