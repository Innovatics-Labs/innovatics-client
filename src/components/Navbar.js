import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled, { css } from "styled-components";
import logo from "../assets/images/logo 1.png";

const Navbar = () => {
  const route = useRouter();
  return (
    <NavContainer pathName={route.pathname}>
      <Logo>
        <Link href={"/"}>
          <Image src={logo} alt="innovatics logo" />
        </Link>
      </Logo>
      <NavItems>
        <li>
          <Link href={"/academy"}>Academy</Link>
        </li>
        <li>
          <Link href={"/resources"}>Resources</Link>
        </li>
        <li>
          <Link href={"/"}>Pricing</Link>
        </li>
        <SignInButton>
          <Link href={"/signIn"}>Sign In</Link>
        </SignInButton>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-block: 15px;
  /* align-items: center; */
  padding-inline: 4rem;
  background: black;

  ${({ pathName }) =>
    pathName === "/" &&
    css`
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.05);
    `}
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
  font-weight: 400;
  font-size: 18px;
`;

const SignInButton = styled.li`
  border: 1px solid white;
  border-radius: 7px;
  padding: 5px;
  padding-inline: 10px;
`;
