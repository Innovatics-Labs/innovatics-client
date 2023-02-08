import styled from "styled-components";
import InstructorCap from "./InstructorCap";

const InstructorCard = ({ instructorName, isLeadInstructor }) => {
  return (
    <Instructor>
      <InstructorCap />
      <div>
        <InstructorName>{instructorName}</InstructorName>
        {isLeadInstructor && <LeadInstructor>Lead Instructor</LeadInstructor>}
      </div>
    </Instructor>
  );
};

export default InstructorCard;

const Instructor = styled.div`
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  width: fit-content;
  display: grid;
  place-items: center;
`;

const InstructorName = styled.p`
  font-size: 18px;
  width: min-content;
  margin-block: 5px;
  color: #ffffff;
`;

const LeadInstructor = styled.p`
  margin-block: 5px;
  color: #44e986;
  font-size: 12px;
`;
