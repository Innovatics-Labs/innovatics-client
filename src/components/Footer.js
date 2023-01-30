import Image from "next/image";
import styled from "styled-components";
import logo from "../assets/images/logo 1.png";

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
                <a class="Link--secondary" href="/features">
                  About Us
                </a>
              </LinkListItem>
              <LinkListItem>
                <a href="/careers">Careers</a>
              </LinkListItem>
              <LinkListItem class="lh-condensed mb-3">
                <a href="/our-platform">Our Platform</a>
              </LinkListItem>
              <LinkListItem class="lh-condensed mb-3">
                <a href="/community">Community</a>
              </LinkListItem>
              <LinkListItem>
                <a href="/newsroom">Newsroom</a>
              </LinkListItem>
              <LinkListItem class="lh-condensed mb-3">
                <a href="/blog">Blog</a>
              </LinkListItem>
              <LinkListItem>
                <a href="/instructors">Instructors</a>
              </LinkListItem>
            </LinkList>
          </LinksSection>
          <LinksSection>
            <LinksSectionTitle>Academy</LinksSectionTitle>
            <LinkList>
              <LinkListItem>
                <a class="Link--secondary" href="/data-science">
                  Data Science
                </a>
              </LinkListItem>
              <LinkListItem>
                <a href="/software">Software</a>
              </LinkListItem>
              <LinkListItem class="lh-condensed mb-3">
                <a href="/security">Security</a>
              </LinkListItem>
              <LinkListItem class="lh-condensed mb-3">
                <a href="/cloud">Cloud</a>
              </LinkListItem>
              <LinkListItem>
                <a href="/courses">Courses</a>
              </LinkListItem>
              <LinkListItem class="lh-condensed mb-3">
                <a href="/bootcamps">Bootcamps</a>
              </LinkListItem>
            </LinkList>
          </LinksSection>
          <LinksSection>
            <LinksSectionTitle>Plans</LinksSectionTitle>
            <LinkList>
              <LinkListItem>
                <a class="Link--secondary" href="/features">
                  Pricing & Plans
                </a>
              </LinkListItem>
              <LinkListItem>
                <a href="/careers">Enterprise Plan</a>
              </LinkListItem>
            </LinkList>
          </LinksSection>
          <LinksSection>
            <LinksSectionTitle>Support</LinksSectionTitle>
            <LinkList>
              <LinkListItem>
                <a class="Link--secondary" href="/features">
                  Help Center
                </a>
              </LinkListItem>
            </LinkList>
          </LinksSection>
        </LinksContainer>
      </FooterTopSection>
      <Copyright>
        <hr />
        <p>Copyright &copy; Innovatics 2022 All right reserved</p>
      </Copyright>
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

const Copyright = styled.div`
  text-align: center;
  color: #8691a6;

  hr {
    margin-bottom: 1.5rem;
    border: 1px solid #8691a6;
  }
`;
