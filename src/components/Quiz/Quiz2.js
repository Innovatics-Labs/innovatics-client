import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Button from "../Button";

const Question = ({
  question,
  onAnswerSelected,
  selectedAnswers,
  handleNextQuestion,
}) => (
  <QuestionContainer>
    <QuestionText>{question.question}</QuestionText>
    {question.picture && (
      <div>
        <Pic src={question.picture} alt="" />
      </div>
    )}
    <QuestionOptions>
      {question.options.map((option) => (
        <QuestionOption key={option.id}>
          <label>
            <input
              type={question.multipleCorrectAnswers ? "checkbox" : "radio"}
              id={option.id}
              name="answer"
              value={option.id}
              onChange={() => onAnswerSelected(option.id)}
              checked={selectedAnswers.includes(option.id)}
            />
            {option.answer}
          </label>
        </QuestionOption>
      ))}
    </QuestionOptions>
    {selectedAnswers !== false ? (
      <Button
        title={"Next Question"}
        onClick={handleNextQuestion}
        bgColor="#979797"
        color={"#0D1117"}
      />
    ) : null}
  </QuestionContainer>
);

const Quiz = ({ quiz = {} }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // input validation
  if (
    !quiz.title ||
    !quiz.questions ||
    !Array.isArray(quiz.questions) ||
    quiz.questions.length === 0
  ) {
    return <div>Invalid Quiz object.</div>;
  }

  const handleAnswerSelected = (answerId) => {
    setSelectedAnswers([...selectedAnswers, answerId]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const totalQuestions = quiz.questions.length;
    const correctAnswers = quiz.questions.filter((question) =>
      question.options.every(
        (option) =>
          (option.isCorrect && selectedAnswers.includes(option.id)) ||
          (!option.isCorrect && !selectedAnswers.includes(option.id))
      )
    ).length;
    const score = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    return (
      <ResultContainer>
        <h2>{quiz.title} - Results</h2>
        <p>{quiz.synopsis}</p>
        <p>
          Your score is {score}% ({correctAnswers} out of {totalQuestions}{" "}
          correct)
        </p>
        {quiz.questions.map((question, index) => (
          <div key={index}>
            <QuestionText>
              {index + 1}. {question.question}
            </QuestionText>
            {question.picture && <Pic src={question.picture} alt="" />}
            {/* {JSON.stringify(
              question.options.filter((option) =>
                selectedAnswers.includes(option.id)
              )
            )} */}
            <p>
              <span
                style={{
                  fontWeight: "600",
                  display: "inline-block",
                  paddingRight: 10,
                }}
              >
                Your answer:
              </span>
              {question.options
                .filter((option) => selectedAnswers.includes(option.id))
                .map(({ answer }) => answer)
                .join(", ")}
            </p>
            <p>
              <span
                style={{
                  fontWeight: "600",
                  display: "inline-block",
                  paddingRight: 10,
                  color: "green",
                }}
              >
                Correct answer:
              </span>
              {question.options
                .filter((option) => option.isCorrect)
                .map(({ answer }) => answer)
                .join(", ")}
            </p>
            {question.explanation && (
              <ReactMarkdown
                children={`#### Explanation: 
                ${question.explanation}`}
              />
            )}
          </div>
        ))}
        <Button onClick={handleReset} title="Take Quiz Again" />
      </ResultContainer>
    );
  }

  return (
    <div>
      <p>
        Question {currentQuestionIndex + 1} of {quiz.questions.length}
      </p>
      <Question
        selectedAnswers={selectedAnswers}
        question={quiz.questions[currentQuestionIndex]}
        onAnswerSelected={handleAnswerSelected}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default Quiz;

const QuestionContainer = styled.div`
  padding-inline: 2rem;
`;

const Pic = styled.img`
  width: 250px;
  height: auto;
  @media ${QUERIES.phoneAndSmaller} {
    max-width: 100%;
  }
`;

const QuestionText = styled.h4`
  color: white;
  font-size: var(--font-size-md);
`;

const QuestionOptions = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
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

const ResultContainer = styled.div`
  color: white;
  padding-inline: 2rem;
`;
