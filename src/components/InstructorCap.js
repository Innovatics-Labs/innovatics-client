import { FaGraduationCap } from "react-icons/fa";
import styled from "styled-components";

const InstructorCap = ({ size, iconsize = 50 }) => {
  return (
    <Cap size={size}>
      <FaGraduationCap color="white" size={iconsize} />
    </Cap>
  );
};

export default InstructorCap;

const Cap = styled.div`
  background: linear-gradient(90deg, #44e986 0%, #e94444 100%);
  border: 5px solid #f6f6f6;
  border-radius: 9999999px;
  width: ${({ size }) => (size ? size : "100px")};
  height: ${({ size }) => (size ? size : "100px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
