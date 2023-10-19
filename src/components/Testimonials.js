import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from 'next/link';

import { GiHumanTarget } from 'react-icons/gi';
import { MaxwidthContainer } from './GlobalStyles';
import { QUERIES, WEIGHTS } from '../constants';

const Testimonials = () => {
  return (
    <Container>
      <MaxwidthContainer>
        <Heading>Testimonials</Heading>
        <SubHeading>
          Don&apos;t just take our word for it - here&apos;s what some of our
          Data Science Bootcamp graduates have to say about their experiences.
          We&apos;re proud of the successes that our graduates have achieved,
          and we&apos;re committed to continuing to provide high-quality data
          science education to the next generation of data professionals.
        </SubHeading>
        <TestimonialCarousel>
          <Splide aria-label='Testimonials' style={{ marginTop: '2.5rem' }}>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/feed/update/urn:li:activity:7082520403440537600?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7082520403440537600%2C7082756844871393280%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287082756844871393280%2Curn%3Ali%3Aactivity%3A7082520403440537600%29`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Zameer Shaik</Testimonee>
                    <TestimoneePosition>
                      Technical Consultant at Broadridge Financial Solutions
                      Inc.
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    I have attended the previous batch. Dedication of the
                    instructors is unmatched in the industry. Course fees is
                    unbelievably cheap.. just $2999/-. And, you can repeat the
                    program as many times till you are proficient at it. This is
                    just insane!
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/feed/update/urn:li:activity:7082520403440537600?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7082520403440537600%2C7082952936594554880%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287082952936594554880%2Curn%3Ali%3Aactivity%3A7082520403440537600%29`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Tahseen Mohammad</Testimonee>
                    <TestimoneePosition>
                      Data & Analytics Professional (Azure Cloud, Data Science)
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    Amazing data science program-- it is professional planned
                    and executed, highly qualified and dedicated instructors and
                    it covers almost all the current hot topics in data science.
                    If you are seriously considering making a change for good,
                    this is potentially the best training program in the market
                    today.
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/posts/medwani_ai-datascience-python-activity-7082520403440537600-gQQw?utm_source=share&utm_medium=member_desktop`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Javeed Ahmed</Testimonee>
                    <TestimoneePosition>
                      Snr. Service Delivery Leader
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    This is a fantastic program each time bringing in the latest
                    things to learn. Another important thing is you can join the
                    session any number of times till you are satisfied and also
                    join the projects with the new team members.
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/posts/medwani_ai-datascience-python-activity-7082520403440537600-gQQw?utm_source=share&utm_medium=member_desktop`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Iqbal Ismail</Testimonee>
                    <TestimoneePosition>
                      Vice President at State Street
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    An excellent course which will introduce you to the world of
                    AI ML with in-depth hands-on training and one to one
                    support. Students will have access to a number of high
                    quality resources and get exposure to real world projects .
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/posts/medwani_ai-datascience-python-activity-7082520403440537600-gQQw?utm_source=share&utm_medium=member_desktop`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Saken Algiev</Testimonee>
                    <TestimoneePosition>
                      Project Management Professional with 20+ yrs of experience
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    Proud to be one of the first student from Kazakhstan 🇰🇿 on
                    the program which is keep being updated based on the last
                    developments in the field. Special thanks to Mo Medwani -
                    Ph.D. who patiently and clearly explains every detail.. The
                    program is open for everyone and proven record to be the
                    basis to land the dream job. Good luck 👍
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/posts/medwani_ai-datascience-python-activity-7082520403440537600-gQQw?utm_source=share&utm_medium=member_desktop`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Mostafa ETTAYEB</Testimonee>
                    <TestimoneePosition>
                      Logistique et Transport
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    I had the pleasure of attending this training from zero to
                    hero, not to mention the quality of the training but the
                    quality and mastery of this field by our Bro Mo Medwani -
                    Ph.D. without forgetting Mr Edward Bujak. invert on yourself
                    and gain confidence to understand the science of the future:
                    Data Science & AI. we don&apos;t only have 40 weeks of
                    program, but we can repeat the program when we can, just
                    with one-time payment. you have the possibility to follow
                    this program for free for 2 weeks and then you decide. good
                    luck for all
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/posts/medwani_learng-data-science-and-ai-with-innovatics-activity-7106307681279254528-uazV?utm_source=share&utm_medium=member_desktop`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Yusuf Hussain</Testimonee>
                    <TestimoneePosition>
                      Student at Glenbard West HS
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    I attended this session by Dr. Medwani. As I hadn&apos;t
                    known anything about data science beforehand, this was a
                    very informative and beneficial session. I now have a broad
                    understanding of what data science is, and this class
                    motivated me to learn more about the field, and study it in
                    college. Dr. Medwani is also a fun and engaging professor
                    who explains complex topics very well. I would highly
                    recommend taking courses with him if you are interested in
                    learning about data science in any capacity.
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/posts/medwani_learng-data-science-and-ai-with-innovatics-activity-7106307681279254528-uazV?utm_source=share&utm_medium=member_desktop`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Muhammad Jawad</Testimonee>
                    <TestimoneePosition>
                      Guest Post and Content Writing specialist
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    This sounds like a great opportunity to both learn valuable
                    skills in data science and AI, as well as support a local
                    organization.
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Link
                  target='_blank'
                  href={`https://www.linkedin.com/posts/medwani_learng-data-science-and-ai-with-innovatics-activity-7106307681279254528-uazV?utm_source=share&utm_medium=member_desktop`}
                >
                  <Icon>
                    <GiHumanTarget size={40} />
                  </Icon>
                </Link>
                <div>
                  <div>
                    <Testimonee>Khalid Shahab</Testimonee>
                    <TestimoneePosition>
                      VP - Agile Transformation
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    I attended Dr. Medwani&apos;s eye-opening AI session at
                    ISNS, where he highlighted the profound impact of AI on our
                    lives, including its potential to rapidly reshape job
                    opportunities. He provided a clear roadmap for skill
                    development in AI, making it accessible for both IT and
                    non-IT backgrounds. The session served as an introduction to
                    a broader program, designed to pique participants&apos;
                    interest in the field. Despite logistical challenges
                    necessitating remote delivery over eight hours, Dr.
                    Medwani&apos;s engaging style of presenting complex ideas
                    kept us hooked. What&apos;s intriguing is that my son, who
                    is learning Python, machine learning, and deep learning,
                    found the session even more captivating than I did and is
                    eager to learn more from Dr. Medwani.
                    &apos;Paraphrased&apos;
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
          </Splide>
        </TestimonialCarousel>
      </MaxwidthContainer>
    </Container>
  );
};

export default Testimonials;

const Container = styled.section`
  padding: var(--container-padding);
`;

const Heading = styled.h4`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-lg);
  text-align: center;
  color: #ffffff;
`;

const SubHeading = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-md);
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  max-width: 70ch;
  margin-inline: auto;
`;

const TestimonialCarousel = styled.div`
  max-width: 70%;
  margin-inline: auto;
`;

const TestimonialCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 3rem;
  color: white;
  background: linear-gradient(
    145.35deg,
    rgba(62, 63, 73, 0.7) 4.67%,
    rgba(62, 63, 73, 0) 95.66%
  );
  backdrop-filter: blur(20px);
  border-radius: 10px;
  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const Icon = styled.p`
  background: linear-gradient(180deg, #ef1050 0%, #9169ff 100%);
  border-radius: 9999px;
  padding: 10px;
  svg {
  }
`;

const Testimonee = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 7px;
`;

const TestimoneePosition = styled.p`
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0;
  margin-bottom: 1.3rem;
`;

const TestimonialDetail = styled.p`
  line-height: 1.3;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media ${QUERIES.phoneAndSmaller} {
    font-size: revert;
  }
`;
