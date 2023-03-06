import { useEffect, useState } from "react";
import styled from "styled-components";

function MultipleAnswerQuestion(props) {
  const { question, onSelectAnswer, index } = props;
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  function handleAnswerSelection(event) {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAnswers((prev) => [...prev, value]);
    } else {
      setSelectedAnswers((prev) => prev.filter((e) => e !== value));
    }
    console.log(
      { multiselect: event.target.value },
      { checked },
      { selectedAnswers }
    );
  }

  useEffect(() => {
    onSelectAnswer(selectedAnswers);
  }, [selectedAnswers]);

  return (
    <div>
      <QuestionText>{`${index + 1}. ${question.question}`}</QuestionText>
      <QuestionOptions>
        {question.answers.map((option, index) => (
          <QuestionOption key={index}>
            <label>
              <input
                type="checkbox"
                name="answer"
                value={option}
                onChange={handleAnswerSelection}
              />
              {option}
            </label>
          </QuestionOption>
        ))}
      </QuestionOptions>
    </div>
  );
}

export default MultipleAnswerQuestion;

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
