import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import useSWR from "swr";

import ServiceHero from "../../components/services/Hero";
import { QUERIES, WEIGHTS } from "../../constants";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import platform from "../../assets/images/platform.png";
import JoinDiscord from "../../components/JoinDiscord";
import {
  MentorshipContent,
  MentorshipSection,
  Title,
  SubTitle,
  Contact,
  TextContent,
} from "./[slug]";
import Newsletter from "../../components/Newsletter";
import ContactDetail from "../../components/ContactDetail";
import JobPlacement from "../../components/home/JobPlacementSection";
import OurProcess from "../../components/OurProcess";
import PathCard from "../../components/PathCard";
import FaqSection from "../../components/FaqSection";
import { careerOutcome } from "./data";
import { fetcher } from "../../utils";
import Spinner from "../../components/Spinner";

const Index = () => {
  const [data, setData] = useState(null);
  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR("/api/staticdata", fetcher);

  useEffect(() => {
    if (apiData) {
      setData(apiData);
    }
  }, [apiData]);

  if (error) return <div>Failed to load</div>;
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <div>
      <ServiceHero
        bgImage={"/processor.png"}
        headline="Bootcamp"
        subtitle={"Start your career with the field experts"}
      />
      <div>
        <BootCampsSection>
          <MaxwidthContainer>
            <UpcomingText>UPCOMING BOOTCAMPS</UpcomingText>
            <AvailableBootcamps>
              {data &&
                data.bootcamps.map(({ name, slug }, index) => (
                  <PathCard
                    key={index + name}
                    href={`/bootcamps/${slug}`}
                    number={index + 1}
                    topic={name}
                    id={index}
                    index={index}
                  />
                ))}
            </AvailableBootcamps>
          </MaxwidthContainer>
        </BootCampsSection>
        <Contact>
          <TextContent>
            <Title>
              Skills and knowledge you need to succeed in today&apos;s
              data-driven world.
            </Title>
            <SubTitle>
              We offer a range of programs that cover a wide range of topics,
              including machine learning, deep learning, Python for kids, data
              visualization, and data engineering. If you&apos;re interested in
              enrolling in our Data Science Bootcamp, please review our course
              details, instructor bios, schedule, tuition and financing options,
              enrollment process, career outcomes, and student testimonials.
            </SubTitle>
          </TextContent>
        </Contact>
        <BackgroundContainer>
          <OurProcess
            title={"Get to know our enrollment process"}
            subtitle={
              "By following these steps, you can successfully enroll in our Data Science Bootcamp and begin your journey towards a rewarding career in data science. If you have any questions about the enrollment process, please consult our FAQ section or contact us directly"
            }
            process1="Submit Your Application"
            process2="Application Review"
            process3="Enrollment Confirmation"
            process4="Prepare for the Bootcamp"
            action={false}
          />
          <MaxwidthContainer>
            <Container>
              <Content>
                <ContentImage>
                  <Image src={platform} alt="" sizes="100vw" />
                </ContentImage>
                <CardSection>
                  <TextIntro>
                    <MainTitle>
                      Career outcomes that our students have achieved
                    </MainTitle>
                    <MainSubtitle>
                      Our graduates have achieved success across a range of
                      industries, including technology, healthcare, finance, and
                      more. They have also earned competitive salaries and
                      benefit.
                    </MainSubtitle>
                  </TextIntro>
                  <CardsContainer>
                    {careerOutcome.map(({ title, subTitle, icon }) => (
                      <Card key={title}>
                        <Top>
                          <Icon>{icon}</Icon>
                          <p>{title}</p>
                        </Top>
                        <Text>{subTitle}</Text>
                      </Card>
                    ))}
                  </CardsContainer>
                </CardSection>
              </Content>
            </Container>
          </MaxwidthContainer>
        </BackgroundContainer>
        <JobPlacement />
        <FaqSection withBg={true} />
        <MentorshipSection>
          <Contact>
            <TextContent>
              <Title>Have any further questions?</Title>
              <SubTitle>
                Make use of our contact form to ask any further questions and
                get feedback as soon as possible from the managements of the
                programs
              </SubTitle>
            </TextContent>
          </Contact>
          <MentorshipContent>
            <ContactDetail />
            <Newsletter />
          </MentorshipContent>
        </MentorshipSection>
        <JoinDiscord />
      </div>
    </div>
  );
};

export default Index;

const BackgroundContainer = styled.section`
  max-width: 100vw;
  background-color: rgba(18, 18, 18);
  padding-bottom: 7rem;
  background-image: url("/bg-grad.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  padding: 3rem var(--container-padding);
  padding-bottom: 0px;
  gap: 2rem;
  position: relative;
  isolation: isolate;
`;

const TextIntro = styled.div`
  color: white;
  margin-bottom: 2.5rem;
  margin-inline: auto;
  line-height: 1.2;
`;

const MainTitle = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-2xl);
  color: white;
`;

const MainSubtitle = styled.p`
  color: var(--mid-grey);
  font-size: var(--font-size-md);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 3rem;
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const ContentImage = styled.div`
  align-self: center;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

const CardSection = styled.div``;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
  padding-bottom: 2rem;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  /* background: linear-gradient(
    -286deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0) 98.21%
  ); */
  background: linear-gradient(
    145.35deg,
    rgba(62, 63, 73, 0.7) 4.67%,
    rgba(62, 63, 73, 0) 95.66%
  );
  color: white;
  border-radius: 19px;
`;

const Top = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-md);
`;

const Icon = styled.div`
  background: rgba(13, 17, 23, 0.8);
  border-radius: 5px;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-block: 1.5rem;
`;

const BootCampsSection = styled.div`
  background-color: #121212;
  padding: var(--container-padding);
`;

const UpcomingText = styled.h5`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: var(--font-size-xl);
`;

const AvailableBootcamps = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
