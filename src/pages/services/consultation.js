import styled from 'styled-components';
import Image from 'next/image';

import { MaxwidthContainer } from '../../components/GlobalStyles';
import LineGradient from '../../components/LineGradient';
import ServiceHero from '../../components/services/Hero';
import ServiceCard from '../../components/services/ServiceCard';
import ContactDetail from '../../components/ContactDetail';
import Newsletter from '../../components/Newsletter';
import { WEIGHTS } from '../../constants';
import JoinDiscord from '../../components/JoinDiscord';
import arrow from '../../assets/images/Group 2.png';
import pinterest from '../../assets/images/pinterest.png';
import mercedes from '../../assets/images/mercedes.png';
import kpmg from '../../assets/images/kpmg-logo.png';
import { GradientDivider } from './career-change';
import { Description, DetailSection, ServiceContent } from './training';

import dataImg from '../../assets/images/data-luke-chesse-unsplash.png';
import cyberImg from '../../assets/images/cyber-fly-d-unsplash.png';
import softImg from '../../assets/images/software-david-pupaza-unsplash.png';
import cloudImg from '../../assets/images/cloud-freepik-svstudioart.png';

const Consultation = () => {
  return (
    <div>
      <ServiceHero
        headline={'Consultation & Contracting'}
        subtitle='Our Service to serve you'
        bgImage={'/geometry.png'}
      />
      <DetailSection>
        <ServiceContent>
          <Description>
            <LineGradient
              colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
              colorTo='hsla(144, 85%, 42%, 0)'
            />
            <p>
              Our consultation and contracting service provides businesses and
              organizations with access to expert guidance and support in the
              fields of data science, cloud engineering, networking, and
              software engineering. Our team of experienced consultants and
              contractors are highly skilled in these areas, and can provide the
              resources and expertise necessary to help businesses and
              organizations achieve their goals.
            </p>
            <LineGradient
              colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
              colorTo='hsla(144, 85%, 42%, 0)'
            />
          </Description>
          <TrainingSection>
            <ServiceCard
              title={'Data Science'}
              img={dataImg}
              description='Our data science consultation and contracting service provides businesses and organizations with access to experts in data analysis, machine learning, and statistical modeling. Our team of data scientists can provide guidance and support in areas such as data collection, cleaning, and analysis, as well as the development of machine learning models and statistical models. Our data science contractors are skilled in popular data science tools such as Python, R, and SQL, and can provide support on a short-term or long-term basis.'
              action={false}
            />
            <GradientDivider>
              <LineGradient
                height='100px'
                colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
                colorTo='hsla(144, 85%, 42%, 0)'
              />
            </GradientDivider>
            <ServiceCard
              reverse
              title={'Cloud Engineering'}
              img={cloudImg}
              description='As more and more businesses move their operations to the cloud, the need for skilled cloud engineers has grown significantly. Our cloud engineering consultation and contracting service provides businesses and organizations with access to experts in cloud infrastructure, deployment, and management. Our team of cloud engineers can provide guidance and support in areas such as cloud architecture design, deployment and scaling, and security. Our cloud engineering contractors are skilled in popular cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), and can provide support on a short-term or long-term basis.'
              action={false}
            />
            <GradientDivider>
              <LineGradient
                height='100px'
                colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
                colorTo='hsla(144, 85%, 42%, 0)'
              />
            </GradientDivider>
            <ServiceCard
              title={'Software Engineering'}
              img={softImg}
              description='Our networking consultation and contracting service provides businesses and organizations with access to experts in network design, implementation, and maintenance. Our team of network engineers can provide guidance and support in areas such as network security, routing, switching, and troubleshooting. Our networking contractors are skilled in popular network technologies such as Cisco, Juniper, and Palo Alto, and can provide support on a short-term or long-term basis.'
              action={false}
            />
            <GradientDivider>
              <LineGradient
                height='100px'
                colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
                colorTo='hsla(144, 85%, 42%, 0)'
              />
            </GradientDivider>
            <ServiceCard
              reverse
              title={'Cyber Security'}
              img={cyberImg}
              description='Our software engineering consultation and contracting service provides businesses and organizations with access to experts in software development and engineering. Our team of software engineers can provide guidance and support in areas such as software design, development, testing, and maintenance. Our software engineering contractors are skilled in popular programming languages such as Java, Python, and C++, and can provide support on a short-term or long-term basis.'
              action={false}
            />
          </TrainingSection>
          <Bottom>
            <GradientDivider>
              <LineGradient
                height='150px'
                colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
                colorTo='hsla(144, 85%, 42%, 0)'
              />
            </GradientDivider>
            <p>
              Whether you are looking for expert guidance and support, or access
              to a diverse range of talented professionals, our consultation and
              contracting service can provide the resources and expertise
              necessary to help your business or organization achieve success in
              the fields of data science, cloud engineering, networking, and
              software engineering. Contact us today to learn more about how we
              can help you reach your goals.
            </p>
            <GradientDivider>
              <LineGradient
                height='150px'
                colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
                colorTo='hsla(144, 85%, 42%, 0)'
              />
            </GradientDivider>
          </Bottom>
        </ServiceContent>
        <SectionWithGradient>
          <Partners>
            <p
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                fontSize: 24,
                justifyContent: 'center',
                marginBottom: '2rem',
              }}
            >
              Dive into the world of data-driven companies and unlock your
              potential
              <Image src={arrow} alt='' />
            </p>
            <CompanyList>
              <Image src={kpmg} alt='' />
              <Image src={pinterest} alt='' />
              <Image src={mercedes} alt='' />
              <Image src={pinterest} alt='' />
              <Image src={kpmg} alt='' />
              <Image src={pinterest} alt='' />
              <Image src={mercedes} alt='' />
              <Image src={kpmg} alt='' />
              <Image src={pinterest} alt='' />
            </CompanyList>
          </Partners>
        </SectionWithGradient>
        <Contactcontainer>
          <GradientDivider>
            <LineGradient
              height='150px'
              colorFrom={'hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)'}
              colorTo='hsla(144, 85%, 42%, 0)'
            />
          </GradientDivider>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontWeight: '600', fontSize: 32 }}>Reach out to us</h4>
            <p>Schedule a call or meeting with us in few clicks</p>
          </div>
          <Newsletter />
          <ContactDetail />
        </Contactcontainer>
        <JoinDiscord />
      </DetailSection>
    </div>
  );
};

export default Consultation;

const TrainingSection = styled.section`
  display: grid;
  place-items: center;
`;

const Bottom = styled.div`
  text-align: center;
  p {
    line-height: 1.5;
    max-width: 50ch;
    font-weight: ${WEIGHTS.medium};
    font-size: var(--font-size-md);
    margin-inline: auto;
  }
`;

const SectionWithGradient = styled.div`
  background: linear-gradient(90deg, #578dff 0%, #dd56ff 100%);
`;

const Contactcontainer = styled.div`
  padding: var(--container-padding);
  display: grid;
  place-items: center;
`;

const Partners = styled(MaxwidthContainer)`
  padding: var(--container-padding);
`;

const CompanyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`;
