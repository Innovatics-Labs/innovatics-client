import styled from "styled-components";
import { QUERIES } from "../../constants";

function SingleAnswerQuestion(props) {
  const { question, onSelectAnswer, index } = props;

  function handleAnswerSelection(event) {
    const selectedAnswer = event.target.value;
    onSelectAnswer(selectedAnswer);
    console.log({ selectedAnswer });
  }

  return (
    <Container>
      <QuestionText> {`${index + 1}. ${question.question}`}</QuestionText>
      {question.questionPic && (
        <Pic src={question.questionPic} alt="Question" />
      )}
      <QuestionOptions>
        {question.answers.map((option, index) => (
          <QuestionOption key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={handleAnswerSelection}
              />
              {option}
            </label>
          </QuestionOption>
        ))}
      </QuestionOptions>
    </Container>
  );
}

export default SingleAnswerQuestion;

const Container = styled.div``;

const Pic = styled.img`
  object-fit: contain;
  @media ${QUERIES.phoneAndSmaller} {
    max-width: 100%;
  }
`;

const QuestionText = styled.h4`
  color: white;
`;

const QuestionOptions = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const QuestionOption = styled.li`
  color: #8691a6;
  width: fit-content;
  label {
    display: flex;
    gap: 0.6rem;
    margin-bottom: 10px;
  }
  input {
    color: #8691a6;
  }
`;
