import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { VscGraph } from 'react-icons/vsc';
import styled from 'styled-components';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';

import { TopicCard, CourseOverview } from '../../components/course';

import siteMetadata from '../../data/siteMetadata';
import HeadSeo from '../../components/HeadSeo';
import GradientIcon from '../../components/GradientIcon';
import InstructorCap from '../../components/InstructorCap';
import JoinDiscord from '../../components/JoinDiscord';
import LineGradient from '../../components/LineGradient';
import Pagination from '../../components/Pagination';
import { QUERIES } from '../../constants';
import { GrayTitle } from '../course-work';
import { db } from '../../../firebaseConfig';
import { MaxwidthContainer } from '../../components/GlobalStyles';

const DashboardClass = () => {
  const [courseDetail, setCourseDetail] = useState({});
  const [susbcription, setSubscription] = useState(false);
  const router = useRouter();
  const { courseId } = router.query;
  const [value, loading, error] = useDocument(doc(db, 'courses', courseId), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (value) {
      setCourseDetail(value.data());
    }
  }, [value, error, loading]);

  return (
    <>
      <HeadSeo
        title={`Course | ${siteMetadata.companyName} `}
        description={courseDetail.description}
        canonicalUrl={`${siteMetadata.siteUrl}/${courseDetail.id}`}
        // ogImageUrl={courseDetail.url}
        ogType={'article'}
      />
      <Container>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && (
          <>
            <CourseOverview courseTitle={courseDetail.title} />
            <CourseSection>
              <CourseSectionContent>
                <GradientContainer>
                  <LineGradient colorFrom={'#44E98600'} colorTo={'#44E986'} />
                  <GradientIcon
                    IconComponent={<VscGraph size={30} color='#44E986' />}
                    bgColor={'#44E986'}
                  />
                </GradientContainer>
                <Content>
                  <Instructordetails>
                    <CapContainer>
                      <InstructorCap size={'140px'} iconsize={70} />
                    </CapContainer>
                    <CourseStats>
                      <InstructorName>
                        <GrayTitle>INSTRUCTOR:</GrayTitle>{' '}
                        {courseDetail.instructor}
                      </InstructorName>
                      <Duration>
                        <GrayTitle>DURATION:</GrayTitle> {courseDetail.duration}
                      </Duration>
                      <Level>
                        <GrayTitle>LEVEL:</GrayTitle> {courseDetail.level}
                      </Level>
                    </CourseStats>
                  </Instructordetails>
                  <CourseContentWrapper>
                    <CourseTitle>{courseDetail.title}</CourseTitle>
                    {susbcription ? (
                      courseDetail.topics ? (
                        courseDetail.topics?.map((topic) => (
                          <TopicCard
                            key={topic.name}
                            topicTitle={topic.name}
                            activityCount={topic.resources.length}
                            topicResource={topic.resources}
                          />
                        ))
                      ) : (
                        <h4>Course coming soon stay tuned.....</h4>
                      )
                    ) : (
                      <SubContainer>
                        <h4>Please Subscribe to see contents.</h4>
                      </SubContainer>
                    )}
                  </CourseContentWrapper>
                </Content>
              </CourseSectionContent>
            </CourseSection>
          </>
        )}

        <PaginationContainer>
          <MaxwidthContainer>
            <Pagination />
          </MaxwidthContainer>
        </PaginationContainer>
        <JoinDiscord />
      </Container>
    </>
  );
};

export default DashboardClass;

const Container = styled.div``;

const CourseSection = styled.section`
  background: #0d1117;
`;

const CourseSectionContent = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;

  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 1rem;
  }
`;

const GradientContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 170px auto 1fr;
  gap: 2rem;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Instructordetails = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const CapContainer = styled.div`
  transform: translateY(-50%);
  @media ${QUERIES.phoneAndSmaller} {
    transform: revert;
  }
`;

const InstructorName = styled.p``;

const CourseStats = styled.div`
  color: #fff;
  display: flex;
  gap: 3rem;
  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
  }
`;

const Duration = styled.p``;
const Level = styled.p`
  text-transform: capitalize;
`;

const CourseContentWrapper = styled.div`
  color: white;
`;

const CourseTitle = styled.h5`
  font-weight: 600;
  font-size: var(--font-size-xl);
`;

const PaginationContainer = styled.div`
  padding: 2rem var(--container-padding);
  background-color: #0d1117;
`;

const SubContainer = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  place-items: center;

  h4 {
    font-size: 20px;
    font-weight: 500;
  }
`;
