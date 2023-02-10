import styled from "styled-components";
import { TbVideo, TbNotes } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import Button from "../Button";
import { FcCheckmark } from "react-icons/fc";

const TopicResourceCard = ({
  resourcetype,
  resourceTitle,
  resourceDuration,
}) => {
  const getIconName = (type) => {
    switch (type) {
      case "video":
        return <TbVideo color="#8691A6" size={25} />;
      case "quiz":
        return <TbNotes color="#8691A6" size={25} />;
      case "lab":
        return <BiTestTube color="#8691A6" size={25} />;
    }
  };

  return (
    <TopicResource>
      <FcCheckmark size={24} />
      <div>
        <ResourceTitle>{resourceTitle}</ResourceTitle>
        <ResourseTime>{resourceDuration}</ResourseTime>
        <ResourceType>
          <ResourceIcon>{getIconName(resourcetype)}</ResourceIcon>
          {resourcetype}
        </ResourceType>
      </div>
      <ResourceAction>
        <Button
          variant={"outline"}
          title={
            resourcetype === "video"
              ? "Play video"
              : resourcetype === "quiz"
              ? "Start Quiz"
              : resourcetype === "lab" && "Start Lab"
          }
        />
      </ResourceAction>
    </TopicResource>
  );
};

export default TopicResourceCard;

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
