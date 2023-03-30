import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { MenuItem } from "./Navbar";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";

export default function MenuButton() {
  const route = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const dropdownMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      dropdownMenuRef.current &&
      !dropdownMenuRef.current.contains(event.target)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    // subscribe
    route.events.on("routeChangeStart", toggleMenu);

    // unsubscribe
    return () => route.events.off("routeChangeStart", toggleMenu);
  }, [route.events, toggleMenu]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 768) {
  //       setIsExpanded(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropdownMenu ref={dropdownMenuRef}>
      <DropdownButton onClick={toggleMenu}>
        Services <FiChevronDown />
      </DropdownButton>
      <DropdownContent isExpanded={isExpanded}>
        <DropdownLink href="/services/training">Training</DropdownLink>
        <DropdownLink href="/services/consultation">
          Consulting & Contracting
        </DropdownLink>
        <DropdownLink href="/services/innovation">
          Innovation & Development
        </DropdownLink>
        <DropdownLink href="/services/career-change">
          Job Placement
        </DropdownLink>
      </DropdownContent>
    </DropdownMenu>
  );
}

const DropdownMenu = styled.li`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  padding-inline: 0;

  /* &:focus {
    outline: none;
  } */

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  top: 40px;
  left: -30px;
  width: fit-content;
  min-width: 160px;
  z-index: 1;
  background-image: url("/bg-grad.png");
  background: #1d1d1d;
  border-radius: 10px;
  transition: all 0.3s;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    width: 20px;
    height: 10px;
    margin: auto;
    background-color: #1d1d1d;
    transform: translateY(calc(-100% + 1px));
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  }

  /* ${DropdownMenu}:hover & {
    display: block;
  } */

  ${({ isExpanded }) => isExpanded && `display: block;`}

  & > a {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 0.9rem;
    &:hover {
      background-color: #444;
    }
  }

  @media (max-width: 1140px) {
    position: revert;
    cursor: pointer;
    &::before {
      display: none;
    }
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    background-color: #555;
  }
`;
