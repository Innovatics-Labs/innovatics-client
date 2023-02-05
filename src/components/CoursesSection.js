import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { BsSun } from "react-icons/bs";

import Button from "./Button";
import GradientIcon from "./GradientIcon";
import arrow from "../assets/images/arrow.png";
import courseimg from "../assets/images/james-yarema-E-CdfbrnnFs-unsplash 2.png";

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
            <div style={{ width: "fit-content" }}>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </div>
            <CourseTitle>Python Introduction</CourseTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
            </div>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <div style={{ width: "fit-content" }}>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </div>
            <CourseTitle>Python Introduction</CourseTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
            </div>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <div style={{ width: "fit-content" }}>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </div>
            <CourseTitle>Python Introduction</CourseTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
            </div>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <div style={{ width: "fit-content" }}>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </div>
            <CourseTitle>Python Introduction</CourseTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
            </div>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <div style={{ width: "fit-content" }}>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </div>
            <CourseTitle>Python Introduction</CourseTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
            </div>
          </Content>
        </CourseCard>
        <CourseCard>
          <CourseImage>
            <Image src={courseimg} alt="" />
          </CourseImage>
          <Content>
            <div style={{ width: "fit-content" }}>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
            </div>
            <CourseTitle>Python Introduction</CourseTitle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
            </div>
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

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    padding-left: 0;
  }

  li {
    font-weight: 500;
    font-size: 22px;
    color: #8691a6;

    :first-child {
      color: #0d1117;
      border-bottom: 3px solid #44e986;
      border-radius: 20px 10px 0px 0px;
    }
  }
`;

const CourseList = styled.div`
  margin-block: 2rem;
  display: grid;
  /* grid-auto-flow: column; */
  grid-template-columns: repeat(4, 1fr);
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
`;
