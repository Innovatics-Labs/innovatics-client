import styled from "styled-components";

const Copyright = ({ showHr }) => {
  return (
    <CopyrightStyle>
      {showHr && <hr />}
      <p>Copyright &copy; Innovatics 2022 All right reserved</p>
    </CopyrightStyle>
  );
};

export default Copyright;

const CopyrightStyle = styled.div`
  text-align: center;
  color: #8691a6;

  hr {
    margin-bottom: 1.5rem;
    border: 1px solid #8691a6;
  }
`;
