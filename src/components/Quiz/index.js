import { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import styled from "styled-components";
import Question from "./Question";
import QuizResultPage from "./QuizResultPage";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS, QUERIES } from "../../constants";

function Quiz({ quizData, isOpen, onDismiss }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function handleAnswerSelection(answer) {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    currentQuestion.selectedAnswer = answer;
    if (currentQuestion.answers.includes(answer)) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function handleAnswerInput(answer) {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    currentQuestion.selectedAnswer = answer;
    if (currentQuestion.correctAnswer.includes(answer)) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function handleRetryQuestion() {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    currentQuestion.selectedAnswer = null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <DContent>
        <Header>
          <Back onClick={onDismiss}>
            <FaLessThan size={20} color="white" /> <span>Back</span>
          </Back>
          <HeaderContent>
            <Title>Test your knowledge: Introduction to python</Title>
            <Detail>
              <li>Practice Quiz</li>
              <li>{quizData.questions.length} Questions</li>
              <li>{currentQuestionIndex} Attempts</li>
            </Detail>
          </HeaderContent>
        </Header>
        <Content>
          {/* {quizData.questions.map((question, index) => (
            <Question
              key={index}
              question={question}
              onRetry={handleRetryQuestion}
              currentQuestionIndex={index}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          ))} */}
          {currentQuestionIndex < quizData.questions.length ? (
            <Question
              question={quizData.questions[currentQuestionIndex]}
              onRetry={handleRetryQuestion}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          ) : (
            <QuizResultPage quizData={quizData} />
          )}
        </Content>
      </DContent>
    </Overlay>
  );
}
export default Quiz;

const Overlay = styled(DialogOverlay)`
  --color-backdrop: hsl(${COLORS.gray[700]} / 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const DContent = styled(DialogContent)`
  width: 80%;
  height: 100%;
  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const Header = styled.div`
  background: #000000;
  padding-inline: 2rem;
  color: white;
  display: flex;
  gap: 1rem;
  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 1rem;
  }
`;

const HeaderContent = styled.div`
  /* padding: 1rem; */
  flex: 1;
`;

const Back = styled.p`
  border: 1px solid white;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 2rem;
  margin-block: 0;
  cursor: pointer;
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0.5rem 1.5rem;
    /* align-self: center; */
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
    font-size: 16px;
  }
`;

const Detail = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  padding-left: 0px;
  list-style: none;
  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
    font-size: 14px;
    flex-wrap: wrap;
  }
`;

const Content = styled.div`
  background: #0d1117;
  padding: 1rem;
`;
