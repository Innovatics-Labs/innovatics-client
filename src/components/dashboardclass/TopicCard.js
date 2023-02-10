import styled from "styled-components";
import TopicResourceCard from "./TopicResourceCard";

const TopicCard = ({ topicTitle, activityCount }) => {
  return (
    <Container>
      <TopicDetails>
        <TopicTitle>{topicTitle}</TopicTitle>
        <TopicDetail>Activities: {activityCount}</TopicDetail>
        <TopicToggle>Hide details</TopicToggle>
      </TopicDetails>
      <TopicContentWrapper>
        <TopicResourceList>
          <TopicResourceCard
            resourcetype={"video"}
            resourceTitle={"Innovatics Walk around"}
            resourceDuration={"15m 6s"}
          />
          <TopicResourceCard
            resourcetype={"video"}
            resourceTitle={"Python lab with Jupyter Notebook"}
            resourceDuration={"15m 6s"}
          />
          <TopicResourceCard
            resourcetype={"quiz"}
            resourceTitle={"Python IDE test"}
            resourceDuration={"15m 10s"}
          />
          <TopicResourceCard
            resourcetype={"lab"}
            resourceTitle={"Python Jupyter Lab"}
            resourceDuration={"10m 10s"}
          />
        </TopicResourceList>
      </TopicContentWrapper>
    </Container>
  );
};

export default TopicCard;

const Container = styled.article`
  overflow: hidden;
  background: linear-gradient(
    286.85deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(62, 63, 73, 0.7) 98.21%
  );
  border-radius: 20px;
  margin-bottom: 1.5rem;
`;

const TopicDetails = styled.div`
  padding: 40px;
  background: linear-gradient(
    86.57deg,
    rgba(62, 63, 73, 0.9) 5.65%,
    rgba(4, 13, 33, 0.3) 94.35%,
    rgba(4, 13, 33, 0.3) 94.35%
  );
`;

const TopicTitle = styled.p`
  font-weight: 600;
  font-size: 28px;
`;

const TopicDetail = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;

const TopicToggle = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-top: 10px;
  text-decoration-line: underline;
  color: #8691a6;
`;

const TopicContentWrapper = styled.article`
  padding: 40px;
  background: linear-gradient(
    263.71deg,
    rgba(62, 63, 73, 0.9) 0%,
    rgba(34, 39, 54, 0.610832) 0.58%,
    rgba(4, 13, 33, 0.3) 97.36%,
    rgba(4, 13, 33, 0.3) 97.36%
  );
`;

const TopicResourceList = styled.div``;
