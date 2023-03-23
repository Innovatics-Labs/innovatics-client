import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import logo from "../assets/images/logo 1.png";
import { QUERIES } from "../constants";
import Copyright from "./Copyright";
import { MaxwidthContainer } from "./GlobalStyles";

const Footer = () => {
  return (
    <BackgroundContainer>
      <FooterContainer>
        <FooterTopSection>
          <div>
            <Image src={logo} alt="" />
          </div>
          <LinksContainer>
            <LinksSection>
              <LinksSectionTitle>About</LinksSectionTitle>
              <LinkList>
                <LinkListItem>
                  <Link href="/about">About Us</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/careers">Careers</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/our-platform">Our Platform</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/community">Community</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/newsroom">Live</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/blog">Blog</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/instructors">Instructors</Link>
                </LinkListItem>
              </LinkList>
            </LinksSection>
            <LinksSection>
              <LinksSectionTitle>Academy</LinksSectionTitle>
              <LinkList>
                <LinkListItem>
                  <Link href="/data-science">Data Science</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/software">Software</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/security">Security</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/cloud">Cloud</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/courses">Learning Paths</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/courses">Courses</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/bootcamps">Bootcamps</Link>
                </LinkListItem>
              </LinkList>
            </LinksSection>
            <LinksSection>
              <LinksSectionTitle>Plans</LinksSectionTitle>
              <LinkList>
                <LinkListItem>
                  <Link href="/features">Pricing & Plans</Link>
                </LinkListItem>
                <LinkListItem>
                  <Link href="/careers">Enterprise Plan</Link>
                </LinkListItem>
              </LinkList>
            </LinksSection>
            <LinksSection>
              <LinksSectionTitle>Support</LinksSectionTitle>
              <LinkList>
                <LinkListItem>
                  <Link href="/features">Help Center</Link>
                </LinkListItem>
              </LinkList>
            </LinksSection>
          </LinksContainer>
        </FooterTopSection>
        <Copyright showHr />
      </FooterContainer>
    </BackgroundContainer>
  );
};

export default Footer;

const BackgroundContainer = styled.footer`
  background-color: #0d1116;
  background-image: url("/bg-grad.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;

const FooterContainer = styled(MaxwidthContainer)`
  color: white;
  padding: var(--container-padding);
  padding-bottom: 2rem;
`;

const FooterTopSection = styled.div`
  display: flex;
  gap: 7rem;
  justify-content: space-evenly;
  padding-block: 2rem;
  @media ${QUERIES.tabletAndSmaller} {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 4rem;
  @media ${QUERIES.phoneAndSmaller} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const LinksSection = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
  }
`;

const LinksSectionTitle = styled.h4`
  margin-top: 0;
  color: #8691a6;
`;

const LinkList = styled.ul`
  line-height: 1.5;
  list-style: none;
  padding-left: 0;
`;

const LinkListItem = styled.li`
  margin-block: 10px;
`;
