import { TbVideo, TbNotes } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";

import styled from "styled-components";
import Button from "../Button";

const VideoCard = () => {
  return (
    <Container>
      <TopicDetails>
        <TopicTitle>Python Lab & Innovatics platform</TopicTitle>
        <TopicDetail>Activities: 2</TopicDetail>
        <TopicToggle>Hide details</TopicToggle>
      </TopicDetails>
      <TopicContentWrapper>
        <TopicResourceList>
          <TopicResource>
            <FcCheckmark size={24} />
            <div>
              <ResourceTitle>Innovatics Walk around</ResourceTitle>
              <ResourseTime>15m 6s</ResourseTime>
              <ResourceType>
                <ResourceIcon>
                  <TbVideo color="#8691A6" size={25} />
                </ResourceIcon>
                video
              </ResourceType>
            </div>
            <ResourceAction>
              <Button variant={"outline"} title="Play video" />
            </ResourceAction>
          </TopicResource>
          <TopicResource>
            <FcCheckmark size={24} />
            <div>
              <ResourceTitle>Python Jupyter Lab</ResourceTitle>
              <ResourseTime>15m 6s</ResourseTime>
              <ResourceType>
                <ResourceIcon>
                  <BiTestTube color="#8691A6" size={25} />
                </ResourceIcon>
              </ResourceType>
            </div>
            <ResourceAction>
              <Button variant={"outline"} title="Play video" />
            </ResourceAction>
          </TopicResource>
          <TopicResource>
            <FcCheckmark size={24} />
            <div>
              <ResourceTitle>Python IDE test</ResourceTitle>
              <ResourseTime>15m 6s</ResourseTime>
              <ResourceType>
                <ResourceIcon>
                  <TbNotes color="#8691A6" size={25} />
                </ResourceIcon>
                Quiz
              </ResourceType>
            </div>
            <ResourceAction>
              <Button variant={"outline"} title="Play video" />
            </ResourceAction>
          </TopicResource>
        </TopicResourceList>
      </TopicContentWrapper>
    </Container>
  );
};

export default VideoCard;

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

const TopicResource = styled.article`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  padding: 20px;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    86.57deg,
    rgba(62, 63, 73, 0.9) 5.65%,
    rgba(4, 13, 33, 0.3) 94.35%,
    rgba(4, 13, 33, 0.3) 94.35%
  );
  border-radius: 10px;
`;

const ResourceTitle = styled.p`
  margin-top: 0px;
  font-weight: 500;
  font-size: 18px;
`;

const ResourseTime = styled.p`
  font-weight: 500;
  color: #8691a6;
`;

const ResourceType = styled.p`
  font-weight: 400;
  color: #8691a6;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ResourceIcon = styled.span`
  display: inline-block;
`;

const ResourceAction = styled.div`
  align-self: end;
  justify-self: end;
`;
