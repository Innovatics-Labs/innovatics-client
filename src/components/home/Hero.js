import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { QUERIES } from '../../constants';
import Button from '../Button';
import { MaxwidthContainer } from '../GlobalStyles';
import heroGroup from '../../assets/images/hero-group.png';
import downarrow from '../../assets/images/Group 2.png';
import kpmgLogo from '../../assets/images/kpmg-logo.png';
import mercedes from '../../assets/images/mercedes.png';
import pinterest from '../../assets/images/pinterest.png';
import intel from '../../assets/images/intel.png';
import ibm from '../../assets/images/ibm.png';
import fiverr from '../../assets/images/fiverr.png';
import publix from '../../assets/images/publix.png';
import sage from '../../assets/images/sage.png';
import RadialGradient from '../gradients/RadialGradient';

const Hero = () => {
  return (
    <HeroContainer>
      <MaxwidthContainer>
        <HeroCampaign>
          <RadialGradient top='100px' right='100px' />
          <RadialGradient
            gradient='#074BC9 17.55%, #074BC9 27.56%, rgba(7, 75, 201, 0.45) 49.89%, rgba(7, 75, 201, 0.52) 56.53%, #074BC9 65.69%'
            top='200px'
            right='350px'
          />
          <HeroContentContainer>
            <HeroDetails>
              <Heading>
                Innovating robust Technical solutions for Businesses
              </Heading>
              <SubHeading>
                We train and provide you opportunities in the vast competitive
                tech space while providing innovative solutions to business that
                needs proficient contractors.
              </SubHeading>
              <ButtonGroup>
                <Button
                  as={Link}
                  href='https://form.jotform.com/InnovatiCS/innovatics-18'
                  title='Register Now'
                  bgColor={'white'}
                  color='#121212'
                />
                <Button
                  as={Link}
                  href='/bootcamps'
                  title='Download Curriculum'
                  variant={'outline'}
                />
              </ButtonGroup>
            </HeroDetails>
            <HeroImages>
              <ImagesContainer>
                <Image src={heroGroup} alt='' sizes='100vw' />
              </ImagesContainer>
            </HeroImages>
          </HeroContentContainer>
          <DataCompany>
            <JoinCompany>
              <span>Join the world leading data driven companies</span>
              <Image src={downarrow} alt='' />
            </JoinCompany>
            <DataCompanyImages>
              <CompanyLogo>
                <div>
                  <Image src={intel} alt='intel' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={ibm} alt='ibm' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={fiverr} alt='fiverr' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={publix} alt='publix' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={sage} alt='sage' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={mercedes} alt='mercedes' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={pinterest} alt='pinterest' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={sage} alt='' sizes='100vw' />
                </div>
              </CompanyLogo>
              <CompanyLogo>
                <div>
                  <Image src={ibm} alt='' sizes='100vw' />
                </div>
              </CompanyLogo>
            </DataCompanyImages>
          </DataCompany>
        </HeroCampaign>
      </MaxwidthContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.header`
  padding-bottom: var(--container-padding);
  background: linear-gradient(90deg, #3a6ed2, #4a7ed3, #2d215b, #16141c);
`;

const HeroCampaign = styled.section`
  padding-inline: var(--container-padding);
  padding-bottom: 10px;
  position: relative;
  isolation: isolate;
`;

const HeroContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 10rem;
  @media ${QUERIES.tabletAndSmaller} {
    gap: 2rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
    padding-top: 5rem;
  }
`;

const HeroDetails = styled.div`
  flex: 1;
  padding-top: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 5rem;
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-bottom: 1rem;
  color: white;
`;

const SubHeading = styled.p`
  font-weight: 500;
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: #ffffff;
  max-width: 50ch;
  margin-bottom: 2.5rem;
  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
    width: 70vw;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: revert;
    width: revert;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-block: clamp(1rem, 1.19vw + 0.429rem, 2rem);
  flex-wrap: wrap;
  a {
    font-size: 1rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    a {
      width: 100%;
      padding: 10px;
    }
  }
`;

const HeroImages = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const ImagesContainer = styled.div`
  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }
`;

const DataCompany = styled.div`
  --item-width: 180px;
  --item-height: 75px;
  color: white;
  position: relative;
  top: 100px;
`;

const JoinCompany = styled.p`
  display: flex;
  align-items: center;
  font-size: clamp(0.875rem, 1.19vw + 0.429rem, 1.5rem);
  margin-block: clamp(1rem, 1.19vw + 0.429rem, 2rem);
  img {
    margin-inline: 1rem;
  }
`;

const DataCompanyImages = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  transition: transform 0.6s ease;
  white-space: nowrap;
  transform: none;
  scroll-snap-type: x mandatory;
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: #121212 #e0e0e0;

  ::-webkit-scrollbar {
    height: 8px;
    width: 10px;
    margin-top: 50px;
  }

  ::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    padding-top: 1rem;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #121212;
    border-radius: 100px;
  }
`;

const CompanyLogo = styled.div`
  display: flex;
  scroll-snap-align: start;
  flex: 1;
  margin-left: 16px;

  div {
    display: flex;
    background-color: white;
    border-radius: 16px;
    align-items: center;
    padding: 10px;
    justify-content: center;
    height: var(--item-height);
    overflow: hidden;
    scroll-snap-align: start;
    width: var(--item-width);
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
