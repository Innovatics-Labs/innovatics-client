import styled from "styled-components";
import { TbVideo, TbNotes } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import Button from "../Button";
import { FcCheckmark } from "react-icons/fc";
import useToggle from "../../hooks/useToggle";
import YouTubeFrame from "../YoutubeEmbed";
import { QUERIES } from "../../constants";

const TopicResourceCard = ({
  resourcetype,
  resourceTitle,
  resourceDuration,
  videoUrl,
}) => {
  const [isShowVideo, setIsShowVideo] = useToggle();
  const [isMarkFinished, setIsMarkFinished] = useToggle();

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
    <Container>
      <TopicResource>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: ".5rem",
          }}
        >
          <FcCheckmark size={24} />
          <div>
            <ResourceTitle>{resourceTitle}</ResourceTitle>
            <ResourseTime>{resourceDuration}</ResourseTime>
            <ResourceType>
              <ResourceIcon>{getIconName(resourcetype)}</ResourceIcon>
              {resourcetype}
            </ResourceType>
          </div>
        </div>
        <ResourceAction>
          <Button
            onClick={setIsShowVideo}
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
      {isShowVideo && resourcetype === "video" && (
        <VideoShow showVideo={isShowVideo}>
          <Finished onClick={setIsMarkFinished}>
            <p>MARK FINISHED</p>
            <Switch className="switch">
              <Input
                type="checkbox"
                checked={isMarkFinished}
                onClick={setIsMarkFinished}
              />
              <Slider className="slider round"></Slider>
            </Switch>
          </Finished>
          <YouTubeFrame video={videoUrl} />
        </VideoShow>
      )}
    </Container>
  );
};

export default TopicResourceCard;

const Container = styled.article`
  margin-bottom: 1.5rem;
  background: linear-gradient(
    86.57deg,
    rgba(62, 63, 73, 0.9) 5.65%,
    rgba(4, 13, 33, 0.3) 94.35%,
    rgba(4, 13, 33, 0.3) 94.35%
  );
  border-radius: 10px;
`;

const TopicResource = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  padding: 20px;
  @media ${QUERIES.phoneAndSmaller} {
    padding: 1rem;
    display: revert;
  }
`;

const ResourceTitle = styled.p`
  margin-top: 0px;
  font-weight: 500;
  font-size: var(--font-size-md);
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
  @media ${QUERIES.phoneAndSmaller} {
    /* width: 100%; */
  }
`;

const VideoShow = styled.div`
  padding: 20px;

  background: linear-gradient(
    263.57deg,
    rgba(62, 63, 73, 0.9) -1.97%,
    rgba(34, 39, 54, 0.610832) -1.39%,
    rgba(4, 13, 33, 0.3) 97.36%,
    rgba(4, 13, 33, 0.3) 97.36%
  );
  margin-block: 1rem;
  /* $({showVideo}=>disp) */
`;

const Finished = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: fit-content;
`;

const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 28px;
  /* border-radius: ${({ rounded }) => `${rounded ? "2rem" : "10px"}`}; */

  .round {
    border-radius: 34px;
  }

  .round:before {
    border-radius: 50%;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #36373a;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  :before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: #0d1117;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked + ${Slider} {
    background-color: #2196f3;
  }

  :focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  :checked + ${Slider}:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
`;
