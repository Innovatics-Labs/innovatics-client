import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import logo from "../assets/images/logo 1.png";
import Copyright from "./Copyright";

const Footer = () => {
  return (
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
                <Link href="/features">About Us</Link>
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
                <Link href="/newsroom">Newsroom</Link>
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
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #0d1117;
  color: white;
  padding-inline: 4rem;
`;

const FooterTopSection = styled.div`
  display: flex;
  gap: 7rem;
  padding-block: 2rem;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
const LinksSection = styled.div``;

const LinksSectionTitle = styled.h2`
  margin-top: 0;
  font-weight: 600;
  font-size: 18px;
  color: #8691a6;
`;

const LinkList = styled.ul`
  font-size: 18px;
  line-height: 22px;
  list-style: none;
  padding-left: 0;
`;

const LinkListItem = styled.li`
  margin-block: 10px;
  font-size: 18px;
`;
