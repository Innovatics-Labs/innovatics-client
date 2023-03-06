import { useEffect, useState } from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Button from "../Button";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";
import SingleAnswerQuestion from "./SingleAnswerQuestion";

function Question(props) {
  const { question, onRetry, setCurrentQuestionIndex, currentQuestionIndex } =
    props;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const onSelectAnswer = (e) => {
    setSelectedAnswer(e);
    // console.log({ selectedAnswer });
  };

  function handleRetryQuestion() {
    setSelectedAnswer(null);
  }

  function handleNextQuestion() {
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  return (
    <Container>
      {question.answerSelectionType === "single" ? (
        <SingleAnswerQuestion
          question={question}
          onSelectAnswer={setSelectedAnswer}
          index={currentQuestionIndex}
        />
      ) : (
        <MultipleAnswerQuestion
          question={question}
          onSelectAnswer={setSelectedAnswer}
          index={currentQuestionIndex}
        />
      )}
      {selectedAnswer &&
      JSON.stringify(question.correctAnswer) ===
        JSON.stringify(selectedAnswer) ? (
        <p>Correct! {question.explanation}</p>
      ) : selectedAnswer ? (
        <div>
          <p>
            {question.messageForIncorrectAnswer}. The correct answer is{" "}
            {question.correctAnswer}
          </p>
          <p>{question.explanation}</p>
        </div>
      ) : null}
      {selectedAnswer ? (
        <Button
          title={"Next Question"}
          onClick={handleNextQuestion}
          bgColor="#979797"
          color={"#0D111780"}
        />
      ) : null}
    </Container>
  );
}

export default Question;

const Container = styled.div`
  color: white;
  padding: 1rem 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    padding: 1rem;
  }
`;
