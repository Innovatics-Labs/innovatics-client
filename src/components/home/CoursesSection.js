import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BsSun } from "react-icons/bs";

import Button from "../Button";
import GradientIcon from "../GradientIcon";
import arrow from "../../assets/images/arrow.png";
import courseimg from "../../assets/images/james-yarema-E-CdfbrnnFs-unsplash 2.png";
import { QUERIES } from "../../constants";

const CoursesSection = () => {
  return (
    <Container>
      <TabsSection>
        <ul>
          <li>
            <Link href={"/"}>Data Science</Link>
          </li>
          <li>
            <Link href={"/"}>Software</Link>
          </li>
          <li>Security</li>
          <li>Cloud</li>
        </ul>
        <Button title={"View All"} bgColor={"#D5DBE2"} size={"18px"} />
      </TabsSection>
      <CourseList>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <Gradient>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </Gradient>
            <CourseTitle>Python Introduction</CourseTitle>
            <CourseLevel>
              <p>Beginner</p>
              <Image src={arrow} alt={""} />
            </CourseLevel>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <Gradient>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </Gradient>
            <CourseTitle>Python Introduction</CourseTitle>
            <CourseLevel>
              <p>Beginner</p>
              <Image src={arrow} alt={""} />
            </CourseLevel>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <Gradient>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </Gradient>
            <CourseTitle>Python Introduction</CourseTitle>
            <CourseLevel>
              <p>Beginner</p>
              <Image src={arrow} alt={""} />
            </CourseLevel>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <Gradient>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </Gradient>
            <CourseTitle>Python Introduction</CourseTitle>
            <CourseLevel>
              <p>Beginner</p>
              <Image src={arrow} alt={""} />
            </CourseLevel>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <Gradient>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </Gradient>
            <CourseTitle>Python Introduction</CourseTitle>
            <CourseLevel>
              <p>Beginner</p>
              <Image src={arrow} alt={""} />
            </CourseLevel>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <Gradient>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </Gradient>
            <CourseTitle>Python Introduction</CourseTitle>
            <CourseLevel>
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "18px",
                  color: "#8691A6",
                  marginBlock: 0,
                }}
              >
                Beginner
              </p>
              <Image src={arrow} alt={""} />
            </CourseLevel>
          </Content>
        </CourseCard>
      </CourseList>
    </Container>
  );
};

export default CoursesSection;

const Container = styled.section`
  background-color: #fafcff;
  padding: 2rem var(--container-padding);
`;

const TabsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    padding-left: 0;
    flex-wrap: wrap;
  }

  li {
    font-weight: 500;
    font-size: 22px;
    color: #8691a6;

    :first-child {
      color: #0d1117;
      padding-bottom: 0.5rem;
      border-bottom: 3px solid #44e986;
      border-radius: 20px 10px 0px 0px;
    }
  }

  @media ${QUERIES.phoneAndSmaller} {
    ul {
      gap: 1.5rem;
    }

    li {
      font-size: 14px;
    }
  }
`;

const CourseList = styled.div`
  margin-block: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 1rem;
`;

const CourseCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

const CourseImage = styled.div`
  img {
    line-height: 0px;
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const CourseTitle = styled.div`
  margin-block: 1rem;
  font-weight: 600;
  font-size: 18px;
  color: black;
`;

const Gradient = styled.div`
  width: fit-content;
`;

const CourseLevel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 18px;
    color: #8691a6;
    margin-block: 0;
  }
`;
