import { FaGraduationCap } from "react-icons/fa";
import styled from "styled-components";

const InstructorCard = ({ instructorName, isLeadInstructor }) => {
  return (
    <Instructor>
      <Cap>
        <FaGraduationCap color="white" size={50} />
      </Cap>
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

const Cap = styled.div`
  background: linear-gradient(90deg, #44e986 0%, #e94444 100%);
  border: 5px solid #f6f6f6;
  border-radius: 9999999px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
