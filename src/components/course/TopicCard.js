import { useState } from "react";
import styled from "styled-components";
import TopicResourceCard from "./TopicResourceCard";
import UnstyledButton from "../UnstyledButton";
import { QUERIES } from "../../constants";
import useToggle from "../../hooks/useToggle";

const TopicCard = ({ topicTitle, activityCount, topicResource }) => {
  const [showDetails, setShowDetails] = useToggle(true);
  return (
    <Container>
      <TopicDetails>
        <TopicTitle>{topicTitle}</TopicTitle>
        <TopicDetail>Activities: {activityCount}</TopicDetail>
        <TopicToggle onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide details" : "Show Details"}
        </TopicToggle>
      </TopicDetails>
      {showDetails && (
        <TopicContentWrapper>
          <TopicResourceList>
            {topicResource &&
              topicResource.map((resource) => (
                <TopicResourceCard
                  key={resource.name}
                  resourcetype={resource.type}
                  resourceTitle={resource.name}
                  resourceDuration={resource.duration || "15m 6s"}
                  videoUrl={resource.videoUrl}
                  labUrl={resource.labUrl}
                />
              ))}
          </TopicResourceList>
        </TopicContentWrapper>
      )}
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
  padding: 2.3rem;
  background: linear-gradient(
    86.57deg,
    rgba(62, 63, 73, 0.9) 5.65%,
    rgba(4, 13, 33, 0.3) 94.35%,
    rgba(4, 13, 33, 0.3) 94.35%
  );
  @media ${QUERIES.tabletAndSmaller} {
    padding: 1.5rem;
  }
`;

const TopicTitle = styled.p`
  font-weight: 600;
  font-size: clamp(1.3rem, 1.429vw + 0.464rem, 1.75rem);
`;

const TopicDetail = styled.p`
  font-weight: 500;
  font-size: var(--font-size-md);
  margin-bottom: 10px;
`;

const TopicToggle = styled(UnstyledButton)`
  font-weight: 500;
  font-size: var(--font-size-md);
  margin-top: 10px;
  text-decoration-line: underline;
  color: #8691a6;
`;

const TopicContentWrapper = styled.article`
  padding: 2.3rem;
  background: linear-gradient(
    263.71deg,
    rgba(62, 63, 73, 0.9) 0%,
    rgba(34, 39, 54, 0.610832) 0.58%,
    rgba(4, 13, 33, 0.3) 97.36%,
    rgba(4, 13, 33, 0.3) 97.36%
  );
  @media ${QUERIES.tabletAndSmaller} {
    padding: 1.5rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 1rem;
  }
`;

const TopicResourceList = styled.div``;
